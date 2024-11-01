sap.ui.define(['exports'], (function (exports) { 'use strict';

    class EventProvider {
        constructor() {
            this._eventRegistry = new Map();
        }
        attachEvent(eventName, fnFunction) {
            const eventRegistry = this._eventRegistry;
            const eventListeners = eventRegistry.get(eventName);
            if (!Array.isArray(eventListeners)) {
                eventRegistry.set(eventName, [fnFunction]);
                return;
            }
            if (!eventListeners.includes(fnFunction)) {
                eventListeners.push(fnFunction);
            }
        }
        detachEvent(eventName, fnFunction) {
            const eventRegistry = this._eventRegistry;
            const eventListeners = eventRegistry.get(eventName);
            if (!eventListeners) {
                return;
            }
            const indexOfFnToDetach = eventListeners.indexOf(fnFunction);
            if (indexOfFnToDetach !== -1) {
                eventListeners.splice(indexOfFnToDetach, 1);
            }
            if (eventListeners.length === 0) {
                eventRegistry.delete(eventName);
            }
        }
        /**
         * Fires an event and returns the results of all event listeners as an array.
         *
         * @param eventName the event to fire
         * @param data optional data to pass to each event listener
         * @returns {Array} an array with the results of all event listeners
         */
        fireEvent(eventName, data) {
            const eventRegistry = this._eventRegistry;
            const eventListeners = eventRegistry.get(eventName);
            if (!eventListeners) {
                return [];
            }
            return eventListeners.map(fn => {
                return fn.call(this, data);
            });
        }
        /**
         * Fires an event and returns a promise that will resolve once all listeners have resolved.
         *
         * @param eventName the event to fire
         * @param data optional data to pass to each event listener
         * @returns {Promise} a promise that will resolve when all listeners have resolved
         */
        fireEventAsync(eventName, data) {
            return Promise.all(this.fireEvent(eventName, data));
        }
        isHandlerAttached(eventName, fnFunction) {
            const eventRegistry = this._eventRegistry;
            const eventListeners = eventRegistry.get(eventName);
            if (!eventListeners) {
                return false;
            }
            return eventListeners.includes(fnFunction);
        }
        hasListeners(eventName) {
            return !!this._eventRegistry.get(eventName);
        }
    }

    const assetParameters = { "themes": { "default": "sap_horizon", "all": ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw", "sap_horizon_exp", "sap_horizon_dark_exp", "sap_horizon_hcb_exp", "sap_horizon_hcw_exp"] }, "languages": { "default": "en", "all": ["ar", "bg", "ca", "cnr", "cs", "cy", "da", "de", "el", "en", "en_GB", "en_US_sappsd", "en_US_saprigi", "en_US_saptrc", "es", "es_MX", "et", "fi", "fr", "fr_CA", "hi", "hr", "hu", "in", "it", "iw", "ja", "kk", "ko", "lt", "lv", "mk", "ms", "nl", "no", "pl", "pt_PT", "pt", "ro", "ru", "sh", "sk", "sl", "sr", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_TW"] }, "locales": { "default": "en", "all": ["ar", "ar_EG", "ar_SA", "bg", "ca", "cnr", "cs", "da", "de", "de_AT", "de_CH", "el", "el_CY", "en", "en_AU", "en_GB", "en_HK", "en_IE", "en_IN", "en_NZ", "en_PG", "en_SG", "en_ZA", "es", "es_AR", "es_BO", "es_CL", "es_CO", "es_MX", "es_PE", "es_UY", "es_VE", "et", "fa", "fi", "fr", "fr_BE", "fr_CA", "fr_CH", "fr_LU", "he", "hi", "hr", "hu", "id", "it", "it_CH", "ja", "kk", "ko", "lt", "lv", "ms", "mk", "nb", "nl", "nl_BE", "pl", "pt", "pt_PT", "ro", "ru", "ru_UA", "sk", "sl", "sr", "sr_Latn", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_HK", "zh_SG", "zh_TW"] } };
    const DEFAULT_THEME = assetParameters.themes.default;
    const SUPPORTED_THEMES = assetParameters.themes.all;
    const DEFAULT_LANGUAGE = assetParameters.languages.default;
    const DEFAULT_LOCALE = assetParameters.locales.default;
    const SUPPORTED_LOCALES = assetParameters.locales.all;

    var class2type = {};
    var hasOwn = class2type.hasOwnProperty;
    var toString = class2type.toString;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var fnIsPlainObject = function (obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
        }
        proto = Object.getPrototypeOf(obj);
        if (!proto) {
            return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    };

    var oToken = Object.create(null);
    var fnMerge$1 = function (arg1, arg2, arg3, arg4) {
        var src, copyIsArray, copy, name, options, clone, target = arguments[2] || {}, i = 3, length = arguments.length, deep = arguments[0] || false, skipToken = arguments[1] ? undefined : oToken;
        if (typeof target !== 'object' && typeof target !== 'function') {
            target = {};
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (name === '__proto__' || target === copy) {
                        continue;
                    }
                    if (deep && copy && (fnIsPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        }
                        else {
                            clone = src && fnIsPlainObject(src) ? src : {};
                        }
                        target[name] = fnMerge$1(deep, arguments[1], clone, copy);
                    }
                    else if (copy !== skipToken) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };

    const fnMerge = function (arg1, arg2) {
        return fnMerge$1(true, false, ...arguments);
    };

    const features = new Map();
    const componentFeatures = new Map();
    const subscribers = new Map();
    const EVENT_NAME = "componentFeatureLoad";
    const eventProvider$5 = new EventProvider();
    const featureLoadEventName = name => `${EVENT_NAME}_${name}`;
    const registerFeature = (name, feature) => {
      features.set(name, feature);
    };
    const getFeature = name => {
      return features.get(name);
    };
    const getComponentFeature = name => {
      return componentFeatures.get(name);
    };
    const subscribeForFeatureLoad = (name, klass, callback) => {
      const subscriber = subscribers.get(klass);
      const isSubscribed = subscriber?.includes(name);
      if (isSubscribed) {
        return;
      }
      if (!subscriber) {
        subscribers.set(klass, [name]);
      } else {
        subscriber.push(name);
      }
      eventProvider$5.attachEvent(featureLoadEventName(name), callback);
    };

    const isSSR$2 = typeof document === "undefined";
    const internals$1 = {
        search() {
            if (isSSR$2) {
                return "";
            }
            return window.location.search;
        },
    };
    const getLocationHref = () => {
        if (isSSR$2) {
            return "";
        }
        return window.location.href;
    };
    const getLocationSearch = () => {
        return internals$1.search();
    };

    const getMetaTagValue = (metaTagName) => {
        const metaTag = document.querySelector(`META[name="${metaTagName}"]`), metaTagContent = metaTag && metaTag.getAttribute("content");
        return metaTagContent;
    };
    const validateThemeOrigin = (origin) => {
        const allowedOrigins = getMetaTagValue("sap-allowedThemeOrigins");
        return allowedOrigins && allowedOrigins.split(",").some(allowedOrigin => {
            return allowedOrigin === "*" || origin === allowedOrigin.trim();
        });
    };
    const buildCorrectUrl = (oldUrl, newOrigin) => {
        const oldUrlPath = new URL(oldUrl).pathname;
        return new URL(oldUrlPath, newOrigin).toString();
    };
    const validateThemeRoot = (themeRoot) => {
        let resultUrl;
        try {
            if (themeRoot.startsWith(".") || themeRoot.startsWith("/")) {
                // Handle relative url
                // new URL("/newExmPath", "http://example.com/exmPath") => http://example.com/newExmPath
                // new URL("./newExmPath", "http://example.com/exmPath") => http://example.com/exmPath/newExmPath
                // new URL("../newExmPath", "http://example.com/exmPath") => http://example.com/newExmPath
                resultUrl = new URL(themeRoot, getLocationHref()).toString();
            }
            else {
                const themeRootURL = new URL(themeRoot);
                const origin = themeRootURL.origin;
                if (origin && validateThemeOrigin(origin)) {
                    // If origin is allowed, use it
                    resultUrl = themeRootURL.toString();
                }
                else {
                    // If origin is not allow and the URL is not relative, we have to replace the origin
                    // with current location
                    resultUrl = buildCorrectUrl(themeRootURL.toString(), getLocationHref());
                }
            }
            if (!resultUrl.endsWith("/")) {
                resultUrl = `${resultUrl}/`;
            }
            return `${resultUrl}UI5/`;
        }
        catch (e) {
            // Catch if URL is not correct
        }
    };

    /**
     * Different types of AnimationMode.
     *
     * @public
     */
    var AnimationMode;
    (function (AnimationMode) {
        /**
         * @public
         */
        AnimationMode["Full"] = "full";
        /**
         * @public
         */
        AnimationMode["Basic"] = "basic";
        /**
         * @public
         */
        AnimationMode["Minimal"] = "minimal";
        /**
         * @public
         */
        AnimationMode["None"] = "none";
    })(AnimationMode || (AnimationMode = {}));
    var AnimationMode$1 = AnimationMode;

    const eventProvider$4 = new EventProvider();
    const CONFIGURATION_RESET = "configurationReset";
    const attachConfigurationReset = (listener) => {
        eventProvider$4.attachEvent(CONFIGURATION_RESET, listener);
    };

    let initialized = false;
    let initialConfig = {
        animationMode: AnimationMode$1.Full,
        theme: DEFAULT_THEME,
        themeRoot: undefined,
        rtl: undefined,
        language: undefined,
        timezone: undefined,
        calendarType: undefined,
        secondaryCalendarType: undefined,
        noConflict: false, // no URL
        formatSettings: {},
        fetchDefaultLanguage: false,
        defaultFontLoading: true,
        enableDefaultTooltips: true,
    };
    const getTheme$1 = () => {
        initConfiguration();
        return initialConfig.theme;
    };
    const getThemeRoot$1 = () => {
        initConfiguration();
        return initialConfig.themeRoot;
    };
    const getLanguage = () => {
        initConfiguration();
        return initialConfig.language;
    };
    /**
     * Returns if the default language, that is inlined at build time,
     * should be fetched over the network instead.
     * @returns {Boolean}
     */
    const getFetchDefaultLanguage = () => {
        initConfiguration();
        return initialConfig.fetchDefaultLanguage;
    };
    const getNoConflict = () => {
        initConfiguration();
        return initialConfig.noConflict;
    };
    const getDefaultFontLoading$1 = () => {
        initConfiguration();
        return initialConfig.defaultFontLoading;
    };
    const getEnableDefaultTooltips = () => {
        initConfiguration();
        return initialConfig.enableDefaultTooltips;
    };
    const booleanMapping = new Map();
    booleanMapping.set("true", true);
    booleanMapping.set("false", false);
    const parseConfigurationScript = () => {
        const configScript = document.querySelector("[data-ui5-config]") || document.querySelector("[data-id='sap-ui-config']"); // for backward compatibility
        let configJSON;
        if (configScript) {
            try {
                configJSON = JSON.parse(configScript.innerHTML);
            }
            catch (err) {
                console.warn("Incorrect data-sap-ui-config format. Please use JSON"); /* eslint-disable-line */
            }
            if (configJSON) {
                initialConfig = fnMerge(initialConfig, configJSON);
            }
        }
    };
    const parseURLParameters = () => {
        const params = new URLSearchParams(getLocationSearch());
        // Process "sap-*" params first
        params.forEach((value, key) => {
            const parts = key.split("sap-").length;
            if (parts === 0 || parts === key.split("sap-ui-").length) {
                return;
            }
            applyURLParam(key, value, "sap");
        });
        // Process "sap-ui-*" params
        params.forEach((value, key) => {
            if (!key.startsWith("sap-ui")) {
                return;
            }
            applyURLParam(key, value, "sap-ui");
        });
    };
    const normalizeThemeRootParamValue = (value) => {
        const themeRoot = value.split("@")[1];
        return validateThemeRoot(themeRoot);
    };
    const normalizeThemeParamValue = (param, value) => {
        if (param === "theme" && value.includes("@")) { // the theme parameter might have @<URL-TO-THEME> in the value - strip this
            return value.split("@")[0];
        }
        return value;
    };
    const applyURLParam = (key, value, paramType) => {
        const lowerCaseValue = value.toLowerCase();
        const param = key.split(`${paramType}-`)[1];
        if (booleanMapping.has(value)) {
            value = booleanMapping.get(lowerCaseValue);
        }
        if (param === "theme") {
            initialConfig.theme = normalizeThemeParamValue(param, value);
            if (value && value.includes("@")) {
                initialConfig.themeRoot = normalizeThemeRootParamValue(value);
            }
        }
        else {
            initialConfig[param] = value;
        }
    };
    const applyOpenUI5Configuration = () => {
        const openUI5Support = getFeature("OpenUI5Support");
        if (!openUI5Support || !openUI5Support.isOpenUI5Detected()) {
            return;
        }
        const OpenUI5Config = openUI5Support.getConfigurationSettingsObject();
        initialConfig = fnMerge(initialConfig, OpenUI5Config);
    };
    const initConfiguration = () => {
        if (typeof document === "undefined" || initialized) {
            return;
        }
        resetConfiguration();
        initialized = true;
    };
    /**
     * Internaly exposed method to enable configurations in tests.
     * @private
     */
    const resetConfiguration = (testEnv) => {
        // 1. Lowest priority - configuration script
        parseConfigurationScript();
        // 2. URL parameters overwrite configuration script parameters
        parseURLParameters();
        // 3. If OpenUI5 is detected, it has the highest priority
        applyOpenUI5Configuration();
    };

    const MAX_PROCESS_COUNT = 10;
    class RenderQueue {
        constructor() {
            this.list = []; // Used to store the web components in order
            this.lookup = new Set(); // Used for faster search
        }
        add(webComponent) {
            if (this.lookup.has(webComponent)) {
                return;
            }
            this.list.push(webComponent);
            this.lookup.add(webComponent);
        }
        remove(webComponent) {
            if (!this.lookup.has(webComponent)) {
                return;
            }
            this.list = this.list.filter(item => item !== webComponent);
            this.lookup.delete(webComponent);
        }
        shift() {
            const webComponent = this.list.shift();
            if (webComponent) {
                this.lookup.delete(webComponent);
                return webComponent;
            }
        }
        isEmpty() {
            return this.list.length === 0;
        }
        isAdded(webComponent) {
            return this.lookup.has(webComponent);
        }
        /**
         * Processes the whole queue by executing the callback on each component,
         * while also imposing restrictions on how many times a component may be processed.
         *
         * @param callback - function with one argument (the web component to be processed)
         */
        process(callback) {
            let webComponent;
            const stats = new Map();
            webComponent = this.shift();
            while (webComponent) {
                const timesProcessed = stats.get(webComponent) || 0;
                if (timesProcessed > MAX_PROCESS_COUNT) {
                    throw new Error(`Web component processed too many times this task, max allowed is: ${MAX_PROCESS_COUNT}`);
                }
                callback(webComponent);
                stats.set(webComponent, timesProcessed + 1);
                webComponent = this.shift();
            }
        }
    }

    /**
     * Returns a singleton HTML element, inserted in given parent element of HTML page,
     * used mostly to store and share global resources between multiple UI5 Web Components runtimes.
     *
     * @param { string } tag the element tag/selector
     * @param { HTMLElement } parentElement the parent element to insert the singleton element instance
     * @param { Function } createEl a factory function for the element instantiation, by default document.createElement is used
     * @returns { Element }
     */
    const getSingletonElementInstance = (tag, parentElement = document.body, createEl) => {
        let el = document.querySelector(tag);
        if (el) {
            return el;
        }
        el = createEl ? createEl() : document.createElement(tag);
        return parentElement.insertBefore(el, parentElement.firstChild);
    };

    const getMetaDomEl = () => {
        const el = document.createElement("meta");
        el.setAttribute("name", "ui5-shared-resources");
        el.setAttribute("content", ""); // attribute "content" should be present when "name" is set.
        return el;
    };
    const getSharedResourcesInstance = () => {
        if (typeof document === "undefined") {
            return null;
        }
        return getSingletonElementInstance(`meta[name="ui5-shared-resources"]`, document.head, getMetaDomEl);
    };
    /**
     * Use this method to initialize/get resources that you would like to be shared among UI5 Web Components runtime instances.
     * The data will be accessed via a singleton "ui5-shared-resources" HTML element in the "body" element of the page.
     *
     * @public
     * @param namespace Unique ID of the resource, may contain "." to denote hierarchy
     * @param initialValue Object or primitive that will be used as an initial value if the resource does not exist
     * @returns {*}
     */
    const getSharedResource = (namespace, initialValue) => {
        const parts = namespace.split(".");
        let current = getSharedResourcesInstance();
        if (!current) {
            return initialValue;
        }
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            const lastPart = i === parts.length - 1;
            if (!Object.prototype.hasOwnProperty.call(current, part)) {
                current[part] = lastPart ? initialValue : {};
            }
            current = current[part];
        }
        return current;
    };

    const VersionInfo = {
        version: "2.3.0",
        major: 2,
        minor: 3,
        patch: 0,
        suffix: "",
        isNext: false,
        buildTime: 1727888399,
    };

    let suf;
    let rulesObj = {
        include: [/^ui5-/],
        exclude: [],
    };
    const tagsCache = new Map(); // true/false means the tag should/should not be cached, undefined means not known yet.
    /**
     * Sets the suffix to be used for custom elements scoping, f.e. pass "demo" to get tags such as "ui5-button-demo".
     * Note: by default all tags starting with "ui5-" will be scoped, unless you change this by calling "setCustomElementsScopingRules"
     *
     * @public
     * @param suffix The scoping suffix
     */
    const setCustomElementsScopingSuffix = (suffix) => {
        if (!suffix.match(/^[a-zA-Z0-9_-]+$/)) {
            throw new Error("Only alphanumeric characters and dashes allowed for the scoping suffix");
        }
        suf = suffix;
    };
    /**
     * Returns the currently set scoping suffix, or undefined if not set.
     *
     * @public
     * @returns {String|undefined}
     */
    const getCustomElementsScopingSuffix = () => {
        return suf;
    };
    /**
     * Returns the rules, governing which custom element tags to scope and which not. By default, all elements
     * starting with "ui5-" are scoped. The default rules are: {include: [/^ui5-/]}.
     *
     * @public
     * @returns {Object}
     */
    const getCustomElementsScopingRules = () => {
        return rulesObj;
    };
    /**
     * Determines whether custom elements with the given tag should be scoped or not.
     * The tag is first matched against the "include" rules and then against the "exclude" rules and the
     * result is cached until new rules are set.
     *
     * @public
     * @param tag
     */
    const shouldScopeCustomElement = (tag) => {
        if (!tagsCache.has(tag)) {
            const result = rulesObj.include.some(rule => tag.match(rule)) && !rulesObj.exclude.some(rule => tag.match(rule));
            tagsCache.set(tag, result);
        }
        return tagsCache.get(tag);
    };
    /**
     * Returns the currently set scoping suffix, if any and if the tag should be scoped, or undefined otherwise.
     *
     * @public
     * @param tag
     * @returns {String}
     */
    const getEffectiveScopingSuffixForTag = (tag) => {
        if (shouldScopeCustomElement(tag)) {
            return getCustomElementsScopingSuffix();
        }
    };
    /**
     * @public
     * Used for getting a scoped name for a CSS variable using the same transformation used in the build
     * @name the name of the css variable as written in the code
     * @returns a variable name with the current version inserted as available at runtime
     */
    const getScopedVarName = (name) => {
        const versionStr = `v${VersionInfo.version.replaceAll(".", "-")}`;
        const expr = /(--_?ui5)([^,:)\s]+)/g;
        return name.replaceAll(expr, `$1-${versionStr}$2`);
    };

    let currentRuntimeIndex;
    let currentRuntimeAlias = "";
    const compareCache = new Map();
    /**
     * Central registry where all runtimes register themselves by pushing an object.
     * The index in the registry servers as an ID for the runtime.
     * @type {*}
     */
    const Runtimes = getSharedResource("Runtimes", []);
    /**
     * Registers the current runtime in the shared runtimes resource registry
     */
    const registerCurrentRuntime = () => {
        if (currentRuntimeIndex === undefined) {
            currentRuntimeIndex = Runtimes.length;
            const versionInfo = VersionInfo;
            Runtimes.push({
                ...versionInfo,
                get scopingSuffix() {
                    return getCustomElementsScopingSuffix();
                },
                get registeredTags() {
                    return getAllRegisteredTags();
                },
                get scopingRules() {
                    return getCustomElementsScopingRules();
                },
                alias: currentRuntimeAlias,
                description: `Runtime ${currentRuntimeIndex} - ver ${versionInfo.version}${""}`,
            });
        }
    };
    /**
     * Returns the index of the current runtime's object in the shared runtimes resource registry
     * @returns {*}
     */
    const getCurrentRuntimeIndex = () => {
        return currentRuntimeIndex;
    };
    /**
     * Compares two runtimes and returns 1 if the first is of a bigger version, -1 if the second is of a bigger version, and 0 if equal
     * @param index1 The index of the first runtime to compare
     * @param index2 The index of the second runtime to compare
     * @returns {number}
     */
    const compareRuntimes = (index1, index2) => {
        const cacheIndex = `${index1},${index2}`;
        if (compareCache.has(cacheIndex)) {
            return compareCache.get(cacheIndex);
        }
        const runtime1 = Runtimes[index1];
        const runtime2 = Runtimes[index2];
        if (!runtime1 || !runtime2) {
            throw new Error("Invalid runtime index supplied");
        }
        // If any of the two is a next version, bigger buildTime wins
        if (runtime1.isNext || runtime2.isNext) {
            return runtime1.buildTime - runtime2.buildTime;
        }
        // If major versions differ, bigger one wins
        const majorDiff = runtime1.major - runtime2.major;
        if (majorDiff) {
            return majorDiff;
        }
        // If minor versions differ, bigger one wins
        const minorDiff = runtime1.minor - runtime2.minor;
        if (minorDiff) {
            return minorDiff;
        }
        // If patch versions differ, bigger one wins
        const patchDiff = runtime1.patch - runtime2.patch;
        if (patchDiff) {
            return patchDiff;
        }
        // Bigger suffix wins, f.e. rc10 > rc9
        // Important: suffix is alphanumeric, must use natural compare
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
        const result = collator.compare(runtime1.suffix, runtime2.suffix);
        compareCache.set(cacheIndex, result);
        return result;
    };
    const getAllRuntimes = () => {
        return Runtimes;
    };

    const Tags = getSharedResource("Tags", new Map());
    const Definitions = new Set();
    let Failures = new Map();
    let failureTimeout;
    const UNKNOWN_RUNTIME = -1;
    const registerTag = tag => {
      Definitions.add(tag);
      Tags.set(tag, getCurrentRuntimeIndex());
    };
    const isTagRegistered = tag => {
      return Definitions.has(tag);
    };
    const getAllRegisteredTags = () => {
      return [...Definitions.values()];
    };
    const recordTagRegistrationFailure = tag => {
      let tagRegRuntimeIndex = Tags.get(tag);
      if (tagRegRuntimeIndex === undefined) {
        tagRegRuntimeIndex = UNKNOWN_RUNTIME;
      }
      if (!Failures.has(tagRegRuntimeIndex)) {
        Failures.set(tagRegRuntimeIndex, new Set());
      }
      Failures.get(tagRegRuntimeIndex).add(tag);
      if (!failureTimeout) {
        failureTimeout = setTimeout(() => {
          displayFailedRegistrations();
          Failures = new Map();
          failureTimeout = undefined;
        }, 1000);
      }
    };
    const displayFailedRegistrations = () => {
      const allRuntimes = getAllRuntimes();
      const currentRuntimeIndex = getCurrentRuntimeIndex();
      const currentRuntime = allRuntimes[currentRuntimeIndex];
      let message = `Multiple UI5 Web Components instances detected.`;
      if (allRuntimes.length > 1) {
        message = `${message}\nLoading order (versions before 1.1.0 not listed): ${allRuntimes.map(runtime => `\n${runtime.description}`).join("")}`;
      }
      [...Failures.keys()].forEach(otherRuntimeIndex => {
        let comparison;
        let otherRuntime;
        if (otherRuntimeIndex === UNKNOWN_RUNTIME) {
          comparison = 1;
          otherRuntime = {
            description: `Older unknown runtime`
          };
        } else {
          comparison = compareRuntimes(currentRuntimeIndex, otherRuntimeIndex);
          otherRuntime = allRuntimes[otherRuntimeIndex];
        }
        let compareWord;
        if (comparison > 0) {
          compareWord = "an older";
        } else if (comparison < 0) {
          compareWord = "a newer";
        } else {
          compareWord = "the same";
        }
        message = `${message}\n\n"${currentRuntime.description}" failed to define ${Failures.get(otherRuntimeIndex).size} tag(s) as they were defined by a runtime of ${compareWord} version "${otherRuntime.description}": ${[...Failures.get(otherRuntimeIndex)].sort().join(", ")}.`;
        if (comparison > 0) {
          message = `${message}\nWARNING! If your code uses features of the above web components, unavailable in ${otherRuntime.description}, it might not work as expected!`;
        } else {
          message = `${message}\nSince the above web components were defined by the same or newer version runtime, they should be compatible with your code.`;
        }
      });
      message = `${message}\n\nTo prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`;
      console.warn(message);
    };

    const rtlAwareSet = new Set();
    const markAsRtlAware = (klass) => {
        rtlAwareSet.add(klass);
    };
    const isRtlAware = (klass) => {
        return rtlAwareSet.has(klass);
    };

    const registeredElements = new Set();
    const eventProvider$3 = new EventProvider();
    const invalidatedWebComponents = new RenderQueue(); // Queue for invalidated web components
    let renderTaskPromise, renderTaskPromiseResolve;
    let mutationObserverTimer;
    let queuePromise;
    /**
     * Schedules a render task (if not already scheduled) to render the component
     *
     * @param webComponent
     * @returns {Promise}
     */
    const renderDeferred = async (webComponent) => {
        // Enqueue the web component
        invalidatedWebComponents.add(webComponent);
        // Schedule a rendering task
        await scheduleRenderTask();
    };
    /**
     * Renders a component synchronously and adds it to the registry of rendered components
     *
     * @param webComponent
     */
    const renderImmediately = (webComponent) => {
        eventProvider$3.fireEvent("beforeComponentRender", webComponent);
        registeredElements.add(webComponent);
        webComponent._render();
    };
    /**
     * Cancels the rendering of a component, if awaiting to be rendered, and removes it from the registry of rendered components
     *
     * @param webComponent
     */
    const cancelRender = (webComponent) => {
        invalidatedWebComponents.remove(webComponent);
        registeredElements.delete(webComponent);
    };
    /**
     * Schedules a rendering task, if not scheduled already
     */
    const scheduleRenderTask = async () => {
        if (!queuePromise) {
            queuePromise = new Promise(resolve => {
                window.requestAnimationFrame(() => {
                    // Render all components in the queue
                    // console.log(`--------------------RENDER TASK START------------------------------`); // eslint-disable-line
                    invalidatedWebComponents.process(renderImmediately);
                    // console.log(`--------------------RENDER TASK END------------------------------`); // eslint-disable-line
                    // Resolve the promise so that callers of renderDeferred can continue
                    queuePromise = null;
                    resolve();
                    // Wait for Mutation observer before the render task is considered finished
                    if (!mutationObserverTimer) {
                        mutationObserverTimer = setTimeout(() => {
                            mutationObserverTimer = undefined;
                            if (invalidatedWebComponents.isEmpty()) {
                                _resolveTaskPromise();
                            }
                        }, 200);
                    }
                });
            });
        }
        await queuePromise;
    };
    /**
     * return a promise that will be resolved once all invalidated web components are rendered
     */
    const whenDOMUpdated = () => {
        if (renderTaskPromise) {
            return renderTaskPromise;
        }
        renderTaskPromise = new Promise(resolve => {
            renderTaskPromiseResolve = resolve;
            window.requestAnimationFrame(() => {
                if (invalidatedWebComponents.isEmpty()) {
                    renderTaskPromise = undefined;
                    resolve();
                }
            });
        });
        return renderTaskPromise;
    };
    const whenAllCustomElementsAreDefined = () => {
        const definedPromises = getAllRegisteredTags().map(tag => customElements.whenDefined(tag));
        return Promise.all(definedPromises);
    };
    const renderFinished = async () => {
        await whenAllCustomElementsAreDefined();
        await whenDOMUpdated();
    };
    const _resolveTaskPromise = () => {
        if (!invalidatedWebComponents.isEmpty()) {
            // More updates are pending. Resolve will be called again
            return;
        }
        if (renderTaskPromiseResolve) {
            renderTaskPromiseResolve();
            renderTaskPromiseResolve = undefined;
            renderTaskPromise = undefined;
        }
    };
    /**
     * Re-renders all UI5 Elements on the page, with the option to specify filters to rerender only some components.
     *
     * Usage:
     * reRenderAllUI5Elements() -> re-renders all components
     * reRenderAllUI5Elements({tag: "ui5-button"}) -> re-renders only instances of ui5-button
     * reRenderAllUI5Elements({rtlAware: true}) -> re-renders only rtlAware components
     * reRenderAllUI5Elements({languageAware: true}) -> re-renders only languageAware components
     * reRenderAllUI5Elements({themeAware: true}) -> re-renders only themeAware components
     * reRenderAllUI5Elements({rtlAware: true, languageAware: true}) -> re-renders components that are rtlAware or languageAware
     * etc...
     *
     * @public
     * @param {object|undefined} filters - Object with keys that can be "rtlAware" or "languageAware"
     * @returns {Promise<void>}
     */
    const reRenderAllUI5Elements = async (filters) => {
        registeredElements.forEach((element) => {
            const ctor = element.constructor;
            const tag = ctor.getMetadata().getTag();
            const rtlAware = isRtlAware(ctor);
            const languageAware = ctor.getMetadata().isLanguageAware();
            const themeAware = ctor.getMetadata().isThemeAware();
            if (!filters || (filters.tag === tag) || (filters.rtlAware && rtlAware) || (filters.languageAware && languageAware) || (filters.themeAware && themeAware)) {
                renderDeferred(element);
            }
        });
        await renderFinished();
    };

    const whenDOMReady = () => {
        return new Promise(resolve => {
            if (document.body) {
                resolve();
            }
            else {
                document.addEventListener("DOMContentLoaded", () => {
                    resolve();
                });
            }
        });
    };

    const isSSR$1 = typeof document === "undefined";
    const getStyleId = (name, value) => {
        return value ? `${name}|${value}` : name;
    };
    const shouldUpdate = (runtimeIndex) => {
        if (runtimeIndex === undefined) {
            return true;
        }
        return compareRuntimes(getCurrentRuntimeIndex(), parseInt(runtimeIndex)) === 1; // 1 means the current is newer, 0 means the same, -1 means the resource's runtime is newer
    };
    const createStyle = (data, name, value = "", theme) => {
        const content = typeof data === "string" ? data : data.content;
        const currentRuntimeIndex = getCurrentRuntimeIndex();
        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(content);
        stylesheet._ui5StyleId = getStyleId(name, value); // set an id so that we can find the style later
        if (theme) {
            stylesheet._ui5RuntimeIndex = currentRuntimeIndex;
            stylesheet._ui5Theme = theme;
        }
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
    };
    const updateStyle = (data, name, value = "", theme) => {
        const content = typeof data === "string" ? data : data.content;
        const currentRuntimeIndex = getCurrentRuntimeIndex();
        const stylesheet = document.adoptedStyleSheets.find(sh => sh._ui5StyleId === getStyleId(name, value));
        if (!stylesheet) {
            return;
        }
        if (!theme) {
            stylesheet.replaceSync(content || "");
        }
        else {
            const stylesheetRuntimeIndex = stylesheet._ui5RuntimeIndex;
            const stylesheetTheme = stylesheet._ui5Theme;
            if (stylesheetTheme !== theme || shouldUpdate(stylesheetRuntimeIndex)) {
                stylesheet.replaceSync(content || "");
                stylesheet._ui5RuntimeIndex = String(currentRuntimeIndex);
                stylesheet._ui5Theme = theme;
            }
        }
    };
    const hasStyle = (name, value = "") => {
        if (isSSR$1) {
            return true;
        }
        return !!document.adoptedStyleSheets.find(sh => sh._ui5StyleId === getStyleId(name, value));
    };
    const removeStyle = (name, value = "") => {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(sh => sh._ui5StyleId !== getStyleId(name, value));
    };
    const createOrUpdateStyle = (data, name, value = "", theme) => {
        if (hasStyle(name, value)) {
            updateStyle(data, name, value, theme);
        }
        else {
            createStyle(data, name, value, theme);
        }
    };
    const mergeStyles = (style1, style2) => {
        if (style1 === undefined) {
            return style2;
        }
        if (style2 === undefined) {
            return style1;
        }
        const style2Content = typeof style2 === "string" ? style2 : style2.content;
        if (typeof style1 === "string") {
            return `${style1} ${style2Content}`;
        }
        return {
            content: `${style1.content} ${style2Content}`,
            packageName: style1.packageName,
            fileName: style1.fileName,
        };
    };

    const styleData$2 = {
        packageName: "@ui5/webcomponents-base",
        fileName: "FontFace.css",
        content: `@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`,
    };

    const styleData$1 = {
        packageName: "@ui5/webcomponents-base",
        fileName: "OverrideFontFace.css",
        content: `@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}`,
    };

    let defaultFontLoading;
    attachConfigurationReset(() => {
        defaultFontLoading = undefined;
    });
    /**
     * Returns if the "defaultFontLoading" configuration is set.
     * @public
     * @returns { boolean }
     */
    const getDefaultFontLoading = () => {
        if (defaultFontLoading === undefined) {
            defaultFontLoading = getDefaultFontLoading$1();
        }
        return defaultFontLoading;
    };

    const insertFontFace = () => {
        const openUI5Support = getFeature("OpenUI5Support");
        // Only set the main font if there is no OpenUI5 support, or there is, but OpenUI5 is not loaded
        if ((!openUI5Support || !openUI5Support.isOpenUI5Detected())) {
            insertMainFontFace();
        }
        // Always set the override font - OpenUI5 in CSS Vars mode does not set it, unlike the main font
        insertOverrideFontFace();
    };
    const insertMainFontFace = () => {
        const hasFontStyles = document.querySelector("head>style[data-ui5-font-face]");
        if (!getDefaultFontLoading() || hasFontStyles) {
            return;
        }
        if (!hasStyle("data-ui5-font-face")) {
            createStyle(styleData$2, "data-ui5-font-face");
        }
    };
    const insertOverrideFontFace = () => {
        if (!hasStyle("data-ui5-font-face-override")) {
            createStyle(styleData$1, "data-ui5-font-face-override");
        }
    };

    const styleData = {
        packageName: "@ui5/webcomponents-base",
        fileName: "SystemCSSVars.css",
        content: `:root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}`,
    };

    const insertSystemCSSVars = () => {
        if (!hasStyle("data-ui5-system-css-vars")) {
            createStyle(styleData, "data-ui5-system-css-vars");
        }
    };

    const eventProvider$2 = new EventProvider();
    const THEME_REGISTERED = "themeRegistered";
    const attachThemeRegistered = (listener) => {
        eventProvider$2.attachEvent(THEME_REGISTERED, listener);
    };
    const fireThemeRegistered = (theme) => {
        return eventProvider$2.fireEvent(THEME_REGISTERED, theme);
    };

    const themeStyles = new Map();
    const loaders = new Map();
    const customLoaders = new Map();
    const registeredPackages = new Set();
    const registeredThemes = new Set();
    const registerThemePropertiesLoader = (packageName, themeName, loader) => {
        loaders.set(`${packageName}/${themeName}`, loader);
        registeredPackages.add(packageName);
        registeredThemes.add(themeName);
        fireThemeRegistered(themeName);
    };
    const getThemeProperties = async (packageName, themeName, externalThemeName) => {
        const cacheKey = `${packageName}_${themeName}_${externalThemeName || ""}`;
        const cachedStyleData = themeStyles.get(cacheKey);
        if (cachedStyleData !== undefined) { // it's valid for style to be an empty string
            return cachedStyleData;
        }
        if (!registeredThemes.has(themeName)) {
            const regThemesStr = [...registeredThemes.values()].join(", ");
            console.warn(`You have requested a non-registered theme ${themeName} - falling back to ${DEFAULT_THEME}. Registered themes are: ${regThemesStr}`); /* eslint-disable-line */
            return _getThemeProperties(packageName, DEFAULT_THEME);
        }
        const [style, customStyle] = await Promise.all([
            _getThemeProperties(packageName, themeName),
            externalThemeName ? _getThemeProperties(packageName, externalThemeName, true) : undefined,
        ]);
        const styleData = mergeStyles(style, customStyle);
        if (styleData) {
            themeStyles.set(cacheKey, styleData);
        }
        return styleData;
    };
    const _getThemeProperties = async (packageName, themeName, forCustomTheme = false) => {
        const loadersMap = forCustomTheme ? customLoaders : loaders;
        const loader = loadersMap.get(`${packageName}/${themeName}`);
        if (!loader) {
            // no themes for package
            if (!forCustomTheme) {
                console.error(`Theme [${themeName}] not registered for package [${packageName}]`); /* eslint-disable-line */
            }
            return;
        }
        let data;
        try {
            data = await loader(themeName);
        }
        catch (error) {
            const e = error;
            console.error(packageName, e.message); /* eslint-disable-line */
            return;
        }
        const themeProps = data._ || data; // Refactor: remove _ everywhere
        return themeProps;
    };
    const getRegisteredPackages = () => {
        return registeredPackages;
    };
    const isThemeRegistered = (theme) => {
        return registeredThemes.has(theme);
    };

    const warnings = new Set();
    const getThemeMetadata = () => {
        // Check if the class was already applied, most commonly to the link/style tag with the CSS Variables
        let el = document.querySelector(".sapThemeMetaData-Base-baseLib") || document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");
        if (el) {
            return getComputedStyle(el).backgroundImage;
        }
        el = document.createElement("span");
        el.style.display = "none";
        // Try with sapThemeMetaData-Base-baseLib first
        el.classList.add("sapThemeMetaData-Base-baseLib");
        document.body.appendChild(el);
        let metadata = getComputedStyle(el).backgroundImage;
        // Try with sapThemeMetaData-UI5-sap-ui-core only if the previous selector was not found
        if (metadata === "none") {
            el.classList.add("sapThemeMetaData-UI5-sap-ui-core");
            metadata = getComputedStyle(el).backgroundImage;
        }
        document.body.removeChild(el);
        return metadata;
    };
    const parseThemeMetadata = (metadataString) => {
        const params = /\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(metadataString);
        if (params && params.length >= 2) {
            let paramsString = params[1];
            paramsString = paramsString.replace(/\\"/g, `"`);
            if (paramsString.charAt(0) !== "{" && paramsString.charAt(paramsString.length - 1) !== "}") {
                try {
                    paramsString = decodeURIComponent(paramsString);
                }
                catch (ex) {
                    if (!warnings.has("decode")) {
                        console.warn("Malformed theme metadata string, unable to decodeURIComponent"); // eslint-disable-line
                        warnings.add("decode");
                    }
                    return;
                }
            }
            try {
                return JSON.parse(paramsString);
            }
            catch (ex) {
                if (!warnings.has("parse")) {
                    console.warn("Malformed theme metadata string, unable to parse JSON"); // eslint-disable-line
                    warnings.add("parse");
                }
            }
        }
    };
    const processThemeMetadata = (metadata) => {
        let themeName;
        let baseThemeName;
        try {
            themeName = metadata.Path.match(/\.([^.]+)\.css_variables$/)[1];
            baseThemeName = metadata.Extends[0];
        }
        catch (ex) {
            if (!warnings.has("object")) {
                console.warn("Malformed theme metadata Object", metadata); // eslint-disable-line
                warnings.add("object");
            }
            return;
        }
        return {
            themeName,
            baseThemeName,
        };
    };
    const getThemeDesignerTheme = () => {
        const metadataString = getThemeMetadata();
        if (!metadataString || metadataString === "none") {
            return;
        }
        const metadata = parseThemeMetadata(metadataString);
        if (metadata) {
            return processThemeMetadata(metadata);
        }
    };

    const eventProvider$1 = new EventProvider();
    const THEME_LOADED = "themeLoaded";
    const fireThemeLoaded = (theme) => {
        return eventProvider$1.fireEvent(THEME_LOADED, theme);
    };

    /**
     * Creates a `<link>` tag in the `<head>` tag
     * @param href - the CSS
     * @param attributes - optional attributes to add to the tag
     */
    const createLinkInHead = (href, attributes) => {
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        if (attributes) {
            Object.entries(attributes).forEach(pair => link.setAttribute(...pair));
        }
        link.href = href;
        document.head.appendChild(link);
        return new Promise(resolve => {
            link.addEventListener("load", resolve);
            link.addEventListener("error", resolve); // intended
        });
    };

    let currThemeRoot;
    attachConfigurationReset(() => {
        currThemeRoot = undefined;
    });
    /**
     * Returns the current theme root.
     *
     * @public
     * @since 1.14.0
     * @returns { string } the current theme root
     */
    const getThemeRoot = () => {
        if (currThemeRoot === undefined) {
            currThemeRoot = getThemeRoot$1();
        }
        return currThemeRoot;
    };
    const formatThemeLink = (theme) => {
        return `${getThemeRoot()}Base/baseLib/${theme}/css_variables.css`; // theme root is always set at this point.
    };
    const attachCustomThemeStylesToHead = async (theme) => {
        const link = document.querySelector(`[sap-ui-webcomponents-theme="${theme}"]`);
        if (link) {
            document.head.removeChild(link);
        }
        await createLinkInHead(formatThemeLink(theme), { "sap-ui-webcomponents-theme": theme });
    };

    const BASE_THEME_PACKAGE = "@ui5/webcomponents-theming";
    const isThemeBaseRegistered = () => {
        const registeredPackages = getRegisteredPackages();
        return registeredPackages.has(BASE_THEME_PACKAGE);
    };
    const loadThemeBase = async (theme) => {
        if (!isThemeBaseRegistered()) {
            return;
        }
        const cssData = await getThemeProperties(BASE_THEME_PACKAGE, theme);
        if (cssData) {
            createOrUpdateStyle(cssData, "data-ui5-theme-properties", BASE_THEME_PACKAGE, theme);
        }
    };
    const deleteThemeBase = () => {
        removeStyle("data-ui5-theme-properties", BASE_THEME_PACKAGE);
    };
    const loadComponentPackages = async (theme, externalThemeName) => {
        const registeredPackages = getRegisteredPackages();
        const packagesStylesPromises = [...registeredPackages].map(async (packageName) => {
            if (packageName === BASE_THEME_PACKAGE) {
                return;
            }
            const cssData = await getThemeProperties(packageName, theme, externalThemeName);
            if (cssData) {
                createOrUpdateStyle(cssData, `data-ui5-component-properties-${getCurrentRuntimeIndex()}`, packageName);
            }
        });
        return Promise.all(packagesStylesPromises);
    };
    const detectExternalTheme = async (theme) => {
        // If theme designer theme is detected, use this
        const extTheme = getThemeDesignerTheme();
        if (extTheme) {
            return extTheme;
        }
        // If OpenUI5Support is enabled, try to find out if it loaded variables
        const openUI5Support = getFeature("OpenUI5Support");
        if (openUI5Support && openUI5Support.isOpenUI5Detected()) {
            const varsLoaded = openUI5Support.cssVariablesLoaded();
            if (varsLoaded) {
                return {
                    themeName: openUI5Support.getConfigurationSettingsObject()?.theme, // just themeName
                    baseThemeName: "", // baseThemeName is only relevant for custom themes
                };
            }
        }
        else if (getThemeRoot()) {
            await attachCustomThemeStylesToHead(theme);
            return getThemeDesignerTheme();
        }
    };
    const applyTheme = async (theme) => {
        const extTheme = await detectExternalTheme(theme);
        // Only load theme_base properties if there is no externally loaded theme, or there is, but it is not being loaded
        if (!extTheme || theme !== extTheme.themeName) {
            await loadThemeBase(theme);
        }
        else {
            deleteThemeBase();
        }
        // Always load component packages properties. For non-registered themes, try with the base theme, if any
        const packagesTheme = isThemeRegistered(theme) ? theme : extTheme && extTheme.baseThemeName;
        await loadComponentPackages(packagesTheme || DEFAULT_THEME, extTheme && extTheme.themeName === theme ? theme : undefined);
        fireThemeLoaded(theme);
    };

    let curTheme;
    attachConfigurationReset(() => {
        curTheme = undefined;
    });
    /**
     * Returns the current theme.
     * @public
     * @returns {string} the current theme name
     */
    const getTheme = () => {
        if (curTheme === undefined) {
            curTheme = getTheme$1();
        }
        return curTheme;
    };
    /**
     * Applies a new theme after fetching its assets from the network.
     * @public
     * @param {string} theme the name of the new theme
     * @returns {Promise<void>} a promise that is resolved when the new theme assets have been fetched and applied to the DOM
     */
    const setTheme = async (theme) => {
        if (curTheme === theme) {
            return;
        }
        curTheme = theme;
        if (isBooted()) {
            // Update CSS Custom Properties
            await applyTheme(curTheme);
            await reRenderAllUI5Elements({ themeAware: true });
        }
    };
    /**
     * Returns if the currently set theme is part of legacy theme families ("sap_fiori_3").
     * **Note**: in addition, the method checks the base theme of a custom theme, built via the ThemeDesigner.
     *
     * @private
     * @returns { boolean }
     */
    const isLegacyThemeFamily = () => {
        const currentTheme = getTheme();
        if (!isKnownTheme(currentTheme)) {
            return !getThemeDesignerTheme()?.baseThemeName?.startsWith("sap_horizon");
        }
        return !currentTheme.startsWith("sap_horizon");
    };
    const isKnownTheme = (theme) => SUPPORTED_THEMES.includes(theme);

    const isSSR = typeof document === "undefined";
    const internals = {
        get userAgent() {
            if (isSSR) {
                return "";
            }
            return navigator.userAgent;
        },
        get touch() {
            if (isSSR) {
                return false;
            }
            return "ontouchstart" in window || navigator.maxTouchPoints > 0;
        },
        get chrome() {
            if (isSSR) {
                return false;
            }
            return /(Chrome|CriOS)/.test(internals.userAgent);
        },
        get firefox() {
            if (isSSR) {
                return false;
            }
            return /Firefox/.test(internals.userAgent);
        },
        get safari() {
            if (isSSR) {
                return false;
            }
            return !internals.chrome && /(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(internals.userAgent);
        },
        get webkit() {
            if (isSSR) {
                return false;
            }
            return /webkit/.test(internals.userAgent);
        },
        get windows() {
            if (isSSR) {
                return false;
            }
            return navigator.platform.indexOf("Win") !== -1;
        },
        get macOS() {
            if (isSSR) {
                return false;
            }
            return !!navigator.userAgent.match(/Macintosh|Mac OS X/i);
        },
        get iOS() {
            if (isSSR) {
                return false;
            }
            return !!(navigator.platform.match(/iPhone|iPad|iPod/)) || !!(internals.userAgent.match(/Mac/) && "ontouchend" in document);
        },
        get android() {
            if (isSSR) {
                return false;
            }
            return !internals.windows && /Android/.test(internals.userAgent);
        },
        get androidPhone() {
            if (isSSR) {
                return false;
            }
            return internals.android && /(?=android)(?=.*mobile)/i.test(internals.userAgent);
        },
        get ipad() {
            if (isSSR) {
                return false;
            }
            // With iOS 13 the string 'iPad' was removed from the user agent string through a browser setting, which is applied on all sites by default:
            // "Request Desktop Website -> All websites" (for more infos see: https://forums.developer.apple.com/thread/119186).
            // Therefore the OS is detected as MACINTOSH instead of iOS and the device is a tablet if the Device.support.touch is true.
            return /ipad/i.test(internals.userAgent) || (/Macintosh/i.test(internals.userAgent) && "ontouchend" in document);
        },
        _isPhone() {
            detectTablet();
            return internals.touch && !tablet;
        },
    };
    let windowsVersion;
    let webkitVersion;
    let tablet;
    const isWindows8OrAbove = () => {
        if (isSSR) {
            return false;
        }
        if (!internals.windows) {
            return false;
        }
        if (windowsVersion === undefined) {
            const matches = internals.userAgent.match(/Windows NT (\d+).(\d)/);
            windowsVersion = matches ? parseFloat(matches[1]) : 0;
        }
        return windowsVersion >= 8;
    };
    const isWebkit537OrAbove = () => {
        if (isSSR) {
            return false;
        }
        if (!internals.webkit) {
            return false;
        }
        if (webkitVersion === undefined) {
            const matches = internals.userAgent.match(/(webkit)[ /]([\w.]+)/);
            webkitVersion = matches ? parseFloat(matches[1]) : 0;
        }
        return webkitVersion >= 537.10;
    };
    const detectTablet = () => {
        if (isSSR) {
            return false;
        }
        if (tablet !== undefined) {
            return;
        }
        if (internals.ipad) {
            tablet = true;
            return;
        }
        if (internals.touch) {
            if (isWindows8OrAbove()) {
                tablet = true;
                return;
            }
            if (internals.chrome && internals.android) {
                tablet = !/Mobile Safari\/[.0-9]+/.test(internals.userAgent);
                return;
            }
            let densityFactor = window.devicePixelRatio ? window.devicePixelRatio : 1; // may be undefined in Windows Phone devices
            if (internals.android && isWebkit537OrAbove()) {
                densityFactor = 1;
            }
            tablet = (Math.min(window.screen.width / densityFactor, window.screen.height / densityFactor) >= 600);
            return;
        }
        tablet = internals.userAgent.indexOf("Touch") !== -1 || (internals.android && !internals.androidPhone);
    };
    const isSafari = () => internals.safari;
    const isChrome = () => internals.chrome;
    const isTablet = () => {
        detectTablet();
        return (internals.touch || isWindows8OrAbove()) && tablet;
    };
    const isPhone = () => {
        return internals._isPhone();
    };
    const isDesktop = () => {
        if (isSSR) {
            return false;
        }
        return (!isTablet() && !isPhone()) || isWindows8OrAbove();
    };
    const isIOS = () => {
        return internals.iOS;
    };
    const isAndroid = () => {
        return internals.android || internals.androidPhone;
    };

    let listenerAttached = false;
    const fixSafariActiveState = () => {
        if (isSafari() && isIOS() && !listenerAttached) {
            // Safari on iOS does not use the :active state unless there is a touchstart event handler on the <body> element
            document.body.addEventListener("touchstart", () => { });
            listenerAttached = true;
        }
    };

    let booted = false;
    let bootPromise;
    const eventProvider = new EventProvider();
    const isBooted = () => {
        return booted;
    };
    const boot = async () => {
        if (bootPromise !== undefined) {
            return bootPromise;
        }
        const bootExecutor = async (resolve) => {
            registerCurrentRuntime();
            if (typeof document === "undefined") {
                resolve();
                return;
            }
            attachThemeRegistered(onThemeRegistered);
            const openUI5Support = getFeature("OpenUI5Support");
            const isOpenUI5Loaded = openUI5Support ? openUI5Support.isOpenUI5Detected() : false;
            const f6Navigation = getFeature("F6Navigation");
            if (openUI5Support) {
                await openUI5Support.init();
            }
            if (f6Navigation && !isOpenUI5Loaded) {
                f6Navigation.init();
            }
            await whenDOMReady();
            await applyTheme(getTheme());
            openUI5Support && openUI5Support.attachListeners();
            insertFontFace();
            insertSystemCSSVars();
            fixSafariActiveState();
            resolve();
            booted = true;
            eventProvider.fireEvent("boot");
        };
        bootPromise = new Promise(bootExecutor);
        return bootPromise;
    };
    /**
     * Callback, executed after theme properties registration
     * to apply the newly registered theme.
     * @private
     * @param { string } theme
     */
    const onThemeRegistered = (theme) => {
        if (booted && theme === getTheme()) { // getTheme should only be called if "booted" is true
            applyTheme(getTheme());
        }
    };

    exports.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
    exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
    exports.EventProvider = EventProvider;
    exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
    exports.attachConfigurationReset = attachConfigurationReset;
    exports.boot = boot;
    exports.cancelRender = cancelRender;
    exports.createStyle = createStyle;
    exports.fnMerge = fnMerge;
    exports.getComponentFeature = getComponentFeature;
    exports.getCustomElementsScopingSuffix = getCustomElementsScopingSuffix;
    exports.getEffectiveScopingSuffixForTag = getEffectiveScopingSuffixForTag;
    exports.getEnableDefaultTooltips = getEnableDefaultTooltips;
    exports.getFeature = getFeature;
    exports.getFetchDefaultLanguage = getFetchDefaultLanguage;
    exports.getLanguage = getLanguage;
    exports.getNoConflict = getNoConflict;
    exports.getScopedVarName = getScopedVarName;
    exports.getSharedResource = getSharedResource;
    exports.getTheme = getTheme;
    exports.hasStyle = hasStyle;
    exports.isAndroid = isAndroid;
    exports.isChrome = isChrome;
    exports.isDesktop = isDesktop;
    exports.isIOS = isIOS;
    exports.isLegacyThemeFamily = isLegacyThemeFamily;
    exports.isPhone = isPhone;
    exports.isSafari = isSafari;
    exports.isTagRegistered = isTagRegistered;
    exports.markAsRtlAware = markAsRtlAware;
    exports.reRenderAllUI5Elements = reRenderAllUI5Elements;
    exports.recordTagRegistrationFailure = recordTagRegistrationFailure;
    exports.registerFeature = registerFeature;
    exports.registerTag = registerTag;
    exports.registerThemePropertiesLoader = registerThemePropertiesLoader;
    exports.renderDeferred = renderDeferred;
    exports.renderFinished = renderFinished;
    exports.renderImmediately = renderImmediately;
    exports.setCustomElementsScopingSuffix = setCustomElementsScopingSuffix;
    exports.setTheme = setTheme;
    exports.shouldScopeCustomElement = shouldScopeCustomElement;
    exports.subscribeForFeatureLoad = subscribeForFeatureLoad;

}));