export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  github?: string;
  external?: string;
};

export const projects: Project[] = [
  {
    title: "Proje 1",
    description: "Proje 1 açıklaması",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/user/proje1",
    external: "https://proje1.com",
    link: "https://proje1.com",
    image: "https://source.unsplash.com/random/800x600?tech,1"
  },
  {
    title: "Proje 2",
    description: "Proje 2 açıklaması",
    technologies: ["Vue.js", "JavaScript", "Express"],
    link: "https://proje2.com",
    image: "https://source.unsplash.com/random/800x600?tech,2",
    github: "https://github.com/user/proje2",
    external: "https://proje2.com"
  },
  {
    title: "Proje 3",
    description: "Proje 3 açıklaması",
    technologies: ["Angular", "TypeScript", "Firebase"],
    link: "https://proje3.com",
    image: "https://source.unsplash.com/random/800x600?tech,3",
    github: "https://github.com/user/proje3",
    external: "https://proje3.com"
  },
  // Diğer projeleri buraya ekleyebilirsiniz
];
