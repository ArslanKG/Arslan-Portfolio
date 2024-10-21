import {
  useLanguage
} from "/build/_shared/chunk-M2LJBETI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IPZYESTC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react4 = __toESM(require_react(), 1);

// app/data/translations.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\translations.ts"
  );
  import.meta.hot.lastModified = "1729541153468.297";
}
var translations = {
  tr: {
    // Header
    about: "Hakk\u0131mda",
    experience: "Deneyim",
    projects: "Projeler",
    devTitle: "K\u0131demli Yaz\u0131l\u0131m Geli\u015Ftirme Uzman\u0131",
    devIntro: "\xD6l\xE7eklenebilir, verimli ve kullan\u0131c\u0131 odakl\u0131 uygulamalar\u0131 temiz mimari ile olu\u015Fturuyorum.",
    // About
    aboutMe: "Hakk\u0131mda",
    aboutPara1: ".Net geli\u015Ftirmede 3 y\u0131ldan fazla deneyimle birlikte, React.js ve Vue.js gibi modern frontend teknolojileriyle de kapsaml\u0131 \xE7al\u0131\u015Fmalar yapt\u0131m.",
    aboutPara2: "\xC7e\u015Fitli teknik becerilerim, verimli, \xF6l\xE7eklenebilir ve duyarl\u0131 web uygulamalar\u0131 olu\u015Fturmam\u0131, backend ve frontend i\u015Flevselliklerini sorunsuz bir \u015Fekilde birle\u015Ftirmemi sa\u011Fl\u0131yor.",
    aboutPara3: "Yeni ara\xE7lar ve \xE7er\xE7eveler \xF6\u011Frenmeye tutkulu, full-stack geli\u015Ftirmede optimal \xE7\xF6z\xFCmler sunmak i\xE7in uzmanl\u0131\u011F\u0131m\u0131 s\xFCrekli geli\u015Ftiriyorum.",
    // Experience
    experienceTitle: "Deneyim",
    featuredProject: "\xD6ne \xC7\u0131kan Proje",
    // Projects
    projectsTitle: "Projeler",
    // Footer
    copyright: "\xA9 2024 Arslan Kemal G\xDCND\xDCZ. T\xFCm haklar\u0131 sakl\u0131d\u0131r.",
    techStack: "Visual Studio Code'da tasarland\u0131 ve kodland\u0131. Remix, React, TypeScript ve Tailwind CSS ile olu\u015Fturuldu. T\xFCm metinler Inter yaz\u0131 tipinde ayarland\u0131."
  },
  en: {
    // Header
    about: "About",
    experience: "Experience",
    projects: "Projects",
    devTitle: "Senior Software Developer Specialist",
    devIntro: "I build scalable, efficient, and user-centric applications with clean architecture.",
    // About
    aboutMe: "About Me",
    aboutPara1: "With over 3 years of experience primarily in .Net development, I have also worked extensively with modern frontend technologies such as React.js and Vue.js.",
    aboutPara2: "My diverse technical skill set allows me to build efficient, scalable, and responsive web applications, seamlessly bridging backend and frontend functionalities.",
    aboutPara3: "I am passionate about learning new tools and frameworks, continuously enhancing my expertise to deliver optimal solutions in full-stack development.",
    // Experience
    experienceTitle: "Experience",
    featuredProject: "Featured Project",
    // Projects
    projectsTitle: "Projects",
    // Footer
    copyright: "\xA9 2024 Arslan Kemal G\xDCND\xDCZ. All rights reserved.",
    techStack: "Designed and coded in Visual Studio Code. Built with Remix, React, TypeScript and Tailwind CSS. All text is set in the Inter typeface."
  }
};

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Header.tsx"
  );
  import.meta.hot.lastModified = "1729541161521.031";
}
var Header = ({
  onAboutClick,
  onExperienceClick,
  onProjectsClick,
  activeSection
}) => {
  _s();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "main-header", className: "fixed-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "logo-container", className: "logo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "dev-name", children: "Arslan Kemal G\xDCND\xDCZ" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "dev-title", className: "subtitle", children: t.devTitle }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "dev-intro", className: "intro-text mt-6 max-w-md text-base text-slate-400 line-clamp-2", children: t.devIntro }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "nav-about", onClick: onAboutClick, className: activeSection === "about" ? "active" : "", children: t.about }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "nav-experience", onClick: onExperienceClick, className: activeSection === "experience" ? "active" : "", children: t.experience }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "nav-projects", onClick: onProjectsClick, className: activeSection === "projects" ? "active" : "", children: t.projects }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(Header, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
});
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/About.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\About.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\About.tsx"
  );
  import.meta.hot.lastModified = "1729541171705.791";
}
var About = _s2((0, import_react.forwardRef)(_c2 = _s2((props, ref) => {
  _s2();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "about-section", ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "about-heading", className: "section-heading", children: t.aboutMe }, void 0, false, {
      fileName: "app/components/About.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "about-content", className: "about-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "about-text", className: "about-text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { id: "about-para-1", children: t.aboutPara1 }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { id: "about-para-2", children: t.aboutPara2 }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { id: "about-para-3", children: t.aboutPara3 }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "about-image", className: "about-image" }, void 0, false, {
        fileName: "app/components/About.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/About.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/About.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
})), "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
});
_c22 = About;
About.displayName = "About";
var About_default = About;
var _c2;
var _c22;
$RefreshReg$(_c2, "About$forwardRef");
$RefreshReg$(_c22, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Experience.tsx
var import_react2 = __toESM(require_react(), 1);

// app/data/experience.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\experience.ts"
  );
  import.meta.hot.lastModified = "1729544249719.608";
}
var experiences = {
  tr: [
    {
      date: "2022 \u2014 \u015Eimdi",
      title: "K\u0131demli Yaz\u0131l\u0131m Geli\u015Ftirme Uzman\u0131",
      company: "Turkcell",
      description: "Turkcell'in dijital d\xF6n\xFC\u015F\xFCm projelerinde liderlik rol\xFC \xFCstlenerek, yenilik\xE7i \xE7\xF6z\xFCmler geli\u015Ftiriyorum. Ekip y\xF6netimi ve mentorluk yaparak, \u015Firketin teknolojik vizyonuna katk\u0131da bulunuyorum.",
      technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes", "AWS"]
    },
    {
      date: "2020 \u2014 2022",
      title: "Yaz\u0131l\u0131m Geli\u015Ftirme Uzman\u0131",
      company: "Garanti BBVA Teknoloji",
      description: "Banka'n\u0131n \xE7e\u015Fitli dijital \xFCr\xFCnlerinin geli\u015Ftirilmesinde g\xF6rev ald\u0131m. M\xFC\u015Fteri deneyimini iyile\u015Ftiren ve i\u015Flem g\xFCvenli\u011Fini art\u0131ran projeler \xFCzerinde \xE7al\u0131\u015Ft\u0131m.",
      technologies: ["Java", "Spring Framework", "Oracle", "Angular", "Docker"]
    },
    {
      date: "2018 \u2014 2020",
      title: "Full Stack Geli\u015Ftirici",
      company: "Trendyol",
      description: "E-ticaret platformunun hem \xF6n y\xFCz hem de arka y\xFCz geli\u015Ftirmelerinde aktif rol ald\u0131m. Performans optimizasyonu ve \xF6l\xE7eklenebilirlik \xFCzerine \xE7al\u0131\u015Fmalar yapt\u0131m.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      date: "2016 \u2014 2018",
      title: "Yaz\u0131l\u0131m M\xFChendisi",
      company: "Vodafone",
      description: "Telekom sekt\xF6r\xFCnde m\xFC\u015Fteri hizmetleri ve faturalama sistemleri \xFCzerinde \xE7al\u0131\u015Ft\u0131m. B\xFCy\xFCk veri i\u015Fleme ve analizi konular\u0131nda deneyim kazand\u0131m.",
      technologies: ["Python", "Django", "PostgreSQL", "Apache Kafka", "Hadoop"]
    }
  ],
  en: [
    {
      date: "2022 \u2014 Present",
      title: "Senior Software Developer Specialist",
      company: "Turkcell",
      description: "Leading digital transformation projects at Turkcell, developing innovative solutions. Contributing to the company's technological vision through team management and mentoring.",
      technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes", "AWS"]
    },
    {
      date: "2020 \u2014 2022",
      title: "Software Development Specialist",
      company: "Garanti BBVA Technology",
      description: "Worked on the development of various digital products for the bank. Focused on projects that improved customer experience and enhanced transaction security.",
      technologies: ["Java", "Spring Framework", "Oracle", "Angular", "Docker"]
    },
    {
      date: "2018 \u2014 2020",
      title: "Full Stack Developer",
      company: "Trendyol",
      description: "Played an active role in both frontend and backend development of the e-commerce platform. Worked on performance optimization and scalability improvements.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      date: "2016 \u2014 2018",
      title: "Software Engineer",
      company: "Vodafone",
      description: "Worked on customer service and billing systems in the telecom sector. Gained experience in big data processing and analysis.",
      technologies: ["Python", "Django", "PostgreSQL", "Apache Kafka", "Hadoop"]
    }
  ]
};

