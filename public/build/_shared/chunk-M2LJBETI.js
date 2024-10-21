import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IPZYESTC.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/contexts/LanguageContext.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\contexts\\\\LanguageContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\contexts\\LanguageContext.tsx"
  );
  import.meta.hot.lastModified = "1729541051876.9265";
}
var LanguageContext = (0, import_react.createContext)(void 0);
var LanguageProvider = ({
  children
}) => {
  _s();
  const [language, setLanguage] = (0, import_react.useState)("tr");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguageContext.Provider, { value: {
    language,
    setLanguage
  }, children }, void 0, false, {
    fileName: "app/contexts/LanguageContext.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s(LanguageProvider, "sdQwLqKPpQmdoviV+biTZAI5BPA=");
_c = LanguageProvider;
var useLanguage = () => {
  _s2();
  const context = (0, import_react.useContext)(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
_s2(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "LanguageProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  LanguageProvider,
  useLanguage
};
//# sourceMappingURL=/build/_shared/chunk-M2LJBETI.js.map
