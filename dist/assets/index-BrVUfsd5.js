import{r as c,a as Y,L as C,u as $,R as J,B as U,b as V,c as S}from"./vendor-DBg8pCjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}})();var I={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K=c,W=Symbol.for("react.element"),X=Symbol.for("react.fragment"),Z=Object.prototype.hasOwnProperty,Q=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function z(o,r,i){var a,n={},t=null,s=null;i!==void 0&&(t=""+i),r.key!==void 0&&(t=""+r.key),r.ref!==void 0&&(s=r.ref);for(a in r)Z.call(r,a)&&!q.hasOwnProperty(a)&&(n[a]=r[a]);if(o&&o.defaultProps)for(a in r=o.defaultProps,r)n[a]===void 0&&(n[a]=r[a]);return{$$typeof:W,type:o,key:t,ref:s,props:n,_owner:Q.current}}w.Fragment=X;w.jsx=z;w.jsxs=z;I.exports=w;var e=I.exports,k={},L=Y;k.createRoot=L.createRoot,k.hydrateRoot=L.hydrateRoot;const ee={LANGUAGE_TRANSITION:300,FADE_TRANSITION:300,HOVER_TRANSITION:200},x={ABOUT:"about",EXPERIENCE:"experience",PROJECTS:"projects"},te=[{id:"nav-about",section:x.ABOUT,labelKey:"about"},{id:"nav-experience",section:x.EXPERIENCE,labelKey:"experience"},{id:"nav-projects",section:x.PROJECTS,labelKey:"projects"}],ne={TR:"tr",EN:"en"},F=c.createContext(void 0),re=({children:o})=>{const[r,i]=c.useState(ne.TR),[a,n]=c.useState(!1),t=s=>{s!==r&&(n(!0),setTimeout(()=>{i(s),n(!1)},ee.LANGUAGE_TRANSITION))};return e.jsx(F.Provider,{value:{language:r,setLanguage:t,isTransitioning:a},children:o})},f=()=>{const o=c.useContext(F);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o},ie={tr:{about:"Hakkımda",experience:"Deneyim",projects:"Projeler",devTitle:"Kıdemli Yazılım Geliştirici (.NET | Cloud | Muhasebe | FinTech | SaaS | React | Vue.js)",devIntro:"Bulut tabanlı muhasebe ve fintek çözümleri geliştiren deneyimli yazılım geliştiricisi."},en:{about:"About",experience:"Experience",projects:"Projects",devTitle:"Senior Software Developer (.NET | Cloud | Accounting | FinTech | SaaS | React | Vue.js)",devIntro:"Experienced software developer focused on developing cloud-based accounting and fintech solutions."}};function oe(o,r){const i=o[r];return i&&i.length>0?i[0]:null}function b(o,r,i){return i?`${o}-${r}-${i}`:`${o}-${r}`}function P(...o){return o.filter(Boolean).join(" ")}const ae=({onAboutClick:o,onExperienceClick:r,onProjectsClick:i,activeSection:a})=>{const{language:n,isTransitioning:t}=f(),s=ie[n],d=c.useMemo(()=>({about:o,experience:r,projects:i}),[o,r,i]);return e.jsxs("header",{id:"main-header",className:P("modern-header fade-transition",t?"fade-out":"fade-in"),children:[e.jsxs("div",{id:"logo-container",className:"modern-logo",children:[e.jsx("h1",{id:"dev-name",className:"dev-name",children:"Arslan Kemal GÜNDÜZ"}),e.jsx("h2",{id:"dev-title",className:"dev-role",children:"Senior Software Developer"}),e.jsxs("div",{className:"tech-stack",children:[e.jsx("span",{className:"tech-item",children:".NET"}),e.jsx("span",{className:"tech-item",children:"React"}),e.jsx("span",{className:"tech-item",children:"JavaScript"}),e.jsx("span",{className:"tech-item",children:"Cloud"})]}),e.jsx("p",{id:"dev-intro",className:"dev-intro",children:s.devIntro})]}),e.jsx("nav",{id:"main-nav",className:"modern-nav",role:"navigation","aria-label":"Main navigation",children:e.jsx("div",{className:"nav-items",children:te.map(({id:p,section:u,labelKey:l},h)=>e.jsxs("button",{id:p,onClick:d[u],className:P("modern-nav-item",a===u&&"active"),disabled:t,"aria-current":a===u?"page":void 0,children:[e.jsxs("span",{className:"nav-number",children:["0",h+1]}),e.jsx("span",{className:"nav-text",children:s[l]})]},p))})})]})},se={tr:{aboutMe:"Hakkımda",aboutPara1:".NET geliştirmede 3 yıldan fazla deneyimle birlikte, React.js ve Vue.js gibi modern frontend teknolojileriyle de kapsamlı çalışmalar yaptım.",aboutPara2:"Çeşitli teknik becerilerim, verimli, ölçeklenebilir ve duyarlı web uygulamaları oluşturmamı, backend ve frontend işlevselliklerini sorunsuz bir şekilde birleştirmemi sağlıyor.",aboutPara3:"Yeni araçlar ve çerçeveler öğrenmeye tutkulu, full-stack geliştirmede optimal çözümler sunmak için uzmanlığımı sürekli geliştiriyorum."},en:{aboutMe:"About",aboutPara1:"Experienced software developer with strong skills in .NET and modern web technologies (React, Vue.js, JavaScript, HTML, CSS) focused on developing cloud-based accounting and fintech solutions.",aboutPara2:"Extensive background in SaaS product development, RESTful API integration, financial application modules (e-invoice, stock, current accounts), and agile methodologies.",aboutPara3:"Committed to building scalable, maintainable, and user-centric software for the finance sector, with passion for learning new technologies and frameworks."}},_=c.forwardRef((o,r)=>{const{language:i}=f(),a=se[i];return e.jsxs("section",{id:"about-section",ref:r,children:[e.jsx("h2",{id:"about-heading",className:"section-heading",children:a.aboutMe}),e.jsx("div",{id:"about-content",className:"about-content",children:e.jsxs("div",{id:"about-text",className:"about-text",children:[e.jsx("p",{id:"about-para-1",children:a.aboutPara1}),e.jsx("p",{id:"about-para-2",children:a.aboutPara2}),e.jsx("p",{id:"about-para-3",children:a.aboutPara3})]})})]})});_.displayName="About";const ce={tr:[{period:"Tem 2024 — Şimdi",role:"Senior Software Developer",company:"Logo Yazılım",type:"Tam Zamanlı, Remote",location:"İzmir, Türkiye",description:".NET ve modern web framework'leriyle SaaS bulut muhasebe modülleri geliştirdim. RESTful API'ler, bankacılık API'leri ve POS sistemleri implement ettim.",technologies:["C# (.NET)","React","RESTful API","JavaScript","Mongo","Postgre"]},{period:"Ara 2021 — Tem 2024",role:"Software Development Specialist",company:"Logo Yazılım",type:"Tam Zamanlı, Hybrid",location:"İzmir, Türkiye",description:".NET ve modern web framework'leriyle SaaS bulut muhasebe modülleri geliştirdim. RESTful API'ler, bankacılık API'leri ve POS sistemleri implement ettim.",technologies:["C# (.NET)","React","Vue.js","RESTful API","SQL","JavaScript"]},{period:"Eyl 2021 — Ara 2021",role:"Software Development Specialist",company:"Logo Yazılım",type:"Yarı Zamanlı, Remote",location:"Kocaeli, Türkiye",description:"Temel ürün geliştirme süreçlerine katkıda bulundum. Agile metodolojilerini öğrenerek kod inceleme süreçlerine aktif olarak katıldım.",technologies:["C# (.NET)","JavaScript","HTML5","CSS3","SQL"]},{period:"Ağu 2021",role:"Software Developer",company:"Logo Yazılım",type:"Stajyer, Remote",location:"Kocaeli, Türkiye",description:"Staj sürecinde .NET teknolojileri ve modern web geliştirme prensiplerini öğrendim. Takım içi iş birliği deneyimi kazandım.",technologies:["C# (.NET)","JavaScript","HTML5","CSS3"]}],en:[{period:"Jul 2024 — Present",role:"Senior Software Developer",company:"Logo Yazılım",type:"Full-time",location:"İzmir, Turkey",description:"Leading role in developing SaaS cloud accounting modules and product architecture. Designing scalable solutions with microservices architecture.",technologies:["C# (.NET)","React","Vue.js","Microservices","Azure","SQL"]},{period:"Dec 2021 — Jul 2024",role:"Software Development Specialist",company:"Logo Yazılım",type:"Full-time",location:"İzmir, Turkey",description:"Developed SaaS cloud accounting modules with .NET and modern web frameworks. Implemented RESTful APIs, banking APIs, and POS systems.",technologies:["C# (.NET)","React","Vue.js","RESTful API","SQL","JavaScript"]},{period:"Sep 2021 — Dec 2021",role:"Software Development Specialist",company:"Logo Yazılım",type:"Part-time",location:"Kocaeli, Turkey",description:"Contributed to core product development workflows. Participated actively in Agile sprints and code reviews.",technologies:["C# (.NET)","JavaScript","HTML5","CSS3","SQL"]},{period:"Aug 2021",role:"Software Developer",company:"Logo Yazılım",type:"Internship",location:"Kocaeli, Turkey",description:"Learned .NET technologies and modern web development principles. Gained experience in team collaboration.",technologies:["C# (.NET)","JavaScript","HTML5","CSS3"]}]},D=c.forwardRef((o,r)=>{const{language:i}=f(),a=ce[i];return e.jsxs("section",{id:"experience",className:"experience-section",ref:r,children:[e.jsx("h2",{className:"section-heading",children:i==="tr"?"Deneyim":"Experience"}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"experience-timeline",children:a.map((n,t)=>e.jsxs("div",{className:"experience-item",children:[e.jsx("div",{className:"experience-period",children:n.period}),e.jsxs("div",{className:"experience-content",children:[e.jsxs("div",{className:"experience-header",children:[e.jsx("h3",{className:"experience-role",children:n.role}),e.jsx("div",{className:"experience-company",children:n.company})]}),e.jsxs("div",{className:"experience-meta",children:[e.jsx("span",{className:"experience-type",children:n.type}),e.jsx("span",{className:"experience-location",children:n.location})]}),e.jsx("p",{className:"experience-description",children:n.description}),e.jsx("div",{className:"experience-technologies",children:n.technologies.map((s,d)=>e.jsx("span",{className:"tech-tag",children:s},d))})]})]},t))})})]})});D.displayName="Experience";const le={tr:[{projects:"Projeler"}],en:[{projects:"Projects"}]},de={tr:[{title:"404 Süper Kahraman Sayfası",description:"Kullanıcı dostu bir 404 hata sayfası. Animasyonlu yıldızlar ve Superman temalı tasarımıyla, kayıp sayfaları eğlenceli bir deneyime dönüştürür. Uzay arka planında süzülen Superman karakteri, kullanıcıları ana sayfaya yönlendiren interaktif bir düğme ile birlikte sunulur.",technologies:["JS","CSS","HTML"],github:"https://codepen.io/ArslanKG/pen/vYodGOd",external:"/NotFound",image:"/images/Superman_mainpage.png"},{title:"Arkegu AI",description:"Yapay zekaya gönderilen prompt'ları iyileştiren React tabanlı kullanıcı arayüzü. Çoklu model stratejileri, gerçek zamanlı chat ve MCP Server entegrasyonu içerir.",technologies:["React","Zustand","Axios","MCP","JavaScript"],github:"https://github.com/ArslanKG/prompt-optimizer-frontend",external:"https://arkeguai.vercel.app/",image:"/images/arkegu-logo.png"},{title:"Her şey bir yansıma",description:"Bir yansıma efekti uygulaması. Mouse hareketlerine tepki veren ve 3D görünüm sağlayan dinamik bir arayüz deneyimi sunar.",technologies:["CSS","TypeScript","WebGL2","GLSL","Remix"],github:"https://codepen.io/atzedent/pen/PovvpvR",external:"/projects/reflectionProject",image:"/images/Reflection_Effect.png"}],en:[{title:"No Found Page",description:"A user-friendly 404 error page. With animated stars and a Superman-themed design, it transforms lost pages into an entertaining experience. The Superman character, with an interactive button to redirect users to the main page, is displayed on a space background.",technologies:["JS","CSS","HTML"],github:"https://codepen.io/ArslanKG/pen/vYodGOd",external:"/NotFound",image:"/images/Superman_mainpage.png"},{title:"Arkegu AI",description:"React-based user interface for optimizing AI prompts. Features multi-model strategies, real-time chat, and MCP Server integration.",technologies:["React","Zustand","Axios","MCP","JavaScript"],github:"https://github.com/ArslanKG/prompt-optimizer-frontend",external:"https://arkeguai.vercel.app/",image:"/images/arkegu-logo.png"},{title:"Everything is a Reflection",description:"An interactive reflection effect application. Provides a dynamic interface experience that responds to mouse movements and provides 3D viewing.",technologies:["CSS","TypeScript","WebGL2","GLSL","Remix"],github:"https://codepen.io/atzedent/pen/PovvpvR",external:"/projects/reflectionProject",image:"/images/Reflection_Effect.png"}]},me=({size:o=20,"aria-label":r="GitHub",...i})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-label":r,role:"img",...i,children:e.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),ue=({size:o=20,"aria-label":r="External Link",...i})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-label":r,role:"img",...i,children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),O=c.forwardRef((o,r)=>{const{language:i}=f(),a=oe(le,i);return e.jsxs("section",{id:"projects-section",ref:r,children:[e.jsx("h2",{id:"projects-heading",className:"section-heading",children:(a==null?void 0:a.projects)||"Projects"}),e.jsx("div",{id:"projects-content",className:"projects-content",children:de[i].map((n,t)=>e.jsxs("article",{id:b("project-item",t),className:"project-item group",children:[e.jsx("header",{className:"project-header",children:e.jsxs("h3",{id:b("project-title",t),className:"project-title",children:[n.title,e.jsxs("span",{className:"project-links",children:[n.github&&e.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${n.title} on GitHub`,children:e.jsx(me,{})}),n.external&&e.jsx("a",{href:n.external,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${n.title} live demo`,children:e.jsx(ue,{})})]})]})}),e.jsxs("div",{className:"project-content",children:[e.jsx("div",{className:"project-image",children:e.jsx("img",{src:n.image,alt:`Screenshot of ${n.title}`,loading:"lazy"})}),e.jsxs("div",{className:"project-info",children:[e.jsx("p",{id:b("project-description",t),className:"project-description",children:n.description}),e.jsx("ul",{id:b("project-tech-list",t),className:"project-tech-list",role:"list","aria-label":`Technologies used in ${n.title}`,children:n.technologies.map((s,d)=>e.jsx("li",{id:b("project-tech",t,s.toLowerCase()),children:s},`tech-${t}-${d}`))})]})]})]},`project-${t}`))})]})});O.displayName="Projects";const pe={tr:{designedAndCoded:"tasarlandı ve kodlandı.",and:"ve",withCreated:"ile oluşturuldu.",allTextSet:" Tüm metinler",typeface:"yazı tipinde ayarlandı."},en:{designedAndCoded:"designed and coded.",and:"and",withCreated:"created with.",allTextSet:"All text is set in the",typeface:"typeface."}};function he(){const{language:o}=f(),r=pe[o],i=({href:a,text:n})=>e.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-slate-300 transition-colors",children:n});return e.jsx("footer",{id:"main-footer",className:"mt-24 text-xs text-slate-400",children:e.jsxs("p",{id:"tech-stack",className:"leading-relaxed flex flex-wrap",children:[e.jsxs("span",{className:"after:content-['.'] after:mr-1",children:[e.jsx(i,{href:"https://code.visualstudio.com/",text:"Visual Studio Code"}),"'da ",r.designedAndCoded]}),e.jsxs("span",{children:[e.jsx(i,{href:"https://remix.run/",text:" Remix"}),", "," ",e.jsx(i,{href:"https://reactjs.org/",text:"React"}),", "," ",e.jsx(i,{href:"https://www.typescriptlang.org/",text:"TypeScript"}),e.jsx("br",{}),r.and," ",e.jsx(i,{href:"https://tailwindcss.com/",text:"Tailwind CSS"})," ",r.withCreated]}),e.jsxs("span",{className:"w-full mt-1",children:[r.allTextSet," ",e.jsx(i,{href:"https://rsms.me/inter/",text:"Inter"})," ",r.typeface]})]})})}const fe=()=>{const{language:o,setLanguage:r,isTransitioning:i}=f();return e.jsxs("div",{className:"lang-btn-container",children:[e.jsx("button",{className:`lang-btn ${o==="tr"?"active":""}`,onClick:()=>r("tr"),disabled:i,children:"TR"}),e.jsx("button",{className:`lang-btn ${o==="en"?"active":""}`,onClick:()=>r("en"),disabled:i,children:"EN"})]})};class ge extends c.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,i){console.error("ErrorBoundary caught an error:",r,i)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:e.jsxs("div",{className:"error-boundary",children:[e.jsxs("div",{className:"error-content",children:[e.jsx("h2",{children:"Bir şeyler ters gitti"}),e.jsx("p",{children:"Sayfa yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin."}),e.jsx("button",{onClick:()=>window.location.reload(),className:"error-reload-btn",children:"Sayfayı Yenile"})]}),e.jsx("style",{children:`
            .error-boundary {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #0a192f;
              color: #8892b0;
              font-family: 'Inter', sans-serif;
              padding: 2rem;
            }
            
            .error-content {
              text-align: center;
              max-width: 500px;
            }
            
            .error-content h2 {
              color: #ccd6f6;
              margin-bottom: 1rem;
              font-size: 1.5rem;
            }
            
            .error-content p {
              margin-bottom: 2rem;
              line-height: 1.6;
            }
            
            .error-reload-btn {
              background: #64ffda;
              color: #0a192f;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            
            .error-reload-btn:hover {
              background: #4fd1c7;
              transform: translateY(-1px);
            }
          `})]}):this.props.children}}function xe(){const o=c.useRef(null),r=c.useRef(null),i=c.useRef(null),a=c.useRef(null),[n,t]=c.useState(!1),[s,d]=c.useState(x.ABOUT),{isTransitioning:p}=f(),u=l=>{l.current&&l.current.scrollIntoView({behavior:"smooth"})};return c.useEffect(()=>{t(!0);const l=()=>{const h=window.scrollY,g=document.documentElement.scrollHeight/8;h<g?d(x.ABOUT):h<g*2.75?d(x.EXPERIENCE):d(x.PROJECTS)};return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[]),c.useEffect(()=>{const l=document.getElementById("gradient-background"),h=v=>{if(l){const g=v.clientX,N=v.clientY;l.style.background=`radial-gradient(800px at ${g}px ${N}px, rgba(29, 78, 216, 0.15), transparent 80%)`}};return document.addEventListener("mousemove",h),()=>{document.removeEventListener("mousemove",h)}},[]),e.jsxs("div",{className:"container mx-auto px-4 max-w-full min-h-screen pt-24",children:[e.jsx(ae,{onAboutClick:()=>u(r),onExperienceClick:()=>u(i),onProjectsClick:()=>u(a),activeSection:s}),e.jsx("main",{ref:o,className:`relative z-10 fade-transition ${p?"fade-out":"fade-in"}`,children:n?e.jsxs(e.Fragment,{children:[e.jsx(_,{ref:r}),e.jsx(D,{ref:i}),e.jsx(O,{ref:a}),e.jsx(he,{})]}):e.jsx("div",{children:"Loading..."})})]})}function ve(){return e.jsx("div",{className:"bg-navy leading-relaxed text-slate antialiased",children:e.jsxs(ge,{children:[e.jsx(fe,{}),e.jsx("div",{id:"gradient-background",className:"pointer-events-none fixed inset-0 z-[-1] transition duration-300"}),e.jsx(xe,{})]})})}function be(){const o=c.useRef(null),r=c.useRef(null),i=c.useRef();c.useEffect(()=>{if(typeof window>"u")return;const n=o.current;if(!n)return;const t=n.getContext("webgl2",{preserveDrawingBuffer:!0})||n.getContext("webgl",{preserveDrawingBuffer:!0});if(!t){console.error("WebGL desteklenmiyor");const m=n.getContext("2d");m&&(m.fillStyle="#1e293b",m.fillRect(0,0,n.width,n.height),m.fillStyle="#94a3b8",m.font="24px Inter",m.textAlign="center",m.fillText("Bu tarayıcı WebGL desteklemiyor",n.width/2,n.height/2));return}const s=window.devicePixelRatio;(()=>{n.width=window.innerWidth*s,n.height=window.innerHeight*s,t.viewport(0,0,n.width,n.height)})();const p=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(p,`#version 300 es
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
    `),t.compileShader(p);const u=t.createShader(t.VERTEX_SHADER);t.shaderSource(u,`#version 300 es
      precision highp float;
      in vec4 position;
      void main() {
        gl_Position = position;
      }
    `),t.compileShader(u);const l=t.createProgram();t.attachShader(l,u),t.attachShader(l,p),t.linkProgram(l),r.current=l;const h=new Float32Array([-1,1,-1,-1,1,1,1,-1]),v=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,v),t.bufferData(t.ARRAY_BUFFER,h,t.STATIC_DRAW);const g=t.getAttribLocation(l,"position");t.enableVertexAttribArray(g),t.vertexAttribPointer(g,2,t.FLOAT,!1,0,0);const N=t.getUniformLocation(l,"time"),M=t.getUniformLocation(l,"resolution"),G=t.getUniformLocation(l,"touch"),H=t.getUniformLocation(l,"move");let j=[0,0],y=[0,0];const R=m=>{j[0]+=m.movementX,j[1]+=m.movementY,y[0]=m.clientX*s,y[1]=n.height-m.clientY*s};n.addEventListener("mousemove",R);let B=performance.now();function E(){const m=(performance.now()-B)*.001;!n||!t||!r.current||(t.useProgram(r.current),t.uniform1f(N,m),t.uniform2f(M,n.width,n.height),t.uniform2f(G,y[0],y[1]),t.uniform2f(H,j[0],j[1]),t.drawArrays(t.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(E))}const A=()=>{!n||!t||(n.width=window.innerWidth*s,n.height=window.innerHeight*s,t.viewport(0,0,n.width,n.height))};return window.addEventListener("resize",A),E(),()=>{i.current&&cancelAnimationFrame(i.current),window.removeEventListener("resize",A),n.removeEventListener("mousemove",R),t&&r.current&&(t.useProgram(null),t.deleteProgram(r.current),t.deleteShader(u),t.deleteShader(p),t.deleteBuffer(v))}},[]);const{language:a}=f();return e.jsxs("div",{className:"reflection-project-container",children:[e.jsx(C,{to:"/",className:"home-button",children:a==="tr"?"Ana Sayfa":"Home"}),e.jsx("canvas",{ref:o,className:"reflection-canvas"})]})}function T(){const{language:o}=f();return c.useEffect(()=>{const r=["#FF6600","#FF0000","#880000","#FF9933","#FF3300","#FF3366"],a=setInterval(()=>{const n=Math.floor(Math.random()*500),t=Math.floor(Math.random()*window.screen.height),s=document.createElement("div");s.classList.add("star"),document.body.appendChild(s),s.style.top=t+"px",s.style.background=r[Math.floor(Math.random()*6)];let d=n;const p=setInterval(()=>{d>=window.screen.width&&(s.remove(),clearInterval(p)),d+=2,s.style.right=d+"px"},15);setTimeout(()=>{s.remove()},15e3)},100);return()=>clearInterval(a)},[]),e.jsxs("div",{className:"not-found-container",children:[e.jsx("div",{className:"stars-container"}),e.jsxs("div",{className:"content",children:[e.jsx("h1",{children:"404!"}),e.jsx("p",{children:o==="tr"?"Aradığınız Sayfa Bulunamadı.":"The Page You're Looking For Was Not Found."}),e.jsx(C,{to:"/",className:"back-button",children:o==="tr"?"Geri Dön!":"Go back!"})]}),e.jsx("div",{className:"superman-container",children:e.jsx("img",{src:"/images/superman.png",alt:"Superman",className:"superman"})}),e.jsx("style",{children:`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }

        .not-found-container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #000C2C;
          font-family: 'Merriweather', serif;
          overflow: hidden;
        }

        .stars-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 1;
        }

        .content {
          text-align: center;
          z-index: 3;
          position: relative;
          transform: translateY(-25%);
          padding-bottom: 4rem;
        }
        .content h1 {
          color: white;
          font-size: 130px;
          margin-bottom: 20px;
          line-height: 1;
        }

        .content p {
          color: white;
          font-size: 22px;
          margin-bottom: 30px;
        }

        .back-button {
          display: inline-block;
          padding: 12px 30px;
          background-color: #880000;
          color: white;
          font-size: 18px;
          letter-spacing: 2px;
          border-radius: 10px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .back-button:hover {
          background-color: #660000;
        }

        .back-button:active {
          transform: translate(-5px, 5px);
        }

        .superman-container {
          position: fixed;
          bottom: 25%;
          left: 0;
          width: 100vw;
          height: 100px;
          overflow: visible;
          pointer-events: none;
          z-index: 4;
        }

        .superman {
          width: 150px;
          position: absolute;
          transform: rotate(45deg);
          animation: superman 12s infinite linear;
        }

        .star {
          position: fixed;
          width: 2px;
          height: 2px;
          right: 0;
          animation: animationStar 3s infinite linear;
          z-index: 1;
        }

        @keyframes superman {
          0% {
            left: -40px;
            bottom: 20px;
          }
          10% { bottom: 30px; }
          20% { bottom: 10px; }
          30% { bottom: 30px; }
          40% { bottom: 10px; }
          50% { bottom: 30px; }
          60% { bottom: 10px; }
          70% { bottom: 30px; }
          80% { bottom: 10px; }
          90% { bottom: 30px; }
          100% {
            left: calc(100% + 40px);
            bottom: 20px;
          }
        }

        @keyframes animationStar {
          0%, 40%, 80% { box-shadow: 0px 0px 3px #fff; }
          20%, 60%, 100% { box-shadow: 0px 0px 15px #fff; }
        }

        @media (max-width: 768px) {
          .content h1 {
            font-size: 100px;
          }
          
          .content p {
            font-size: 18px;
          }
          
          .superman {
            width: 30px;
          }
        }

        @media (max-height: 600px) {
          .content {
            transform: translateY(-15%);
          }
          
          .superman-container {
            bottom: 20%;
          }
        }
      `})]})}function je(){const{projectId:o}=$();switch(c.useEffect(()=>(typeof document<"u"&&(document.documentElement.style.height="100%",document.body.style.height="100%"),()=>{typeof document<"u"&&(document.documentElement.style.height="",document.body.style.height="")}),[]),o){case"reflectionProject":return e.jsx(be,{});default:return e.jsx(T,{})}}k.createRoot(document.getElementById("root")).render(e.jsx(J.StrictMode,{children:e.jsx(re,{children:e.jsx(U,{children:e.jsxs(V,{children:[e.jsx(S,{path:"/",element:e.jsx(ve,{})}),e.jsx(S,{path:"/projects/:projectId",element:e.jsx(je,{})}),e.jsx(S,{path:"/NotFound",element:e.jsx(T,{})}),e.jsx(S,{path:"*",element:e.jsx(T,{})})]})})})}));
