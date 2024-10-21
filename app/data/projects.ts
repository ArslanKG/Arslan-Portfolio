export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  github?: string;
  external?: string;
};

export const projects = {
  tr: [
    {
      title: "Proje 1",
      description: "Proje 1 açıklaması",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/user/proje1",
      external: "https://proje1.com",
      link: "https://proje1.com",
      image: "https://source.unsplash.com/random/800x600?tech,1"
    },
    // ... diğer Türkçe projeler
  ],
  en: [
    {
      title: "Project 1",
      description: "Description of Project 1",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/user/project1",
      external: "https://project1.com",
      link: "https://project1.com",
      image: "https://source.unsplash.com/random/800x600?tech,1"
    },
    // ... diğer İngilizce projeler
  ]
};
