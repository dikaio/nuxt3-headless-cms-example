
// --------------------
// Request: /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/css.mjs ($id_1f36750b)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/root-component.mjs ($id_0c337b5e)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/app-component.mjs ($id_f86bfd6e)
// --------------------
const $id_bd775ced = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry ($id_bd775ced)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/layouts.mjs ($id_f344b7f9)
// - /layouts/default.vue ($id_7689e89d)
// - /pages/404.vue ($id_591d0cdb)
// - /pages/[slug].vue ($id_02324ad0)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /components/article.vue ($id_4e8c3520)
// - /pages/tag/[slug].vue ($id_6e42da74)
// - /plugins/dateFormat.plugin.ts ($id_372b0b27)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// - /components/article-detail.vue ($id_a8819087)
// - /components/links.vue ($id_5cf34192)
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/vue/dist/vue.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry ($id_bd775ced)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /pages/[slug].vue ($id_02324ad0)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// - /node_modules/kontent-nuxt3-module/dist/plugin.js ($id_9212ab0d)
// - /plugins/dateFormat.plugin.ts ($id_372b0b27)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/legacy.mjs ($id_93532f58)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/legacy.mjs ($id_93532f58)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/legacy.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  return callWithNuxt(nuxtApp, () => plugin(nuxtApp));
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
async function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  setNuxtAppInstance(null);
  await p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/hookable/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/legacy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_93532f58 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/legacy.mjs ($id_93532f58)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/unenv/runtime/mock/proxy.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_3__.useNuxtApp();
  const route = __vite_ssr_import_2__.useRoute();
  const vm = __vite_ssr_import_1__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_4__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  Object.assign(await res, __vite_ssr_import_0__.toRefs(data));
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/@vue/reactivity/dist/reactivity.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_85c34493 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/@vue/reactivity/dist/reactivity.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/@vue/reactivity/dist/reactivity.cjs.js".') })


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /pages/[slug].vue ($id_02324ad0)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/vue-router/dist/vue-router.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, defer: false, default: getDefault, ...options };
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (!instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  const clientOnly = options.server === false || !nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    asyncData.refresh();
  }
  if (false) {
    if (nuxt.isHydrating && fetchOnServer) {
      asyncData.pending.value = false;
    }
    if (nuxt.isHydrating && clientOnly) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else if (!nuxt.isHydrating) {
      if (options.defer) {
        instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
      } else {
        asyncData.refresh();
      }
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/murmurhash-es/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/css.mjs
// Parents: 
// - /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry ($id_bd775ced)
// Dependencies: 
// - /assets/scss/init.scss ($id_75fded23)
// --------------------
const $id_1f36750b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/scss/init.scss");
;
}


// --------------------
// Request: /assets/scss/init.scss
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/css.mjs ($id_1f36750b)
// Dependencies: 

// --------------------
const $id_75fded23 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/** \n * Variables\n */\n/**\n * Breakpoints\n */\n/**\n * Margin\n */\n/**\n * Padding\n */\n/**\n * Line-Height\n */\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0;\n}\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n/** \n * Generic\n */\nhtml {\n  font-size: 100;\n}\nbody {\n  font-family: \"Roboto\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  color: #222;\n  line-height: 1.625;\n  font-size: 16px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Roboto\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 500;\n}\nh1 {\n  font-size: 40px;\n  line-height: 52px;\n  margin-top: 104px;\n  margin-bottom: 26px;\n}\nh2 {\n  font-size: 27px;\n  line-height: 39px;\n  margin-top: 52px;\n  margin-bottom: 13px;\n}\nh3 {\n  font-size: 22px;\n  line-height: 26px;\n  margin-top: 52px;\n  margin-bottom: 13px;\n}\nh4 {\n  font-size: 19.2px;\n  line-height: 26px;\n  margin-top: 39px;\n  margin-bottom: 13px;\n}\nh5 {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 65px;\n  margin-bottom: 13px;\n}\nh6 {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 65px;\n  margin-bottom: 13px;\n}\nimg {\n  border: 0;\n  max-width: 100%;\n  display: block;\n  margin: inherit auto;\n}\nhr {\n  margin-top: 52px;\n  margin-bottom: 52px;\n  border: 0;\n  color: #222;\n  display: block;\n  height: 26px;\n  margin-right: auto;\n  margin-left: auto;\n  background-size: 100% 26px;\n  background-image: linear-gradient(to bottom, transparent 1px, transparent 11px, #222 11px, #222 15px, transparent 15px, transparent 26px);\n  width: 100px;\n}\na {\n  color: #0090D4;\n  text-decoration: none;\n}\na:hover, a:focus, a:active {\n  color: #F05A22;\n}\nb,\nstrong {\n  font-weight: 500;\n}\nul {\n  list-style: square;\n  margin-bottom: 26px;\n}\nul li {\n  padding: 0 5px;\n  margin-bottom: 10px;\n}\np {\n  line-height: 26px;\n  margin-bottom: 26px;\n}\nblockquote {\n  padding: 0;\n  font-style: italic;\n  text-align: center;\n}\nfigure {\n  display: block;\n  height: auto;\n}\nfigcaption {\n  line-height: 19.5px;\n  margin-top: 6.5px;\n  color: #222;\n  font-size: 14px;\n  font-style: italic;\n  margin-bottom: 0;\n  text-align: center;\n}\n.content__inner {\n  padding: 25px 20px;\n}\n@media screen and (min-width: 685px) {\n  figure.float-left,\nfigure.float-right {\n    max-width: 310px;\n    padding: 0px 26px 0px;\n  }\n\n  .float-right {\n    float: right;\n  }\n\n  .float-left {\n    float: left;\n  }\n\n  .content {\n    width: 58%;\n  }\n  .content__inner {\n    padding: 30px 20px;\n  }\n}\n@media screen and (min-width: 960px) {\n  .content {\n    width: 66%;\n  }\n  .content__inner {\n    padding: 40px 35px;\n  }\n}\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=language-],\npre[class*=language-] {\n  color: black;\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\npre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection,\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\npre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection, code[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\npre[class*=language-]::selection, pre[class*=language-] ::selection,\ncode[class*=language-]::selection, code[class*=language-] ::selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n@media print {\n  code[class*=language-],\npre[class*=language-] {\n    text-shadow: none;\n  }\n}\n/* Code blocks */\npre[class*=language-] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: #f5f2f0;\n}\n/* Inline code */\n:not(pre) > code[class*=language-] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray;\n}\n.token.punctuation {\n  color: #999;\n}\n.namespace {\n  opacity: 0.7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a;\n}\n.token.function {\n  color: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n/** \n * Tags\n */\n.tags__list-item-link {\n  color: #222;\n}\n.tags__list-item-link:hover, .tags__list-item-link:focus {\n  color: #0090D4;\n  border-bottom: 1px solid #0090D4;\n}\n/** \n * Categories\n */\n.categories__list-item-link {\n  color: #222;\n}\n.categories__list-item-link:hover, .categories__list-item-link:focus {\n  color: #0090D4;\n  border-bottom: 1px solid #0090D4;\n}\n.page {\n  margin-bottom: 52px;\n}\n.page__title {\n  font-size: 40px;\n  font-weight: 500;\n  line-height: 52px;\n  margin-top: 0px;\n  margin-bottom: 37.7px;\n}\n.page__body {\n  font-size: 16px;\n  line-height: 26px;\n  margin: 0px 0px 26px;\n}";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry ($id_bd775ced)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@pinia/nuxt/templates/plugin.js ($id_5e685441)
// - /node_modules/kontent-nuxt3-module/dist/plugin.js ($id_9212ab0d)
// - /plugins/dateFormat.plugin.ts ($id_372b0b27)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// --------------------
const $id_078a3c79 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@pinia/nuxt/templates/plugin.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/kontent-nuxt3-module/dist/plugin.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/plugins/dateFormat.plugin.ts");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default,
  __vite_ssr_import_7__.default,
  __vite_ssr_import_8__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxt) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxt.vueApp.use(head);
  nuxt._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxt.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/index.ts
