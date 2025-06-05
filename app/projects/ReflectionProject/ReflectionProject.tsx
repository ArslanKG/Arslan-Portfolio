import { useEffect, useRef } from 'react';
import reflectionStyles from "../../styles/ReflectionProject.css?url";
import { Link } from 'react-router-dom';
import { useLanguage } from "~/contexts/LanguageContext";

export const links = () => [
  {
    rel: "stylesheet",
    href: reflectionStyles
  },
];

export default function ReflectionProject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true }) ||
              canvas.getContext('webgl', { preserveDrawingBuffer: true });
    if (!gl) {
      console.error('WebGL desteklenmiyor');
      // Fallback için basit canvas rendering veya mesaj göster
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '24px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Bu tarayıcı WebGL desteklemiyor', canvas.width/2, canvas.height/2);
      }
      return;
    }

    const dpr = window.devicePixelRatio;
    
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, `#version 300 es
      precision highp float;
      out vec4 O;
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 touch;
      uniform vec2 move;
      #define FC gl_FragCoord.xy
      #define R resolution
      #define T (.5*time)
      #define S smoothstep
      #define N normalize
      #define rot(a) mat2(cos(a-vec4(0,11,33,0)))
      float rnd(vec2 p) { return fract(sin(dot(p,vec2(12.9898,78.233)))*345678.); }
      float noise(vec2 p) { vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f); float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.); return mix(mix(a,b,u.x),mix(c,d,u.x),u.y); }
      float fbm(vec2 p) { float t=.0,a=1.; for(int i=0;i<5;i++) { t+=a*noise(p+T*.2);p*=2.;a*=.5; } return t; }
      vec3 sky(vec3 r, vec3 l) {
        float t=T*.1,
        v=pow(max(.0,dot(r,l)),3.),
        w=pow(clamp(-dot(r,l),.0,1.),.8);
        vec2 uv=vec2(abs(atan(r.z,r.x)),atan(r.y,dot(r.xz,r.xz))-t)*9./6.28318;
        
        float
        a=fbm(uv*vec2(1,3)),
        b=fbm(uv*vec2(2,5));
        b=S(.3,.7,b);

        vec3
        col=mix(vec3(.6,.8,.9),vec3(.1),a*b);
        col=mix(col,vec3(1,.8,.3)*b,v);
        col=mix(col*.2,mix(vec3(.1,.1,.162),vec3(1.,.7,.4),v),v);
        col-=mix(vec3(0),vec3(.16,.12,.1),w)*(2.-dot(r.xz,r.xz));

        return col;
      }
      void cam(inout vec3 p) {
        p.yz*=rot(move.y*6.3/min(R.x,R.y)+sin(T*.02)*.5);
        p.xz*=rot(-move.x*6.3/min(R.x,R.y)+T*.05-3.14);
      }
      float map(vec3 p) {
        p.xz*=rot(.7853981);
        return length(p)-1.;
      }
      void main() {
        vec2 uv=(FC-.5*R)/min(R.x,R.y);
        vec3 col=vec3(0),
        p=vec3(0,0,-6),
        rd=N(vec3(uv,2));
        cam(p); cam(rd);
        float a=1.;
        for (float i=.0; i++<400.;) {
          float d=map(p);
          if (d<1e-3) {
            vec3 n=N(p);
            
            a=mix(5e-3,.85,clamp(1.-dot(rd,n),.0,1.));
            rd=reflect(rd,n);
            d=6e-2;
          }
          if (d>12.) {
            col=mix(vec3(.25),sky(rd, N(vec3(0,1,0)))*1.5+.2,a);
            break;
          }
          p+=rd*d;
        }
        O = vec4(col, 1);
      }
    `);
    gl.compileShader(fragmentShader);

    // Vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, `#version 300 es
      precision highp float;
      in vec4 position;
      void main() {
        gl_Position = position;
      }
    `);
    gl.compileShader(vertexShader);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    programRef.current = program;


    const vertices = new Float32Array([-1,1,-1,-1,1,1,1,-1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const timeLocation = gl.getUniformLocation(program, "time");
    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const touchLocation = gl.getUniformLocation(program, "touch");
    const moveLocation = gl.getUniformLocation(program, "move");

    let mouseMove = [0, 0];
    let mousePos = [0, 0];

    const handleMouseMove = (e: MouseEvent) => {
      mouseMove[0] += e.movementX;
      mouseMove[1] += e.movementY;
      mousePos[0] = e.clientX * dpr;
      mousePos[1] = (canvas.height - e.clientY * dpr);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Render loop
    let startTime = performance.now();
    function render() {
      const time = (performance.now() - startTime) * 0.001;
      
      if (!canvas || !gl || !programRef.current) return;

      gl.useProgram(programRef.current);
      gl.uniform1f(timeLocation!, time);
      gl.uniform2f(resolutionLocation!, canvas.width, canvas.height);
      gl.uniform2f(touchLocation!, mousePos[0], mousePos[1]);
      gl.uniform2f(moveLocation!, mouseMove[0], mouseMove[1]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(render);
    }

    const handleResize = () => {
      if (!canvas || !gl) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    render();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      
      if (gl && programRef.current) {
        gl.useProgram(null);
        gl.deleteProgram(programRef.current);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.deleteBuffer(buffer);
      }
    };
  }, []);

  const { language } = useLanguage();

  return (
    <>
      <Link to="/" className="home-button">
        {language === 'tr' ? 'Ana Sayfa' : 'Home'}
      </Link>
      <canvas ref={canvasRef} className="reflection-canvas" />
    </>
  );
} 