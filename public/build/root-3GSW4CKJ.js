import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-33ALECGJ.js";
import {
  LanguageProvider,
  useLanguage
} from "/build/_shared/chunk-M2LJBETI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IPZYESTC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/LanguageToggle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\LanguageToggle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\LanguageToggle.tsx"
  );
  import.meta.hot.lastModified = "1729544122322.1904";
}
var LanguageToggle = () => {
  _s();
  const {
    language,
    setLanguage
  } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lang-btn-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `lang-btn ${language === "tr" ? "active" : ""}`, onClick: () => setLanguage("tr"), children: "TR" }, void 0, false, {
      fileName: "app/components/LanguageToggle.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `lang-btn ${language === "en" ? "active" : ""}`, onClick: () => setLanguage("en"), children: "EN" }, void 0, false, {
      fileName: "app/components/LanguageToggle.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LanguageToggle.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(LanguageToggle, "UZUYajh7f/ecAaqs8+JAYjvISYI=", false, function() {
  return [useLanguage];
});
_c = LanguageToggle;
var LanguageToggle_default = LanguageToggle;
var _c;
$RefreshReg$(_c, "LanguageToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
}, {
  rel: "stylesheet",
  href: "/styles/global.css"
}];
var meta = () => [{
  charSet: "utf-8"
}, {
  title: "Arslan Portfolio"
}, {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}];
function App() {
  _s2();
  const gradientRef = (0, import_react2.useRef)(null);
  const [isClient, setIsClient] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    setIsClient(true);
    const updateGradient = (e) => {
      if (gradientRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        gradientRef.current.style.background = `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };
    document.addEventListener("mousemove", updateGradient);
    return () => {
      document.removeEventListener("mousemove", updateGradient);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "bg-navy leading-relaxed text-slate antialiased", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LanguageProvider, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LanguageToggle_default, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "gradient-background", ref: gradientRef, className: "pointer-events-none fixed inset-0 z-[-1] transition duration-300" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 52
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s2(App, "pUfcdkDGVTbo/G0gsl5Gu5U065o=");
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-3GSW4CKJ.js.map
