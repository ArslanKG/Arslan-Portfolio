export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  image: string;
};

export const generalInfo = {
  tr: [
    {
      projects: "Projeler",
    }
  ],
  en: [
    {
      projects: "Projects",
    }
  ]
};

export const projectsData = {
  tr: [
    {
      title: "404 Süper Kahraman Sayfası",
      description: "Kullanıcı dostu bir 404 hata sayfası. Animasyonlu yıldızlar ve Superman temalı tasarımıyla, kayıp sayfaları eğlenceli bir deneyime dönüştürür. Uzay arka planında süzülen Superman karakteri, kullanıcıları ana sayfaya yönlendiren interaktif bir düğme ile birlikte sunulur.",
      technologies: ["JS", "CSS", "HTML"],
      github: "https://codepen.io/ArslanKG/pen/vYodGOd",
      external: "/NotFound",
      image: "/images/Superman_mainpage.png"
    },
    {
      title: "Arkegu AI",
      description: "Yapay zekaya gönderilen prompt'ları iyileştiren React tabanlı kullanıcı arayüzü. Çoklu model stratejileri, gerçek zamanlı chat ve MCP Server entegrasyonu içerir.",
      technologies: ["React", "Zustand", "Axios", "MCP", "JavaScript"],
      github: "https://github.com/ArslanKG/prompt-optimizer-frontend",
      external: "https://arkeguai.vercel.app/",
      image: "/images/arkegu-logo.png"
    },
    {
      title: "Her şey bir yansıma",
      description: "Bir yansıma efekti uygulaması. Mouse hareketlerine tepki veren ve 3D görünüm sağlayan dinamik bir arayüz deneyimi sunar.",
      technologies: ["CSS", "TypeScript", "WebGL2", "GLSL", "Remix"],
      github: "https://codepen.io/atzedent/pen/PovvpvR",
      external: "/projects/reflectionProject",
      image: "/images/Reflection_Effect.png"
    }
  ],
  en: [
    {
      title: "No Found Page",
      description: "A user-friendly 404 error page. With animated stars and a Superman-themed design, it transforms lost pages into an entertaining experience. The Superman character, with an interactive button to redirect users to the main page, is displayed on a space background.",  
      technologies: ["JS", "CSS", "HTML"],
      github: "https://codepen.io/ArslanKG/pen/vYodGOd",
      external: "/NotFound",
      image: "/images/Superman_mainpage.png"
    },
    {
      title: "Arkegu AI",
      description: "React-based user interface for optimizing AI prompts. Features multi-model strategies, real-time chat, and MCP Server integration.",
      technologies: ["React", "Zustand", "Axios", "MCP", "JavaScript"],
      github: "https://github.com/ArslanKG/prompt-optimizer-frontend",
      external: "https://arkeguai.vercel.app/",
      image: "/images/arkegu-logo.png"
    },
    {
      title: "Everything is a Reflection",
      description: "An interactive reflection effect application. Provides a dynamic interface experience that responds to mouse movements and provides 3D viewing.",
      technologies: ["CSS", "TypeScript", "WebGL2", "GLSL", "Remix"],
      github: "https://codepen.io/atzedent/pen/PovvpvR",
      external: "/projects/reflectionProject",
      image: "/images/Reflection_Effect.png"
    }
  ]
};