var getTagKey = (props) => {
  if (props.key !== void 0) {
    return {name: "key", value: props.key};
  }
  if (props.name !== void 0) {
    return {name: "name", value: props.name};
  }
  if (props.property !== void 0) {
    return {
      name: "property",
      value: props.property
    };
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({tag: key, props: {children: obj[key]}});
    } else if (key === "base") {
      tags.push({tag: key, props: __spreadValues({key: "default"}, obj[key])});
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({tag: key, props: item});
        });
      } else if (value) {
        tags.push({tag: key, props: value});
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var insertTags = (tags, document = window.document) => {
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (j) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  const newElements = [];
  let title;
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of tags) {
    if (tag.tag === "title") {
      title = tag.props.children;
      continue;
    }
    if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
      continue;
    }
    if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
      continue;
    }
    if (tag.tag === "meta") {
      const key = getTagKey(tag.props);
      if (key) {
        const elementList = [
          ...head.querySelectorAll(`meta[${key.name}="${key.value}"]`)
        ];
        for (const el of elementList) {
          if (!oldElements.includes(el)) {
            oldElements.push(el);
          }
        }
      }
    }
    newElements.push(createElement(tag.tag, tag.props, document));
  }
  oldElements.forEach((el) => {
    if (el.nextSibling && el.nextSibling.nodeType === Node.TEXT_NODE) {
      el.nextSibling.remove();
    }
    el.remove();
  });
  if (title !== void 0) {
    document.title = title;
  }
  setAttrs(document.documentElement, htmlAttrs);
  setAttrs(document.body, bodyAttrs);
  newElements.forEach((el) => {
    head.insertBefore(el, headCountEl);
  });
  headCountEl.setAttribute("content", "" + newElements.length);
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document) {
      insertTags(head.headTags, document);
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, {slots}) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/meta.config.mjs ($id_7a157705)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      __vite_ssr_import_2__.useMeta(options.head);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([_key, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory(removeUndefinedProps(props), ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((headAttrs) => ({ headAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/@vue/shared/dist/shared.cjs.js".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_7a157705 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"rel":"stylesheet","href":"/fonts/fontello-771c82e0/css/fontello.css"}],"script":[{"type":"text/javascript","src":"https://cdn.jsdelivr.net/npm/@kentico/kontent-smart-link@2.0.0/dist/kontent-smart-link.umd.min.js"}],"style":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/child.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory() : __vite_ssr_import_1__.createMemoryHistory();
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  nuxtApp.provide("router", router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/child.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0a2c1f73 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const _sfc_main = {
  name: 'NuxtChild'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_0__.resolveComponent("RouterView")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_0__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_1__.ssrRenderVNode(_push, __vite_ssr_import_0__.createVNode(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent, _scopeId)
      } else {
        return [
          (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/child.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/pages/runtime/child.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /pages/404.vue ($id_591d0cdb)
// - /pages/[slug].vue ($id_02324ad0)
// - /components/article.vue ($id_4e8c3520)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// - /components/article-detail.vue ($id_a8819087)
// - /components/links.vue ($id_5cf34192)
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/child.vue ($id_0a2c1f73)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /pages/404.vue ($id_591d0cdb)
// - /pages/[slug].vue ($id_02324ad0)
// - /components/article.vue ($id_4e8c3520)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// - /components/article-detail.vue ($id_a8819087)
// - /components/links.vue ($id_5cf34192)
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val
  }
  return sfc
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10628d40 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  name: 'NuxtPage',
  components: { NuxtLayout: __vite_ssr_import_1__.default },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup () {
    // Disable HMR reactivity in production
    const updatedComponentLayout = true ? __vite_ssr_import_0__.ref(null) : null

    const nuxtApp = __vite_ssr_import_2__.useNuxtApp()

    function onSuspensePending (Component) {
      if (true) {
        updatedComponentLayout.value = Component.type.layout || null
      }
      return nuxtApp.callHook('page:start', Component)
    }

    function onSuspenseResolved (Component) {
      return nuxtApp.callHook('page:finish', Component)
    }

    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_3__.resolveComponent("RouterView")
  const _component_NuxtLayout = __vite_ssr_import_3__.resolveComponent("NuxtLayout")

  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_3__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        if (Component) {
          _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<!-- <keep-alive> -->`)
                __vite_ssr_import_4__.ssrRenderSuspense(_push, {
                  default: () => {
                    __vite_ssr_import_4__.ssrRenderVNode(_push, __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent, _scopeId)
                  },
                  _: 2 /* DYNAMIC */
                })
                _push(`<!-- <keep-alive -->`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- TODO: Handle 404 placeholder -->`)
      } else {
        return [
          Component
            ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                key: 0,
                name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
              }, {
                default: __vite_ssr_import_3__.withCtx(() => [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
            : __vite_ssr_import_3__.createCommentVNode("v-if", true),
          __vite_ssr_import_3__.createCommentVNode(" TODO: Handle 404 placeholder ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/pages/runtime/page.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/layouts.mjs ($id_f344b7f9)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/layouts.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!__vite_ssr_import_1__.default[layout]) {
        if (true && layout && layout !== "default") {
          console.warn(`Invalid layout \`${layout}\` selected.`);
        }
        return context.slots.default();
      }
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default[layout], props, context.slots);
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_f344b7f9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  "default": __vite_ssr_import_0__.defineAsyncComponent({ suspensible: false, loader: () => __vite_ssr_dynamic_import__('/layouts/default.vue') })
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/layouts.mjs ($id_f344b7f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /layouts/default.vue?vue&type=style&index=0&lang.scss ($id_05ef260d)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const projectId = ({}).VITE_KONTENT_PROJECT_ID ?? "";
    const __returned__ = { projectId };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: "layout",
    "data-kontent-project-id": $setup.projectId,
    "data-kontent-language-codename": "en-US"
  }, _attrs))}>`);
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/layouts/default.vue?vue&type=style&index=0&lang.scss");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/layouts/default.vue"]]);
;
}


// --------------------
// Request: /layouts/default.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 

// --------------------
const $id_05ef260d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/** \n * Variables\n */\n/**\n * Breakpoints\n */\n/**\n * Margin\n */\n/**\n * Padding\n */\n/**\n * Line-Height\n */\n.layout {\n  max-width: 1070px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n}\n.layout > div {\n  display: flex;\n  flex-direction: row;\n}\n.layout > div > div {\n  margin: 0 auto;\n}\n@media screen and (min-width: 685px) {\n.layout {\n    flex-direction: row;\n}\n}";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/404.vue ($id_591d0cdb)
// - /pages/[slug].vue ($id_02324ad0)
// - /pages/article/[slug].vue ($id_aa2c960d)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/index.vue ($id_cca58e97)
// - /pages/tag/[slug].vue ($id_6e42da74)
// --------------------
const $id_62ccfeba = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
  {
    "name": "404",
    "path": "/:catchAll(.*)*",
    "file": "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/404.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/404.vue')
  },
  {
    "name": "slug",
    "path": "/:slug",
    "file": "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/[slug].vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/[slug].vue')
  },
  {
    "name": "article-slug",
    "path": "/article/:slug",
    "file": "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/article/[slug].vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/article/[slug].vue')
  },
  {
    "name": "category-slug",
    "path": "/category/:slug",
    "file": "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/category/[slug].vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/category/[slug].vue')
  },
  {
    "name": "index",
    "path": "/",
    "file": "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/index.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    "name": "tag-slug",
    "path": "/tag/:slug",
    "file": "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/tag/[slug].vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/tag/[slug].vue')
  }
];
}


// --------------------
// Request: /pages/404.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/sidebar.vue ($id_599479fd)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_591d0cdb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/sidebar.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = __vite_ssr_import_2__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")
  const _component_Sidebar = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Page not found | Kontent + Nuxt 3`)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode("Page not found | Kontent + Nuxt 3")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_2__.withCtx(() => [
              __vite_ssr_import_2__.createTextVNode("Page not found | Kontent + Nuxt 3")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Sidebar, { isHomePage: false }, null, _parent))
  _push(`<div class="content"><div class="content__inner"><h1>Page not found</h1></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/404.vue"]]);
}


// --------------------
// Request: /components/sidebar.vue
// Parents: 
// - /pages/404.vue ($id_591d0cdb)
// - /pages/[slug].vue ($id_02324ad0)
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// Dependencies: 

// --------------------
const $id_599479fd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /pages/[slug].vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/sidebar.vue ($id_599479fd)
// - /store/menu.ts ($id_db384329)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_02324ad0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/sidebar.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/store/menu.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const _sfc_main = {
  async setup() {
    const kontent = __vite_ssr_import_4__.useNuxtApp().$kontent;
    const menuStore = __vite_ssr_import_2__.useMenu();
    const route = __vite_ssr_import_3__.useRoute();
    const menuItem = await menuStore.getBySlug(route.params.slug.toString(), kontent);
    return {
      menuItem
    };
  }
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_5__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_5__.resolveComponent("Title");
  const _component_Sidebar = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_6__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_5__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${__vite_ssr_import_6__.ssrInterpolate($setup.menuItem.elements.label.value)} | Kontent + Nuxt 3`);
            } else {
              return [
                __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString($setup.menuItem.elements.label.value) + " | Kontent + Nuxt 3", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString($setup.menuItem.elements.label.value) + " | Kontent + Nuxt 3", 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Sidebar, { isHomePage: false }, null, _parent));
  _push(`<div class="content"><div class="content__inner"><div class="page"${__vite_ssr_import_6__.ssrRenderAttr("data-kontent-item-id", $setup.menuItem.elements.content.linkedItems[0].system.id)}><h1 class="page__title" data-kontent-element-codename="title">${__vite_ssr_import_6__.ssrInterpolate($setup.menuItem.elements.content.linkedItems[0].elements.title.value)}</h1><div class="page__body" data-kontent-element-codename="description">${$setup.menuItem.elements.content.linkedItems[0].elements.description.value}</div></div></div></div></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/[slug].vue"]]);
;
}


// --------------------
// Request: /store/menu.ts
// Parents: 
// - /pages/[slug].vue ($id_02324ad0)
// Dependencies: 

// --------------------
const $id_db384329 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /pages/article/[slug].vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// Dependencies: 

// --------------------
const $id_aa2c960d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /pages/category/[slug].vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/sidebar.vue ($id_599479fd)
// - /components/article.vue ($id_4e8c3520)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /store/category.ts ($id_f2565452)
// - /store/article.ts ($id_97e76fea)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5482dfc7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/sidebar.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/article.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/category.ts");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/article.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const _sfc_main = {
  async setup() {
    const kontent = __vite_ssr_import_6__.useNuxtApp().$kontent;
    const route = __vite_ssr_import_3__.useRoute();
    const categoryStore = __vite_ssr_import_4__.useCategory();
    const articleStore = __vite_ssr_import_5__.useArticle();
    const category = await categoryStore.getBySlug(route.params.slug.toString(), kontent);
    const articles = await articleStore.getByCategory(category.system.codename, kontent);
    return {
      category,
      articles
    };
  }
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_7__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_7__.resolveComponent("Title");
  const _component_Sidebar = __vite_ssr_import_1__.default;
  const _component_Article = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_8__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_7__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${__vite_ssr_import_8__.ssrInterpolate($setup.category.elements.title.value)} | Kontent + Nuxt 3`);
            } else {
              return [
                __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString($setup.category.elements.title.value) + " | Kontent + Nuxt 3", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_7__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString($setup.category.elements.title.value) + " | Kontent + Nuxt 3", 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Sidebar, { isHomePage: false }, null, _parent));
  _push(`<div class="content"><div class="content__inner"><div class="page"><h1 class="page__title">${__vite_ssr_import_8__.ssrInterpolate($setup.category.elements.title.value)}</h1><div class="page__body"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.articles, (article) => {
    _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Article, {
      key: article.system.id,
      data: article
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/category/[slug].vue"]]);
;
}


// --------------------
// Request: /components/article.vue
// Parents: 
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/article.vue?vue&type=style&index=0&lang.scss ($id_9921893b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4e8c3520 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  props: ["data"]
};
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_1__.resolveComponent("nuxt-link");
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: "article",
    "data-kontent-item-id": $props.data.system.id
  }, _attrs))}><div class="article__meta"><time class="article__meta-time"${__vite_ssr_import_2__.ssrRenderAttr("dateTime", _ctx.$dateFormat($props.data.elements.date.value, "MMMM D, YYYY"))} data-kontent-element-codename="date">${__vite_ssr_import_2__.ssrInterpolate(_ctx.$dateFormat($props.data.elements.date.value, "MMMM YYYY"))}</time><span class="article__meta-divider"></span><span class="article__meta-category" data-kontent-element-codename="category">`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: `/category/${$props.data.elements.category.linkedItems[0].elements.slug.value}/`,
    class: "article__meta-category-link"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${__vite_ssr_import_2__.ssrInterpolate($props.data.elements.category.linkedItems[0].elements.title.value)}`);
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString($props.data.elements.category.linkedItems[0].elements.title.value), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><h2 class="article__title" data-kontent-element-codename="title">`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    class: "article__title-link",
    to: `/article/${$props.data.elements.slug.value}`
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${__vite_ssr_import_2__.ssrInterpolate($props.data.elements.title.value)}`);
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString($props.data.elements.title.value), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><p class="article__description" data-kontent-element-codename="content">${$props.data.elements.content.value.substr(3, Math.min(200, $props.data.elements.content.value.length - 6))}</p>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    class: "article__readmore",
    to: `/article/${$props.data.elements.slug.value}`
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read `);
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" Read ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/article.vue?vue&type=style&index=0&lang.scss");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/components/article.vue"]]);
;
}


// --------------------
// Request: /components/article.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/article.vue ($id_4e8c3520)
// Dependencies: 

// --------------------
const $id_9921893b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/** \n * Variables\n */\n/**\n * Breakpoints\n */\n/**\n * Margin\n */\n/**\n * Padding\n */\n/**\n * Line-Height\n */\n.article {\n  margin-bottom: 32.5px;\n}\n.article:last-child {\n  margin-bottom: 13px;\n}\n.article__title {\n  font-size: 27px;\n  line-height: 39px;\n  margin-top: 0px;\n  margin-bottom: 13px;\n}\n.article__title-link {\n  color: #222;\n}\n.article__title-link:hover, .article__title-link:focus {\n  color: #222;\n  border-bottom: 1px solid #222;\n}\n.article__description {\n  font-size: 16px;\n  line-height: 26px;\n  margin-bottom: 19.5px;\n}\n.article__meta-time {\n  font-size: 14px;\n  color: #222;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.article__meta-divider {\n  margin: 0 5px;\n}\n.article__meta-category-link {\n  font-size: 14px;\n  color: #F05A22;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.article__meta-category-link:hover, .article__meta-category-link:focus {\n  color: #0090D4;\n}\n.article__readmore {\n  font-size: 16px;\n  color: #0090D4;\n}\n.article__readmore:hover, .article__readmore:focus {\n  color: #0090D4;\n  border-bottom: 1px solid #0090D4;\n}";
}


// --------------------
// Request: /store/category.ts
// Parents: 
// - /pages/category/[slug].vue ($id_5482dfc7)
// Dependencies: 

// --------------------
const $id_f2565452 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /store/article.ts
// Parents: 
// - /pages/category/[slug].vue ($id_5482dfc7)
// - /pages/tag/[slug].vue ($id_6e42da74)
// Dependencies: 

// --------------------
const $id_97e76fea = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// Dependencies: 

// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /pages/tag/[slug].vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs ($id_62ccfeba)
// Dependencies: 
// - /components/sidebar.vue ($id_599479fd)
// - /components/article.vue ($id_4e8c3520)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /store/tag.ts ($id_4b976f79)
// - /store/article.ts ($id_97e76fea)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6e42da74 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/sidebar.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/article.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/store/tag.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/article.ts");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const _sfc_main = {
  async setup() {
    const kontent = __vite_ssr_import_5__.useNuxtApp().$kontent;
    const route = __vite_ssr_import_2__.useRoute();
    const tagStore = __vite_ssr_import_3__.useTag();
    const articleStore = __vite_ssr_import_4__.useArticle();
    const tag = await tagStore.getBySlug(route.params.slug.toString(), kontent);
    const articles = await articleStore.getByTag(tag.system.codename, kontent);
    return {
      tag,
      articles
    };
  }
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __vite_ssr_import_0__.default;
  const _component_Article = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Sidebar, { isHomePage: false }, null, _parent));
  _push(`<div class="content"><div class="content__inner"><div class="page"><h1 class="page__title"> All Articles tagged as &quot;${__vite_ssr_import_7__.ssrInterpolate($setup.tag.elements.title.value)}&quot; </h1><div className="page__body"><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.articles, (article) => {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Article, {
      key: article.system.id,
      data: article
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/tag/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/pages/tag/[slug].vue"]]);
;
}


// --------------------
// Request: /store/tag.ts
// Parents: 
// - /pages/tag/[slug].vue ($id_6e42da74)
// Dependencies: 

// --------------------
const $id_4b976f79 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /node_modules/@pinia/nuxt/templates/plugin.js
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 

// --------------------
const $id_5e685441 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /node_modules/kontent-nuxt3-module/dist/plugin.js
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/@kentico/kontent-delivery/dist/cjs/index.js ($id_f6ef2b96)
// --------------------
const $id_9212ab0d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@kentico/kontent-delivery/dist/cjs/index.js");


//@ts-ignore
var plugin = __vite_ssr_import_0__.defineNuxtPlugin(function (nuxtApp) {
  if (!nuxtApp.$config || !nuxtApp.$config.kontent) {
    console.error("Kontent Nuxt3 module: configuration object is missing.");
    return;
  }

  var config = JSON.parse(JSON.stringify(nuxtApp.$config.kontent));

  if (!config) {
    console.error("Kontent Nuxt3 module: configuration object does not fit the config format. ");
    return;
  }

  if (!config.defaultQueryConfig) {
    config.defaultQueryConfig = {
      customHeaders: []
    };
  }

  if (!config.defaultQueryConfig.customHeaders) {
    config.defaultQueryConfig.customHeaders = [];
  }

  config.defaultQueryConfig.customHeaders.push({
    header: 'X-KC-SOURCE',
    value: 'kontent-nuxt3-module'
  });
  var kontent = new __vite_ssr_import_1__.DeliveryClient(config);
  nuxtApp.provide('kontent', kontent);
}); //@ts-ignore


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return plugin }});
;
}


// --------------------
// Request: /node_modules/@kentico/kontent-delivery/dist/cjs/index.js
// Parents: 
// - /node_modules/kontent-nuxt3-module/dist/plugin.js ($id_9212ab0d)
// Dependencies: 

// --------------------
const $id_f6ef2b96 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/@kentico/kontent-delivery/dist/cjs/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/@kentico/kontent-delivery/dist/cjs/index.js".') })


// --------------------
// Request: /plugins/dateFormat.plugin.ts
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_372b0b27 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin((nuxtApp) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dateFormat = (date, format) => {
    const dateObj = new Date(date);
    format = format.replace("MMMM", months[dateObj.getMonth()]);
    format = format.replace("MMM", months[dateObj.getMonth()].substr(0, 3));
    format = format.replace("YYYY", dateObj.getFullYear().toString());
    format = format.replace("D", dateObj.getDate().toString());
    return format;
  };
  nuxtApp.provide("dateFormat", dateFormat);
});
;
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/ohmyfetch/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs ($id_078a3c79)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/article-detail.vue ($id_a8819087)
// - /components/article.vue ($id_4e8c3520)
// - /components/links.vue ($id_5cf34192)
// - /components/menu.vue ($id_873ce920)
// - /components/sidebar.vue ($id_599479fd)
// --------------------
const $id_e8bbac22 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'ArticleDetail': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/article-detail.vue').then(c => c.default || c)),
  'Article': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/article.vue').then(c => c.default || c)),
  'Links': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/links.vue').then(c => c.default || c)),
  'Menu': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/menu.vue').then(c => c.default || c)),
  'Sidebar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/sidebar.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/article-detail.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/article-detail.vue?vue&type=style&index=0&lang.scss ($id_f15cb6df)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a8819087 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  setup() {
  },
  props: ["data", "author", "metadata"]
};
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_1__.resolveComponent("nuxt-link");
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><div>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    class: "article-single__home-button",
    to: "/"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` All Articles `);
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" All Articles ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="article-single"${__vite_ssr_import_2__.ssrRenderAttr("data-kontent-item-id", $props.data.system.id)}><div class="article-single__inner"><h1 class="article-single__title" data-kontent-element-codename="title">${__vite_ssr_import_2__.ssrInterpolate($props.data.elements.title.value)}</h1><div data-kontent-element-codename="content" class="article-single__body">${$props.data.elements.content.value}</div></div><div class="article-single__date" data-kontent-element-codename="date"><em> Published ${__vite_ssr_import_2__.ssrInterpolate(_ctx.$dateFormat($props.data.elements.date.value, "D MMM YYYY"))}</em></div><div class="article-single__footer"><div class="article-single__tags"><ul class="article-single__tags-list" data-kontent-element-codename="tags"><!--[-->`);
  __vite_ssr_import_2__.ssrRenderList($props.data.elements.tags.linkedItems, (tag) => {
    _push(`<li class="article-single__tags-list-item">`);
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
      to: `/tag/${tag.elements.slug.value}`,
      class: "article-single__tags-list-item-link"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_2__.ssrInterpolate(tag.elements.title.value)}`);
        } else {
          return [
            __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString(tag.elements.title.value), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><hr><p class="article-single__footer-text">${__vite_ssr_import_2__.ssrInterpolate($props.metadata.elements.subtitle.value)} <a${__vite_ssr_import_2__.ssrRenderAttr("href", `https://twitter.com/${$props.author.elements.twitter.value}`)} target="_blank" rel="noopener noreferrer"><br><strong>${__vite_ssr_import_2__.ssrInterpolate($props.author.elements.name.value)}</strong> on Twitter </a></p></div></div></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/article-detail.vue?vue&type=style&index=0&lang.scss");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/article-detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/components/article-detail.vue"]]);
;
}


// --------------------
// Request: /components/article-detail.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/article-detail.vue ($id_a8819087)
// Dependencies: 

// --------------------
const $id_f15cb6df = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/** \n * Variables\n */\n/**\n * Breakpoints\n */\n/**\n * Margin\n */\n/**\n * Padding\n */\n/**\n * Line-Height\n */\n.article-single__inner {\n  max-width: 945px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n.article-single__title {\n  font-size: 32px;\n  max-width: 640px;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 600;\n  text-align: center;\n  line-height: 42.9px;\n  margin-top: 26px;\n  margin-bottom: 0px;\n}\n.article-single__body figure {\n  margin-bottom: 26px;\n}\n.article-single__body figure blockquote {\n  font-style: italic;\n  text-align: center;\n  margin-top: 0;\n  padding: 26px 0px;\n}\n.article-single__body figure blockquote p {\n  max-width: 640px;\n  font-size: 26.9072px;\n  margin-top: 0;\n  margin-bottom: 26px;\n  line-height: 39px;\n}\n.article-single__body a {\n  text-decoration: underline;\n}\n.article-single__body .gatsby-highlight {\n  max-width: 640px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 26px;\n}\n.article-single__body :not(div) {\n  max-width: 640px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.article-single__body img {\n  max-width: 100%;\n}\n.article-single__footer {\n  max-width: 640px;\n  margin-left: 15px;\n  margin-right: 15px;\n  line-height: 26px;\n  margin-top: 26px;\n  margin-bottom: 52px;\n}\n.article-single__footer-text a {\n  text-decoration: underline;\n}\n.article-single__date {\n  max-width: 640px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.article-single__tags {\n  margin-bottom: 13px;\n}\n.article-single__tags-list {\n  list-style: none;\n  margin: 0 -5px;\n  padding: 0;\n}\n.article-single__tags-list-item {\n  display: inline-block;\n  margin: 10px 5px;\n}\n.article-single__tags-list-item-link {\n  background: #ebebeb;\n  text-decoration: none;\n  border: 0;\n  border-radius: 3px;\n  color: #555555;\n  line-height: 1.625;\n  padding: 8px 16px;\n}\n.article-single__tags-list-item-link:hover, .article-single__tags-list-item-link:focus {\n  color: #222;\n  background: #dfdfdf;\n  border: 0;\n}\n.article-single__home-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 90px;\n  font-size: 16px;\n  padding: 0 16px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  color: #555555;\n  background: #ebebeb;\n  font-weight: 400;\n  border-radius: 3px;\n  margin-top: 26px;\n}\n.article-single__home-button:hover, .article-single__home-button:focus {\n  color: #222;\n  background: #dfdfdf;\n  border: 0;\n}\n@media screen and (min-width: 685px) {\n.article-single__footer {\n    margin-left: auto;\n    margin-right: auto;\n}\n.article-single__body .gatsby-highlight {\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n@media screen and (min-width: 960px) {\n.article-single__inner {\n    padding: 0;\n}\n.article-single__title {\n    font-size: 48px;\n    line-height: 58.5px;\n    margin-top: 58.5px;\n    margin-bottom: 39px;\n}\n.article-single__body {\n    font-size: 18px;\n    line-height: 29.25px;\n    margin-bottom: 29.25px;\n}\n.article-single__body p {\n    font-size: 18px;\n    line-height: 29.25px;\n    margin-bottom: 29.25px;\n}\n.article-single__home-button {\n    position: fixed;\n    max-width: auto;\n    margin: 0;\n    top: 30px;\n    left: 30px;\n}\n}";
}


// --------------------
// Request: /components/links.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/links.vue?vue&type=style&index=0&lang.scss ($id_38fd0e95)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5cf34192 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: ["data"]
};
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "links" }, _attrs))}><ul class="links__list">`);
  if ($props.data.elements.twitter.value) {
    _push(`<li class="links__list-item" data-kontent-element-codename="twitter"><a${__vite_ssr_import_1__.ssrRenderAttr("href", `https://www.twitter.com/${$props.data.elements.twitter.value}`)} target="_blank" rel="noopener noreferrer"><i class="icon-twitter"></i></a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.data.elements.github.value) {
    _push(`<li class="links__list-item" data-kontent-element-codename="github"><a${__vite_ssr_import_1__.ssrRenderAttr("href", `https://www.github.com/${$props.data.elements.github.value}`)} target="_blank" rel="noopener noreferrer"><i class="icon-github"></i></a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.data.elements.vk.value) {
    _push(`<li class="links__list-item" data-kontent-element-codename="vk"><a${__vite_ssr_import_1__.ssrRenderAttr("href", `https://www.vk.com/${$props.data.elements.vk.value}`)} target="_blank" rel="noopener noreferrer"><i class="icon-vkontakte"></i></a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul><ul class="links__list">`);
  if ($props.data.elements.email.value) {
    _push(`<li class="links__list-item" data-kontent-element-codename="email"><a${__vite_ssr_import_1__.ssrRenderAttr("href", `mailto:${$props.data.elements.email.value}`)}><i class="icon-mail"></i></a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.data.elements.telegram.value) {
    _push(`<li class="links__list-item" data-kontent-element-codename="telegram"><a${__vite_ssr_import_1__.ssrRenderAttr("href", `telegram:${$props.data.elements.telegram.value}`)}><i class="icon-paper-plane"></i></a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div>`);
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/links.vue?vue&type=style&index=0&lang.scss");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/links.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/components/links.vue"]]);
;
}


// --------------------
// Request: /components/links.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/links.vue ($id_5cf34192)
// Dependencies: 

// --------------------
const $id_38fd0e95 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/** \n * Variables\n */\n/**\n * Breakpoints\n */\n/**\n * Margin\n */\n/**\n * Padding\n */\n/**\n * Line-Height\n */\n.links {\n  margin-bottom: 26px;\n}\n.links__list {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 10px -3px;\n}\n.links__list-item {\n  padding: 0;\n  margin: 0 3px;\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  border-radius: 3px;\n  text-align: center;\n  background: #ebebeb;\n}\n.links__list-item a {\n  border: 0;\n}\n.links__list-item a i {\n  font-size: 14px;\n  color: #555555;\n}\n.links__list-item a:hover i, .links__list-item a:focus i {\n  color: #222;\n}";
}


// --------------------
// Request: /components/menu.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs ($id_e8bbac22)
// Dependencies: 

// --------------------
const $id_873ce920 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/root-component.mjs
// Parents: 
// - /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry ($id_bd775ced)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/root.vue ($id_f720929d)
// --------------------
const $id_0c337b5e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/root.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/root-component.mjs ($id_0c337b5e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f720929d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_App = __vite_ssr_import_0__.resolveComponent("App")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_App, _attrs, null, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/pages/runtime/root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/app-component.mjs
// Parents: 
// - /Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry ($id_bd775ced)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_f86bfd6e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/app-component.mjs ($id_f86bfd6e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  setup() {
    __vite_ssr_import_0__.onMounted(() => {
      KontentSmartLink.initialize({ queryParam: "preview" });
    });
  },
  metaInfo: {
    title: "Nuxt 3 + Kontent by Kentico",
    titleTemplate: "&s | Kontent"
  }
};
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage");
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ark/Desktop/convert-2-nuxt3-strapi/app.vue"]]);
;
}


const __modules__ = {
 '/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry': $id_bd775ced,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/legacy.mjs': $id_93532f58,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/@vue/reactivity/dist/reactivity.cjs.js': $id_85c34493,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/css.mjs': $id_1f36750b,
 '/assets/scss/init.scss': $id_75fded23,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/plugins/server.mjs': $id_078a3c79,
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/meta.config.mjs': $id_7a157705,
 '/node_modules/nuxt3/dist/pages/runtime/router.mjs': $id_a4d6cb5b,
 '/node_modules/nuxt3/dist/pages/runtime/child.vue': $id_0a2c1f73,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/node_modules/nuxt3/dist/pages/runtime/page.vue': $id_10628d40,
 '/node_modules/nuxt3/dist/pages/runtime/layout.mjs': $id_9b68c93f,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/layouts.mjs': $id_f344b7f9,
 '/layouts/default.vue': $id_7689e89d,
 '/layouts/default.vue?vue&type=style&index=0&lang.scss': $id_05ef260d,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/routes.mjs': $id_62ccfeba,
 '/pages/404.vue': $id_591d0cdb,
 '/components/sidebar.vue': $id_599479fd,
 '/pages/[slug].vue': $id_02324ad0,
 '/store/menu.ts': $id_db384329,
 '/pages/article/[slug].vue': $id_aa2c960d,
 '/pages/category/[slug].vue': $id_5482dfc7,
 '/components/article.vue': $id_4e8c3520,
 '/components/article.vue?vue&type=style&index=0&lang.scss': $id_9921893b,
 '/store/category.ts': $id_f2565452,
 '/store/article.ts': $id_97e76fea,
 '/pages/index.vue': $id_cca58e97,
 '/pages/tag/[slug].vue': $id_6e42da74,
 '/store/tag.ts': $id_4b976f79,
 '/node_modules/@pinia/nuxt/templates/plugin.js': $id_5e685441,
 '/node_modules/kontent-nuxt3-module/dist/plugin.js': $id_9212ab0d,
 '/node_modules/@kentico/kontent-delivery/dist/cjs/index.js': $id_f6ef2b96,
 '/plugins/dateFormat.plugin.ts': $id_372b0b27,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/components.mjs': $id_e8bbac22,
 '/components/article-detail.vue': $id_a8819087,
 '/components/article-detail.vue?vue&type=style&index=0&lang.scss': $id_f15cb6df,
 '/components/links.vue': $id_5cf34192,
 '/components/links.vue?vue&type=style&index=0&lang.scss': $id_38fd0e95,
 '/components/menu.vue': $id_873ce920,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/root-component.mjs': $id_0c337b5e,
 '/node_modules/nuxt3/dist/pages/runtime/root.vue': $id_f720929d,
 '/@id/__x00__virtual:/Users/ark/Desktop/convert-2-nuxt3-strapi/.nuxt/app-component.mjs': $id_f86bfd6e,
 '/app.vue': $id_2b46e842
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('/Users/ark/Desktop/convert-2-nuxt3-strapi/node_modules/nuxt3/dist/app/entry')