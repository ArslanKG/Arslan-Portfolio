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
      title: "Halcyon Teması",
      description: "VS Code, Sublime Text, Atom, iTerm ve daha fazlası için minimal koyu mavi tema.",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm"],
      github: "https://github.com/user/halcyon-theme",
      external: "https://halcyon-theme.netlify.app",
      image: "/images/developer.png"
    },
    {
      title: "brittanychiang.com (v4)",
      description: "Gatsby ile oluşturulmuş, 6k+ yıldız ve 3k+ fork almış eski bir portfolyo sitesi.",
      technologies: ["Gatsby", "Styled Components", "Netlify"],
      github: "https://github.com/user/brittanychiang.com",
      external: "https://brittanychiang.com",
      image: "/images/developer.png"
    }
  ],
  en: [
    {
      title: "No Found Page",
      description: "A user-friendly 404 error page. With animated stars and a Superman-themed design, it transforms lost pages into an entertaining experience. The Superman character, with an interactive button to redirect users to the main page, is displayed on a space background.",  
      technologies: ["JS", "CSS", "HTML"],
      github: "https://github.com/user/spotify-app",
      external: "/NotFound",
      image: "/images/developer.png"
    },
    {
      title: "Spotify Profile",
      description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      technologies: ["React", "Express", "Spotify API", "Heroku"],
      github: "https://github.com/user/spotify-profile",
      external: "https://myspotify-profile.com",
      image: "/images/developer.png"
    },
    {
      title: "Halcyon Theme",
      description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm"],
      github: "https://github.com/user/halcyon-theme",
      external: "https://halcyon-theme.netlify.app",
      image: "/images/developer.png"
    },
    {
      title: "brittanychiang.com (v4)",
      description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
      technologies: ["Gatsby", "Styled Components", "Netlify"],
      github: "https://github.com/user/brittanychiang.com",
      external: "https://brittanychiang.com",
      image: "/images/developer.png"
    }
  ]
};
