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
      title: "Spotify Bağlantılı Uygulama",
      description: "Spotify Web API kullanarak bir web uygulaması oluşturmayı öğreten video kursu. REST API'leri, kullanıcı kimlik doğrulama akışları, Node, Express, React ve Styled Components gibi konuları içerir.",
      technologies: ["React", "Node.js", "Express", "Spotify API"],
      github: "https://github.com/user/spotify-app",
      external: "https://spotify-connected-app.com",
      image: "/images/developer.png"
    },
    {
      title: "Spotify Profili",
      description: "Kişiselleştirilmiş Spotify verilerini görselleştiren web uygulaması. En çok dinlenen sanatçıları, parçaları, son çalınan parçaları ve her parça hakkında detaylı ses bilgilerini görüntüleyin. Mevcut çalma listelerinize dayalı önerilen parçalardan yeni çalma listeleri oluşturun ve kaydedin.",
      technologies: ["React", "Express", "Spotify API", "Heroku"],
      github: "https://github.com/user/spotify-profile",
      external: "https://myspotify-profile.com",
      image: "/images/developer.png"
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
      title: "Spotify Connected App",
      description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      technologies: ["React", "Node.js", "Express", "Spotify API"],
      github: "https://github.com/user/spotify-app",
      external: "https://spotify-connected-app.com",
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
