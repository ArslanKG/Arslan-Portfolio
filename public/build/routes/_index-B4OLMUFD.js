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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Header.tsx"
  );
  import.meta.hot.lastModified = "1729441051962.3733";
}
var Header = ({
  onAboutClick,
  onExperienceClick,
  onProjectsClick,
  activeSection
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "fixed-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Arslan Kemal G\xDCND\xDCZ" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "subtitle", children: "Senior Software Developer Specialist" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "intro-text", children: "I build scalable, efficient, user-centric applications with clean architecture." }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onAboutClick, className: activeSection === "about" ? "active" : "", children: "About" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onExperienceClick, className: activeSection === "experience" ? "active" : "", children: "Experience" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onProjectsClick, className: activeSection === "projects" ? "active" : "", children: "Projects" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\About.tsx"
  );
  import.meta.hot.lastModified = "1729415989427.8677";
}
var About = (0, import_react.forwardRef)(_c2 = (props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "about", ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "section-heading", children: "About Me " }, void 0, false, {
      fileName: "app/components/About.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "about-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "about-text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "With over 3 years of experience primarily in .Net development, I have also worked extensively with modern frontend technologies such as React.js and Vue.js." }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "My diverse technical skill set allows me to build efficient, scalable, and responsive web applications, seamlessly bridging backend and frontend functionalities." }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "I am passionate about learning new tools and frameworks, continuously enhancing my expertise to deliver optimal solutions in full-stack development." }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "about-image" }, void 0, false, {
        fileName: "app/components/About.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/About.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/About.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
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
  import.meta.hot.lastModified = "1729425103280.4937";
}
var experiences = [
  {
    date: "2022 \u2014 \u015Eimdi",
    title: "Senior Software Developer Specialist",
    company: "Turkcell",
    description: "Turkcell'in dijital d\xF6n\xFC\u015F\xFCm projelerinde liderlik rol\xFC \xFCstlenerek, yenilik\xE7i \xE7\xF6z\xFCmler geli\u015Ftiriyorum. Ekip y\xF6netimi ve mentorluk yaparak, \u015Firketin teknolojik vizyonuna katk\u0131da bulunuyorum.",
    technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes", "AWS"]
  },
  {
    date: "2020 \u2014 2022",
    title: "Software Developer",
    company: "Vodafone",
    description: "Telekom sekt\xF6r\xFCnde m\xFC\u015Fteri deneyimini iyile\u015Ftiren yaz\u0131l\u0131m \xE7\xF6z\xFCmleri geli\u015Ftirdim. Agile metodolojileri kullanarak, y\xFCksek performansl\u0131 uygulamalar tasarlad\u0131m ve uygulad\u0131m.",
    technologies: ["Python", "Django", "React", "Docker", "CI/CD"]
  },
  {
    date: "2018 \u2014 2020",
    title: "Junior Software Engineer",
    company: "Teknoloji Startup'\u0131",
    description: "Yenilik\xE7i bir startup'ta \xE7al\u0131\u015Farak, web ve mobil uygulamalar geli\u015Ftirdim. H\u0131zl\u0131 prototipleme ve MVP olu\u015Fturma s\xFCre\xE7lerinde aktif rol ald\u0131m.",
    technologies: ["JavaScript", "React Native", "Node.js", "MongoDB", "Firebase"]
  }
];

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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Experience.tsx"
  );
  import.meta.hot.lastModified = "1729434349982.7424";
}
var Experience = (0, import_react2.forwardRef)(_c3 = (props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "experience", ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "section-heading", children: "Experience" }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "experience-content", children: experiences.map((exp, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "experience-item group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "experience-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "experience-title", children: [
          exp.title,
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "company", children: [
            "@ ",
            exp.company
          ] }, void 0, true, {
            fileName: "app/components/Experience.tsx",
            lineNumber: 30,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "experience-date", children: exp.date }, void 0, false, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "experience-description", children: exp.description }, void 0, false, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "experience-technologies", children: exp.technologies.map((tech, techIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: tech }, techIndex, false, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 36,
        columnNumber: 58
      }, this)) }, void 0, false, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 27,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Experience.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
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
  import.meta.hot.lastModified = "1729427836528.3372";
}
var projects = [
  {
    title: "Proje 1",
    description: "Proje 1 a\xE7\u0131klamas\u0131",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/user/proje1",
    external: "https://proje1.com",
    link: "https://proje1.com",
    image: "https://source.unsplash.com/random/800x600?tech,1"
  },
  {
    title: "Proje 2",
    description: "Proje 2 a\xE7\u0131klamas\u0131",
    technologies: ["Vue.js", "JavaScript", "Express"],
    link: "https://proje2.com",
    image: "https://source.unsplash.com/random/800x600?tech,2",
    github: "https://github.com/user/proje2",
    external: "https://proje2.com"
  },
  {
    title: "Proje 3",
    description: "Proje 3 a\xE7\u0131klamas\u0131",
    technologies: ["Angular", "TypeScript", "Firebase"],
    link: "https://proje3.com",
    image: "https://source.unsplash.com/random/800x600?tech,3",
    github: "https://github.com/user/proje3",
    external: "https://proje3.com"
  }
  // Diğer projeleri buraya ekleyebilirsiniz
];

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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Projects.tsx"
  );
  import.meta.hot.lastModified = "1729412671553.6106";
}
var Projects = (0, import_react3.forwardRef)(_c4 = (props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "projects", ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "section-heading", children: "Projects" }, void 0, false, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "projects-grid", children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "project-item", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "project-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "project-label", children: "Featured Project" }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "project-title", children: project.title }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "project-description", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: project.description }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "project-tech-list", children: project.technologies.map((tech, techIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: tech }, techIndex, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 35,
          columnNumber: 64
        }, this)) }, void 0, false, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "project-links", children: [
          project.github && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: project.github, "aria-label": "GitHub Link", target: "_blank", rel: "noopener noreferrer" }, void 0, false, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 38,
            columnNumber: 36
          }, this),
          project.external && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: project.external, "aria-label": "External Link", className: "external", target: "_blank", rel: "noopener noreferrer" }, void 0, false, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 41,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "project-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: project.image, alt: project.title }, void 0, false, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 27,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Projects.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1729344234880.7783";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\xA9 2024 Ad\u0131n\u0131z Soyad\u0131n\u0131z. T\xFCm haklar\u0131 sakl\u0131d\u0131r." }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1729435759287.322";
}
function Index() {
  _s();
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
_s(Index, "jUAjwsDPlQcCAQ6C1wkYZZVHoYg=");
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-B4OLMUFD.js.map