// app/components/Experience.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Experience.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Experience.tsx"
  );
  import.meta.hot.lastModified = "1729541216321.8076";
}
var Experience = _s3((0, import_react2.forwardRef)(_c3 = _s3((props, ref) => {
  _s3();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "experience-section", ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { id: "experience-heading", className: "section-heading", children: t.experienceTitle }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "experience-content", className: "experience-content", children: experiences[language].map((exp, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: `experience-item-${index}`, className: "experience-item group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: `experience-header-${index}`, className: "experience-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { id: `experience-title-${index}`, className: "experience-title", children: [
          exp.title,
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { id: `experience-company-${index}`, className: "company", children: [
            "@ ",
            exp.company
          ] }, void 0, true, {
            fileName: "app/components/Experience.tsx",
            lineNumber: 38,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: `experience-date-${index}`, className: "experience-date", children: exp.date }, void 0, false, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { id: `experience-description-${index}`, className: "experience-description", children: exp.description }, void 0, false, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { id: `experience-technologies-${index}`, className: "experience-technologies", children: exp.technologies.map((tech, techIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { id: `experience-tech-${index}-${techIndex}`, children: tech }, techIndex, false, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 44,
        columnNumber: 58
      }, this)) }, void 0, false, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 35,
      columnNumber: 52
    }, this)) }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Experience.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
})), "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
});
_c23 = Experience;
Experience.displayName = "Experience";
var Experience_default = Experience;
var _c3;
var _c23;
$RefreshReg$(_c3, "Experience$forwardRef");
$RefreshReg$(_c23, "Experience");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Projects.tsx
var import_react3 = __toESM(require_react(), 1);

