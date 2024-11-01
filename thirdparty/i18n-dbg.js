sap.ui.define(['exports', 'ui5boot/splash/thirdparty/Boot'], (function (exports, Boot) { 'use strict';

    const eventProvider = new Boot.EventProvider();
    const LANG_CHANGE = "languageChange";
    const attachLanguageChange = (listener) => {
        eventProvider.attachEvent(LANG_CHANGE, listener);
    };

    const isSSR = typeof document === "undefined";
    const detectNavigatorLanguage = () => {
        if (isSSR) {
            return Boot.DEFAULT_LANGUAGE;
        }
        const browserLanguages = navigator.languages;
        const navigatorLanguage = () => {
            return navigator.language;
        };
        const rawLocale = (browserLanguages && browserLanguages[0]) || navigatorLanguage();
        return rawLocale || Boot.DEFAULT_LANGUAGE;
    };

    let curLanguage;
    let fetchDefaultLanguage;
    Boot.attachConfigurationReset(() => {
        curLanguage = undefined;
        fetchDefaultLanguage = undefined;
    });
    /**
     * Returns the currently configured language, or the browser language as a fallback.
     * @public
     * @returns {string}
     */
    const getLanguage = () => {
        if (curLanguage === undefined) {
            curLanguage = Boot.getLanguage();
        }
        return curLanguage;
    };
    /**
     * Returns if the default language, that is inlined, should be fetched over the network.
     * @public
     * @returns {boolean}
     */
    const getFetchDefaultLanguage = () => {
        if (fetchDefaultLanguage === undefined) {
            fetchDefaultLanguage = Boot.getFetchDefaultLanguage();
        }
        return fetchDefaultLanguage;
    };

    const rLocale = /^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
    class Locale {
        constructor(sLocaleId) {
            const aResult = rLocale.exec(sLocaleId.replace(/_/g, "-"));
            if (aResult === null) {
                throw new Error(`The given language ${sLocaleId} does not adhere to BCP-47.`);
            }
            this.sLocaleId = sLocaleId;
            this.sLanguage = aResult[1] || Boot.DEFAULT_LANGUAGE;
            this.sScript = aResult[2] || "";
            this.sRegion = aResult[3] || "";
            this.sVariant = (aResult[4] && aResult[4].slice(1)) || null;
            this.sExtension = (aResult[5] && aResult[5].slice(1)) || null;
            this.sPrivateUse = aResult[6] || null;
            if (this.sLanguage) {
                this.sLanguage = this.sLanguage.toLowerCase();
            }
            if (this.sScript) {
                this.sScript = this.sScript.toLowerCase().replace(/^[a-z]/, s => {
                    return s.toUpperCase();
                });
            }
            if (this.sRegion) {
                this.sRegion = this.sRegion.toUpperCase();
            }
        }
        getLanguage() {
            return this.sLanguage;
        }
        getScript() {
            return this.sScript;
        }
        getRegion() {
            return this.sRegion;
        }
        getVariant() {
            return this.sVariant;
        }
        getVariantSubtags() {
            return this.sVariant ? this.sVariant.split("-") : [];
        }
        getExtension() {
            return this.sExtension;
        }
        getExtensionSubtags() {
            return this.sExtension ? this.sExtension.slice(2).split("-") : [];
        }
        getPrivateUse() {
            return this.sPrivateUse;
        }
        getPrivateUseSubtags() {
            return this.sPrivateUse ? this.sPrivateUse.slice(2).split("-") : [];
        }
        hasPrivateUseSubtag(sSubtag) {
            return this.getPrivateUseSubtags().indexOf(sSubtag) >= 0;
        }
        toString() {
            const r = [this.sLanguage];
            if (this.sScript) {
                r.push(this.sScript);
            }
            if (this.sRegion) {
                r.push(this.sRegion);
            }
            if (this.sVariant) {
                r.push(this.sVariant);
            }
            if (this.sExtension) {
                r.push(this.sExtension);
            }
            if (this.sPrivateUse) {
                r.push(this.sPrivateUse);
            }
            return r.join("-");
        }
    }

    const cache = new Map();
    const getLocaleInstance = (lang) => {
        if (!cache.has(lang)) {
            cache.set(lang, new Locale(lang));
        }
        return cache.get(lang);
    };
    const convertToLocaleOrNull = (lang) => {
        try {
            if (lang && typeof lang === "string") {
                return getLocaleInstance(lang);
            }
        }
        catch (e) {
            // ignore
        }
        return new Locale(Boot.DEFAULT_LOCALE);
    };
    /**
     * Returns the locale based on the parameter or configured language Configuration#getLanguage
     * If no language has been configured - a new locale based on browser language is returned
     */
    const getLocale = (lang) => {
        const configLanguage = getLanguage();
        if (configLanguage) {
            return getLocaleInstance(configLanguage);
        }
        return convertToLocaleOrNull(detectNavigatorLanguage());
    };

    const localeDataMap = new Map();
    const loaders$1 = new Map();
    const cldrPromises = new Map();
    const reportedErrors$1 = new Set();
    let warningShown$1 = false;
    const M_ISO639_OLD_TO_NEW = {
        "iw": "he",
        "ji": "yi",
        "in": "id",
    };
    const _showAssetsWarningOnce$1 = (localeId) => {
        if (warningShown$1) {
            return;
        }
        console.warn(`[LocaleData] Supported locale "${localeId}" not configured, import the "Assets.js" module from the webcomponents package you are using.`); /* eslint-disable-line */
        warningShown$1 = true;
    };
    const calcLocale = (language, region, script) => {
        // normalize language and handle special cases
        language = (language && M_ISO639_OLD_TO_NEW[language]) || language;
        // Special case 1: in an SAP context, the inclusive language code "no" always means Norwegian Bokmal ("nb")
        if (language === "no") {
            language = "nb";
        }
        // Special case 2: for Chinese, derive a default region from the script (this behavior is inherited from Java)
        if (language === "zh" && !region) {
            if (script === "Hans") {
                region = "CN";
            }
            else if (script === "Hant") {
                region = "TW";
            }
        }
        // Special case 3: for Serbian, there are cyrillic and latin scripts, "sh" and "sr-latn" map to "latin", "sr" maps to cyrillic.
        if (language === "sh" || (language === "sr" && script === "Latn")) {
            language = "sr";
            region = "Latn";
        }
        // try language + region
        let localeId = `${language}_${region}`;
        if (Boot.SUPPORTED_LOCALES.includes(localeId)) {
            if (loaders$1.has(localeId)) {
                // supported and has loader
                return localeId;
            }
            // supported, no loader - fallback to default and warn
            _showAssetsWarningOnce$1(localeId);
            return Boot.DEFAULT_LOCALE;
        }
        // not supported, try language only
        localeId = language;
        if (Boot.SUPPORTED_LOCALES.includes(localeId)) {
            if (loaders$1.has(localeId)) {
                // supported and has loader
                return localeId;
            }
            // supported, no loader - fallback to default and warn
            _showAssetsWarningOnce$1(localeId);
            return Boot.DEFAULT_LOCALE;
        }
        // not supported - fallback to default locale
        return Boot.DEFAULT_LOCALE;
    };
    // internal set data
    const setLocaleData = (localeId, content) => {
        localeDataMap.set(localeId, content);
    };
    // load bundle over the network once
    const _loadCldrOnce = (localeId) => {
        if (!cldrPromises.get(localeId)) {
            const loadCldr = loaders$1.get(localeId);
            if (!loadCldr) {
                throw new Error(`CLDR data for locale ${localeId} is not loaded!`);
            }
            cldrPromises.set(localeId, loadCldr(localeId));
        }
        return cldrPromises.get(localeId);
    };
    // external getAsync
    const fetchCldr = async (language, region, script) => {
        const localeId = calcLocale(language, region, script);
        // reuse OpenUI5 CLDR if present
        const openUI5Support = Boot.getFeature("OpenUI5Support");
        if (openUI5Support) {
            const cldrContent = openUI5Support.getLocaleDataObject();
            if (cldrContent) {
                // only if openui5 actually returned valid content
                setLocaleData(localeId, cldrContent);
                return;
            }
        }
        // fetch it
        try {
            const cldrContent = await _loadCldrOnce(localeId);
            setLocaleData(localeId, cldrContent);
        }
        catch (error) {
            const e = error;
            if (!reportedErrors$1.has(e.message)) {
                reportedErrors$1.add(e.message);
                console.error(e.message); /* eslint-disable-line */
            }
        }
    };
    const registerLocaleDataLoader = (localeId, loader) => {
        loaders$1.set(localeId, loader);
    };
    // register default loader for "en" from ui5 CDN (dev workflow without assets)
    registerLocaleDataLoader("en", async () => {
        const cldrContent = await fetch(`https://sdk.openui5.org/1.120.17/resources/sap/ui/core/cldr/en.json`);
        return cldrContent.json();
    });
    // When the language changes dynamically (the user calls setLanguage),
    // re-fetch the required CDRD data.
    attachLanguageChange(() => {
        const locale = getLocale();
        return fetchCldr(locale.getLanguage(), locale.getRegion(), locale.getScript());
    });

    const localeRegEX = /^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
    const SAPSupportabilityLocales = /(?:^|-)(saptrc|sappsd)(?:-|$)/i;
    /* Map for old language names for a few ISO639 codes. */
    const M_ISO639_NEW_TO_OLD = {
        "he": "iw",
        "yi": "ji",
        "nb": "no",
        "sr": "sh",
    };
    /**
     * Normalizes the given locale in BCP-47 syntax.
     * @param {string} locale locale to normalize
     * @returns {string} Normalized locale, "undefined" if the locale can't be normalized or the default locale, if no locale provided.
     */
    const normalizeLocale = (locale) => {
        let m;
        if (!locale) {
            return Boot.DEFAULT_LOCALE;
        }
        if (typeof locale === "string" && (m = localeRegEX.exec(locale.replace(/_/g, "-")))) { /* eslint-disable-line */
            let language = m[1].toLowerCase();
            let region = m[3] ? m[3].toUpperCase() : undefined;
            const script = m[2] ? m[2].toLowerCase() : undefined;
            const variants = m[4] ? m[4].slice(1) : undefined;
            const isPrivate = m[6];
            language = M_ISO639_NEW_TO_OLD[language] || language;
            // recognize and convert special SAP supportability locales (overwrites m[]!)
            if ((isPrivate && (m = SAPSupportabilityLocales.exec(isPrivate))) /* eslint-disable-line */ ||
                (variants && (m = SAPSupportabilityLocales.exec(variants)))) { /* eslint-disable-line */
                return `en_US_${m[1].toLowerCase()}`; // for now enforce en_US (agreed with SAP SLS)
            }
            // Chinese: when no region but a script is specified, use default region for each script
            if (language === "zh" && !region) {
                if (script === "hans") {
                    region = "CN";
                }
                else if (script === "hant") {
                    region = "TW";
                }
            }
            return language + (region ? "_" + region + (variants ? "_" + variants.replace("-", "_") : "") : ""); /* eslint-disable-line */
        }
        return Boot.DEFAULT_LOCALE;
    };

    /**
     * Calculates the next fallback locale for the given locale.
     *
     * @param {string} locale Locale string in Java format (underscores) or null
     * @returns {string} Next fallback Locale or "en" if no fallbacks found.
     */
    const nextFallbackLocale = (locale) => {
        if (!locale) {
            return Boot.DEFAULT_LOCALE;
        }
        if (locale === "zh_HK") {
            return "zh_TW";
        }
        // if there are multiple segments (separated by underscores), remove the last one
        const p = locale.lastIndexOf("_");
        if (p >= 0) {
            return locale.slice(0, p);
        }
        // for any language but the default, fallback to the default first before falling back to the 'raw' language (empty string)
        return locale !== Boot.DEFAULT_LOCALE ? Boot.DEFAULT_LOCALE : "";
    };

    // contains package names for which the warning has been shown
    const warningShown = new Set();
    const reportedErrors = new Set();
    const bundleData = new Map();
    const bundlePromises = new Map();
    const loaders = new Map();
    /**
     * Registers i18n loader function for given package and locale.
     *
     * @public
     * @param {string} packageName for which package this loader can fetch data
     * @param {string} localeId locale that this loader can handle
     * @param {function} loader async function that will be passed a localeId and should return a JSON object
     */
    const registerI18nLoader = (packageName, localeId, loader) => {
        // register loader by key
        const bundleKey = `${packageName}/${localeId}`;
        loaders.set(bundleKey, loader);
    };
    const _setI18nBundleData = (packageName, data) => {
        bundleData.set(packageName, data);
    };
    const getI18nBundleData = (packageName) => {
        return bundleData.get(packageName);
    };
    const _hasLoader = (packageName, localeId) => {
        const bundleKey = `${packageName}/${localeId}`;
        return loaders.has(bundleKey);
    };
    // load bundle over the network once
    const _loadMessageBundleOnce = (packageName, localeId) => {
        const bundleKey = `${packageName}/${localeId}`;
        const loadMessageBundle = loaders.get(bundleKey);
        if (loadMessageBundle && !bundlePromises.get(bundleKey)) {
            bundlePromises.set(bundleKey, loadMessageBundle(localeId));
        }
        return bundlePromises.get(bundleKey); // Investigate if i18n loader exists and this won't return undefined.
    };
    const _showAssetsWarningOnce = (packageName) => {
        if (!warningShown.has(packageName)) {
            console.warn(`[${packageName}]: Message bundle assets are not configured. Falling back to English texts.`, /* eslint-disable-line */ ` Add \`import "${packageName}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`); /* eslint-disable-line */
            warningShown.add(packageName);
        }
    };
    const useFallbackBundle = (packageName, localeId) => {
        return localeId !== Boot.DEFAULT_LANGUAGE && !_hasLoader(packageName, localeId);
    };
    /**
     * This method preforms the asynchronous task of fetching the actual text resources. It will fetch
     * each text resource over the network once (even for multiple calls to the same method).
     * It should be fully finished before the i18nBundle class is created in the webcomponents.
     * This method uses the bundle URLs that are populated by the `registerI18nBundle` method.
     * To simplify the usage, the synchronization of both methods happens internally for the same `bundleId`
     * @param {packageName} packageName the NPM package name
     * @public
     */
    const fetchI18nBundle = async (packageName) => {
        const language = getLocale().getLanguage();
        const region = getLocale().getRegion();
        const variant = getLocale().getVariant();
        let localeId = language + (region ? `-${region}` : ``) + (variant ? `-${variant}` : ``);
        if (useFallbackBundle(packageName, localeId)) {
            localeId = normalizeLocale(localeId);
            while (useFallbackBundle(packageName, localeId)) {
                localeId = nextFallbackLocale(localeId);
            }
        }
        // use default language unless configured to always fetch it from the network
        const fetchDefaultLanguage = getFetchDefaultLanguage();
        if (localeId === Boot.DEFAULT_LANGUAGE && !fetchDefaultLanguage) {
            _setI18nBundleData(packageName, null); // reset for the default language (if data was set for a previous language)
            return;
        }
        if (!_hasLoader(packageName, localeId)) {
            _showAssetsWarningOnce(packageName);
            return;
        }
        try {
            const data = await _loadMessageBundleOnce(packageName, localeId);
            _setI18nBundleData(packageName, data);
        }
        catch (error) {
            const e = error;
            if (!reportedErrors.has(e.message)) {
                reportedErrors.add(e.message);
                console.error(e.message); /* eslint-disable-line */
            }
        }
    };
    // When the language changes dynamically (the user calls setLanguage), re-fetch all previously fetched bundles
    attachLanguageChange((lang /* eslint-disable-line */) => {
        const allPackages = [...bundleData.keys()];
        return Promise.all(allPackages.map(fetchI18nBundle));
    });

    exports.fetchCldr = fetchCldr;
    exports.fetchI18nBundle = fetchI18nBundle;
    exports.getI18nBundleData = getI18nBundleData;
    exports.getLocale = getLocale;
    exports.registerI18nLoader = registerI18nLoader;
    exports.registerLocaleDataLoader = registerLocaleDataLoader;

}));