// app/data/projects.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\projects.ts"
  );
  import.meta.hot.lastModified = "1729541244036.3848";
}
var projects = {
  tr: [
    {
      title: "Proje 1",
      description: "Proje 1 a\xE7\u0131klamas\u0131",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/user/proje1",
      external: "https://proje1.com",
      link: "https://proje1.com",
      image: "https://source.unsplash.com/random/800x600?tech,1"
    }
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
    }
    // ... diğer İngilizce projeler
  ]
};

// app/components/Projects.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Projects.tsx"
  );
  import.meta.hot.lastModified = "1729541228309.0542";
}
var Projects = _s4((0, import_react3.forwardRef)(_c4 = _s4((props, ref) => {
  _s4();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "projects-section", ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { id: "projects-heading", className: "section-heading", children: t.projectsTitle }, void 0, false, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: "projects-grid", className: "projects-grid", children: projects[language].map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: `project-item-${index}`, className: "project-item", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: `project-content-${index}`, className: "project-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: `project-label-${index}`, className: "project-label", children: t.featuredProject }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { id: `project-title-${index}`, className: "project-title", children: project.title }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: `project-description-${index}`, className: "project-description", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: project.description }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { id: `project-tech-list-${index}`, className: "project-tech-list", children: project.technologies.map((tech, techIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { id: `project-tech-${index}-${techIndex}`, children: tech }, techIndex, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 43,
          columnNumber: 64
        }, this)) }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: `project-links-${index}`, className: "project-links", children: [
          project.github && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { id: `project-github-${index}`, href: project.github, "aria-label": "GitHub Link", target: "_blank", rel: "noopener noreferrer" }, void 0, false, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 46,
            columnNumber: 36
          }, this),
          project.external && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { id: `project-external-${index}`, href: project.external, "aria-label": "External Link", className: "external", target: "_blank", rel: "noopener noreferrer" }, void 0, false, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 49,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: `project-image-${index}`, className: "project-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: project.image, alt: project.title }, void 0, false, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 35,
      columnNumber: 53
    }, this)) }, void 0, false, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Projects.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
})), "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
});
_c24 = Projects;
Projects.displayName = "Projects";
var Projects_default = Projects;
var _c4;
var _c24;
$RefreshReg$(_c4, "Projects$forwardRef");
$RefreshReg$(_c24, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1729541232663.3484";
}
function Footer() {
  _s5();
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { id: "main-footer", className: "mt-24 text-sm text-slate-400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { id: "copyright", className: "mb-2", children: t.copyright }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { id: "tech-stack", className: "text-xs", children: t.techStack }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s5(Footer, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
  return [useLanguage];
});
_c5 = Footer;
var _c5;
$RefreshReg$(_c5, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1729435759287.322";
}
function Index() {
  _s6();
  const mainRef = (0, import_react4.useRef)(null);
  const aboutRef = (0, import_react4.useRef)(null);
  const experienceRef = (0, import_react4.useRef)(null);
  const projectsRef = (0, import_react4.useRef)(null);
  const [isClient, setIsClient] = (0, import_react4.useState)(false);
  const [activeSection, setActiveSection] = (0, import_react4.useState)("");
  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  (0, import_react4.useEffect)(() => {
    setIsClient(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const sectionHeight = fullHeight / 8;
      if (scrollPosition < sectionHeight) {
        setActiveSection("about");
      } else if (scrollPosition < sectionHeight * 2.75) {
        setActiveSection("experience");
      } else {
        setActiveSection("projects");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto px-4 max-w-full min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header_default, { onAboutClick: () => scrollTo(aboutRef), onExperienceClick: () => scrollTo(experienceRef), onProjectsClick: () => scrollTo(projectsRef), activeSection }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { ref: mainRef, className: "relative z-10", children: isClient ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(About_default, { ref: aboutRef }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Experience_default, { ref: experienceRef }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Projects_default, { ref: projectsRef }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s6(Index, "jUAjwsDPlQcCAQ6C1wkYZZVHoYg=");
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-PU3YA3MW.js.map
