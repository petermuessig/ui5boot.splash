sap.ui.define(['require', 'exports', 'ui5boot/splash/thirdparty/i18n', 'ui5boot/splash/thirdparty/Boot'], (function (require, exports, i18n, Boot) { 'use strict';

    // @ts-nocheck
    const availableLocales = ["ar", "ar_EG", "ar_SA", "bg", "ca", "cnr", "cs", "da", "de", "de_AT", "de_CH", "el", "el_CY", "en", "en_AU", "en_GB", "en_HK", "en_IE", "en_IN", "en_NZ", "en_PG", "en_SG", "en_ZA", "es", "es_AR", "es_BO", "es_CL", "es_CO", "es_MX", "es_PE", "es_UY", "es_VE", "et", "fa", "fi", "fr", "fr_BE", "fr_CA", "fr_CH", "fr_LU", "he", "hi", "hr", "hu", "id", "it", "it_CH", "ja", "kk", "ko", "lt", "lv", "ms", "mk", "nb", "nl", "nl_BE", "pl", "pt", "pt_PT", "ro", "ru", "ru_UA", "sk", "sl", "sr", "sr_Latn", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_HK", "zh_SG", "zh_TW"];
    const importCldrJson = async (localeId) => {
        switch (localeId) {
            case "ar": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ar" */ 'ui5boot/splash/thirdparty/_dynamics/ar'], resolve, reject); })).default;
            case "ar_EG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ar_EG" */ 'ui5boot/splash/thirdparty/_dynamics/ar_EG'], resolve, reject); })).default;
            case "ar_SA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ar_SA" */ 'ui5boot/splash/thirdparty/_dynamics/ar_SA'], resolve, reject); })).default;
            case "bg": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-bg" */ 'ui5boot/splash/thirdparty/_dynamics/bg'], resolve, reject); })).default;
            case "ca": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ca" */ 'ui5boot/splash/thirdparty/_dynamics/ca'], resolve, reject); })).default;
            case "cnr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-cnr" */ 'ui5boot/splash/thirdparty/_dynamics/cnr'], resolve, reject); })).default;
            case "cs": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-cs" */ 'ui5boot/splash/thirdparty/_dynamics/cs'], resolve, reject); })).default;
            case "da": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-da" */ 'ui5boot/splash/thirdparty/_dynamics/da'], resolve, reject); })).default;
            case "de": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-de" */ 'ui5boot/splash/thirdparty/_dynamics/de'], resolve, reject); })).default;
            case "de_AT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-de_AT" */ 'ui5boot/splash/thirdparty/_dynamics/de_AT'], resolve, reject); })).default;
            case "de_CH": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-de_CH" */ 'ui5boot/splash/thirdparty/_dynamics/de_CH'], resolve, reject); })).default;
            case "el": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-el" */ 'ui5boot/splash/thirdparty/_dynamics/el'], resolve, reject); })).default;
            case "el_CY": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-el_CY" */ 'ui5boot/splash/thirdparty/_dynamics/el_CY'], resolve, reject); })).default;
            case "en": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en" */ 'ui5boot/splash/thirdparty/_dynamics/en'], resolve, reject); })).default;
            case "en_AU": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_AU" */ 'ui5boot/splash/thirdparty/_dynamics/en_AU'], resolve, reject); })).default;
            case "en_GB": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_GB" */ 'ui5boot/splash/thirdparty/_dynamics/en_GB'], resolve, reject); })).default;
            case "en_HK": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_HK" */ 'ui5boot/splash/thirdparty/_dynamics/en_HK'], resolve, reject); })).default;
            case "en_IE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_IE" */ 'ui5boot/splash/thirdparty/_dynamics/en_IE'], resolve, reject); })).default;
            case "en_IN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_IN" */ 'ui5boot/splash/thirdparty/_dynamics/en_IN'], resolve, reject); })).default;
            case "en_NZ": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_NZ" */ 'ui5boot/splash/thirdparty/_dynamics/en_NZ'], resolve, reject); })).default;
            case "en_PG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_PG" */ 'ui5boot/splash/thirdparty/_dynamics/en_PG'], resolve, reject); })).default;
            case "en_SG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_SG" */ 'ui5boot/splash/thirdparty/_dynamics/en_SG'], resolve, reject); })).default;
            case "en_ZA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_ZA" */ 'ui5boot/splash/thirdparty/_dynamics/en_ZA'], resolve, reject); })).default;
            case "es": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es" */ 'ui5boot/splash/thirdparty/_dynamics/es'], resolve, reject); })).default;
            case "es_AR": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_AR" */ 'ui5boot/splash/thirdparty/_dynamics/es_AR'], resolve, reject); })).default;
            case "es_BO": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_BO" */ 'ui5boot/splash/thirdparty/_dynamics/es_BO'], resolve, reject); })).default;
            case "es_CL": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_CL" */ 'ui5boot/splash/thirdparty/_dynamics/es_CL'], resolve, reject); })).default;
            case "es_CO": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_CO" */ 'ui5boot/splash/thirdparty/_dynamics/es_CO'], resolve, reject); })).default;
            case "es_MX": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_MX" */ 'ui5boot/splash/thirdparty/_dynamics/es_MX'], resolve, reject); })).default;
            case "es_PE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_PE" */ 'ui5boot/splash/thirdparty/_dynamics/es_PE'], resolve, reject); })).default;
            case "es_UY": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_UY" */ 'ui5boot/splash/thirdparty/_dynamics/es_UY'], resolve, reject); })).default;
            case "es_VE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_VE" */ 'ui5boot/splash/thirdparty/_dynamics/es_VE'], resolve, reject); })).default;
            case "et": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-et" */ 'ui5boot/splash/thirdparty/_dynamics/et'], resolve, reject); })).default;
            case "fa": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fa" */ 'ui5boot/splash/thirdparty/_dynamics/fa'], resolve, reject); })).default;
            case "fi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fi" */ 'ui5boot/splash/thirdparty/_dynamics/fi'], resolve, reject); })).default;
            case "fr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr" */ 'ui5boot/splash/thirdparty/_dynamics/fr'], resolve, reject); })).default;
            case "fr_BE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_BE" */ 'ui5boot/splash/thirdparty/_dynamics/fr_BE'], resolve, reject); })).default;
            case "fr_CA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_CA" */ 'ui5boot/splash/thirdparty/_dynamics/fr_CA'], resolve, reject); })).default;
            case "fr_CH": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_CH" */ 'ui5boot/splash/thirdparty/_dynamics/fr_CH'], resolve, reject); })).default;
            case "fr_LU": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_LU" */ 'ui5boot/splash/thirdparty/_dynamics/fr_LU'], resolve, reject); })).default;
            case "he": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-he" */ 'ui5boot/splash/thirdparty/_dynamics/he'], resolve, reject); })).default;
            case "hi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-hi" */ 'ui5boot/splash/thirdparty/_dynamics/hi'], resolve, reject); })).default;
            case "hr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-hr" */ 'ui5boot/splash/thirdparty/_dynamics/hr'], resolve, reject); })).default;
            case "hu": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-hu" */ 'ui5boot/splash/thirdparty/_dynamics/hu'], resolve, reject); })).default;
            case "id": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-id" */ 'ui5boot/splash/thirdparty/_dynamics/id'], resolve, reject); })).default;
            case "it": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-it" */ 'ui5boot/splash/thirdparty/_dynamics/it'], resolve, reject); })).default;
            case "it_CH": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-it_CH" */ 'ui5boot/splash/thirdparty/_dynamics/it_CH'], resolve, reject); })).default;
            case "ja": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ja" */ 'ui5boot/splash/thirdparty/_dynamics/ja'], resolve, reject); })).default;
            case "kk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-kk" */ 'ui5boot/splash/thirdparty/_dynamics/kk'], resolve, reject); })).default;
            case "ko": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ko" */ 'ui5boot/splash/thirdparty/_dynamics/ko'], resolve, reject); })).default;
            case "lt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-lt" */ 'ui5boot/splash/thirdparty/_dynamics/lt'], resolve, reject); })).default;
            case "lv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-lv" */ 'ui5boot/splash/thirdparty/_dynamics/lv'], resolve, reject); })).default;
            case "ms": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ms" */ 'ui5boot/splash/thirdparty/_dynamics/ms'], resolve, reject); })).default;
            case "mk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-mk" */ 'ui5boot/splash/thirdparty/_dynamics/mk'], resolve, reject); })).default;
            case "nb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-nb" */ 'ui5boot/splash/thirdparty/_dynamics/nb'], resolve, reject); })).default;
            case "nl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-nl" */ 'ui5boot/splash/thirdparty/_dynamics/nl'], resolve, reject); })).default;
            case "nl_BE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-nl_BE" */ 'ui5boot/splash/thirdparty/_dynamics/nl_BE'], resolve, reject); })).default;
            case "pl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-pl" */ 'ui5boot/splash/thirdparty/_dynamics/pl'], resolve, reject); })).default;
            case "pt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-pt" */ 'ui5boot/splash/thirdparty/_dynamics/pt'], resolve, reject); })).default;
            case "pt_PT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-pt_PT" */ 'ui5boot/splash/thirdparty/_dynamics/pt_PT'], resolve, reject); })).default;
            case "ro": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ro" */ 'ui5boot/splash/thirdparty/_dynamics/ro'], resolve, reject); })).default;
            case "ru": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ru" */ 'ui5boot/splash/thirdparty/_dynamics/ru'], resolve, reject); })).default;
            case "ru_UA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ru_UA" */ 'ui5boot/splash/thirdparty/_dynamics/ru_UA'], resolve, reject); })).default;
            case "sk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sk" */ 'ui5boot/splash/thirdparty/_dynamics/sk'], resolve, reject); })).default;
            case "sl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sl" */ 'ui5boot/splash/thirdparty/_dynamics/sl'], resolve, reject); })).default;
            case "sr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sr" */ 'ui5boot/splash/thirdparty/_dynamics/sr'], resolve, reject); })).default;
            case "sr_Latn": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sr_Latn" */ 'ui5boot/splash/thirdparty/_dynamics/sr_Latn'], resolve, reject); })).default;
            case "sv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sv" */ 'ui5boot/splash/thirdparty/_dynamics/sv'], resolve, reject); })).default;
            case "th": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-th" */ 'ui5boot/splash/thirdparty/_dynamics/th'], resolve, reject); })).default;
            case "tr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-tr" */ 'ui5boot/splash/thirdparty/_dynamics/tr'], resolve, reject); })).default;
            case "uk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-uk" */ 'ui5boot/splash/thirdparty/_dynamics/uk'], resolve, reject); })).default;
            case "vi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-vi" */ 'ui5boot/splash/thirdparty/_dynamics/vi'], resolve, reject); })).default;
            case "zh_CN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_CN" */ 'ui5boot/splash/thirdparty/_dynamics/zh_CN'], resolve, reject); })).default;
            case "zh_HK": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_HK" */ 'ui5boot/splash/thirdparty/_dynamics/zh_HK'], resolve, reject); })).default;
            case "zh_SG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_SG" */ 'ui5boot/splash/thirdparty/_dynamics/zh_SG'], resolve, reject); })).default;
            case "zh_TW": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_TW" */ 'ui5boot/splash/thirdparty/_dynamics/zh_TW'], resolve, reject); })).default;
            default: throw "unknown locale";
        }
    };
    const importAndCheck$2 = async (localeId) => {
        const data = await importCldrJson(localeId);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[LocaleData] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    availableLocales.forEach(localeId => i18n.registerLocaleDataLoader(localeId, importAndCheck$2));

    // @ts-nocheck
    const loadThemeProperties$1 = async (themeName) => {
        switch (themeName) {
            case "sap_fiori_3": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css'], resolve, reject); })).default;
            case "sap_fiori_3_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_dark-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css2'], resolve, reject); })).default;
            case "sap_fiori_3_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_hcb-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css3'], resolve, reject); })).default;
            case "sap_fiori_3_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_hcw-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css4'], resolve, reject); })).default;
            case "sap_horizon": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css5'], resolve, reject); })).default;
            case "sap_horizon_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_dark-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css6'], resolve, reject); })).default;
            case "sap_horizon_dark_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_dark_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css7'], resolve, reject); })).default;
            case "sap_horizon_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css8'], resolve, reject); })).default;
            case "sap_horizon_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcb-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css9'], resolve, reject); })).default;
            case "sap_horizon_hcb_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcb_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css10'], resolve, reject); })).default;
            case "sap_horizon_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcw-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css11'], resolve, reject); })).default;
            case "sap_horizon_hcw_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcw_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css12'], resolve, reject); })).default;
            default: throw "unknown theme";
        }
    };
    const loadAndCheck$1 = async (themeName) => {
        const data = await loadThemeProperties$1(themeName);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_dark_exp", "sap_horizon_exp", "sap_horizon_hcb", "sap_horizon_hcb_exp", "sap_horizon_hcw", "sap_horizon_hcw_exp"]
        .forEach(themeName => Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", themeName, loadAndCheck$1));

    // @ts-nocheck
    const importMessageBundle$1 = async (localeId) => {
        switch (localeId) {
            case "ar": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ar" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ar'], resolve, reject); })).default;
            case "bg": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-bg" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_bg'], resolve, reject); })).default;
            case "ca": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ca" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ca'], resolve, reject); })).default;
            case "cnr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cnr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_cnr'], resolve, reject); })).default;
            case "cs": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cs" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_cs'], resolve, reject); })).default;
            case "cy": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cy" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_cy'], resolve, reject); })).default;
            case "da": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-da" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_da'], resolve, reject); })).default;
            case "de": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-de" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_de'], resolve, reject); })).default;
            case "el": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-el" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_el'], resolve, reject); })).default;
            case "en": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en'], resolve, reject); })).default;
            case "en_GB": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_GB" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_GB'], resolve, reject); })).default;
            case "en_US_sappsd": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_sappsd" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_US_sappsd'], resolve, reject); })).default;
            case "en_US_saprigi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_saprigi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_US_saprigi'], resolve, reject); })).default;
            case "en_US_saptrc": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_saptrc" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_US_saptrc'], resolve, reject); })).default;
            case "es": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-es" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_es'], resolve, reject); })).default;
            case "es_MX": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-es_MX" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_es_MX'], resolve, reject); })).default;
            case "et": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-et" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_et'], resolve, reject); })).default;
            case "fi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_fi'], resolve, reject); })).default;
            case "fr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_fr'], resolve, reject); })).default;
            case "fr_CA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fr_CA" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_fr_CA'], resolve, reject); })).default;
            case "hi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_hi'], resolve, reject); })).default;
            case "hr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_hr'], resolve, reject); })).default;
            case "hu": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hu" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_hu'], resolve, reject); })).default;
            case "in": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-in" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_in'], resolve, reject); })).default;
            case "it": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-it" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_it'], resolve, reject); })).default;
            case "iw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-iw" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_iw'], resolve, reject); })).default;
            case "ja": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ja" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ja'], resolve, reject); })).default;
            case "kk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-kk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_kk'], resolve, reject); })).default;
            case "ko": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ko" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ko'], resolve, reject); })).default;
            case "lt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-lt" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_lt'], resolve, reject); })).default;
            case "lv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-lv" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_lv'], resolve, reject); })).default;
            case "mk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-mk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_mk'], resolve, reject); })).default;
            case "ms": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ms" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ms'], resolve, reject); })).default;
            case "nl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-nl" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_nl'], resolve, reject); })).default;
            case "no": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-no" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_no'], resolve, reject); })).default;
            case "pl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pl" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_pl'], resolve, reject); })).default;
            case "pt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pt" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_pt'], resolve, reject); })).default;
            case "pt_PT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pt_PT" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_pt_PT'], resolve, reject); })).default;
            case "ro": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ro" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ro'], resolve, reject); })).default;
            case "ru": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ru" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ru'], resolve, reject); })).default;
            case "sh": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sh" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sh'], resolve, reject); })).default;
            case "sk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sk'], resolve, reject); })).default;
            case "sl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sl" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sl'], resolve, reject); })).default;
            case "sr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sr'], resolve, reject); })).default;
            case "sv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sv" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sv'], resolve, reject); })).default;
            case "th": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-th" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_th'], resolve, reject); })).default;
            case "tr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-tr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_tr'], resolve, reject); })).default;
            case "uk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-uk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_uk'], resolve, reject); })).default;
            case "vi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-vi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_vi'], resolve, reject); })).default;
            case "zh_CN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-zh_CN" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_zh_CN'], resolve, reject); })).default;
            case "zh_TW": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-zh_TW" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_zh_TW'], resolve, reject); })).default;
            default: throw "unknown locale";
        }
    };
    const importAndCheck$1 = async (localeId) => {
        const data = await importMessageBundle$1(localeId);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    const localeIds$1 = ["ar",
        "bg",
        "ca",
        "cnr",
        "cs",
        "cy",
        "da",
        "de",
        "el",
        "en",
        "en_GB",
        "en_US_sappsd",
        "en_US_saprigi",
        "en_US_saptrc",
        "es",
        "es_MX",
        "et",
        "fi",
        "fr",
        "fr_CA",
        "hi",
        "hr",
        "hu",
        "in",
        "it",
        "iw",
        "ja",
        "kk",
        "ko",
        "lt",
        "lv",
        "mk",
        "ms",
        "nl",
        "no",
        "pl",
        "pt",
        "pt_PT",
        "ro",
        "ru",
        "sh",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh_CN",
        "zh_TW",];
    localeIds$1.forEach(localeId => {
        i18n.registerI18nLoader("@ui5/webcomponents-icons", localeId, importAndCheck$1);
    });

    // @ts-nocheck
    const loadThemeProperties = async (themeName) => {
        switch (themeName) {
            case "sap_fiori_3": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css13'], resolve, reject); })).default;
            case "sap_fiori_3_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3_dark-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css14'], resolve, reject); })).default;
            case "sap_fiori_3_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3_hcb-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css15'], resolve, reject); })).default;
            case "sap_fiori_3_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3_hcw-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css16'], resolve, reject); })).default;
            case "sap_horizon": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css17'], resolve, reject); })).default;
            case "sap_horizon_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_dark-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css18'], resolve, reject); })).default;
            case "sap_horizon_dark_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_dark_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css19'], resolve, reject); })).default;
            case "sap_horizon_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css20'], resolve, reject); })).default;
            case "sap_horizon_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_hcb-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css21'], resolve, reject); })).default;
            case "sap_horizon_hcb_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_hcb_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css22'], resolve, reject); })).default;
            case "sap_horizon_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_hcw-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css23'], resolve, reject); })).default;
            case "sap_horizon_hcw_exp": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_hcw_exp-parameters-bundle" */ 'ui5boot/splash/thirdparty/_dynamics/parameters-bundle.css24'], resolve, reject); })).default;
            default: throw "unknown theme";
        }
    };
    const loadAndCheck = async (themeName) => {
        const data = await loadThemeProperties(themeName);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_dark_exp", "sap_horizon_exp", "sap_horizon_hcb", "sap_horizon_hcb_exp", "sap_horizon_hcw", "sap_horizon_hcw_exp"]
        .forEach(themeName => Boot.registerThemePropertiesLoader("@ui5/webcomponents", themeName, loadAndCheck));

    // @ts-nocheck
    const importMessageBundle = async (localeId) => {
        switch (localeId) {
            case "ar": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ar" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ar2'], resolve, reject); })).default;
            case "bg": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-bg" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_bg2'], resolve, reject); })).default;
            case "ca": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ca" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ca2'], resolve, reject); })).default;
            case "cnr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-cnr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_cnr2'], resolve, reject); })).default;
            case "cs": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-cs" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_cs2'], resolve, reject); })).default;
            case "cy": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-cy" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_cy2'], resolve, reject); })).default;
            case "da": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-da" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_da2'], resolve, reject); })).default;
            case "de": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-de" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_de2'], resolve, reject); })).default;
            case "el": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-el" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_el2'], resolve, reject); })).default;
            case "en": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en2'], resolve, reject); })).default;
            case "en_GB": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_GB" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_GB2'], resolve, reject); })).default;
            case "en_US_sappsd": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_US_sappsd" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_US_sappsd2'], resolve, reject); })).default;
            case "en_US_saprigi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_US_saprigi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_US_saprigi2'], resolve, reject); })).default;
            case "en_US_saptrc": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_US_saptrc" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_en_US_saptrc2'], resolve, reject); })).default;
            case "es": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-es" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_es2'], resolve, reject); })).default;
            case "es_MX": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-es_MX" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_es_MX2'], resolve, reject); })).default;
            case "et": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-et" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_et2'], resolve, reject); })).default;
            case "fi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-fi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_fi2'], resolve, reject); })).default;
            case "fr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-fr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_fr2'], resolve, reject); })).default;
            case "fr_CA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-fr_CA" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_fr_CA2'], resolve, reject); })).default;
            case "hi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-hi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_hi2'], resolve, reject); })).default;
            case "hr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-hr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_hr2'], resolve, reject); })).default;
            case "hu": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-hu" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_hu2'], resolve, reject); })).default;
            case "in": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-in" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_in2'], resolve, reject); })).default;
            case "it": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-it" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_it2'], resolve, reject); })).default;
            case "iw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-iw" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_iw2'], resolve, reject); })).default;
            case "ja": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ja" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ja2'], resolve, reject); })).default;
            case "kk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-kk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_kk2'], resolve, reject); })).default;
            case "ko": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ko" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ko2'], resolve, reject); })).default;
            case "lt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-lt" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_lt2'], resolve, reject); })).default;
            case "lv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-lv" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_lv2'], resolve, reject); })).default;
            case "mk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-mk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_mk2'], resolve, reject); })).default;
            case "ms": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ms" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ms2'], resolve, reject); })).default;
            case "nl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-nl" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_nl2'], resolve, reject); })).default;
            case "no": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-no" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_no2'], resolve, reject); })).default;
            case "pl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-pl" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_pl2'], resolve, reject); })).default;
            case "pt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-pt" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_pt2'], resolve, reject); })).default;
            case "pt_PT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-pt_PT" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_pt_PT2'], resolve, reject); })).default;
            case "ro": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ro" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ro2'], resolve, reject); })).default;
            case "ru": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ru" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_ru2'], resolve, reject); })).default;
            case "sh": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sh" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sh2'], resolve, reject); })).default;
            case "sk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sk2'], resolve, reject); })).default;
            case "sl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sl" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sl2'], resolve, reject); })).default;
            case "sr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sr2'], resolve, reject); })).default;
            case "sv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sv" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_sv2'], resolve, reject); })).default;
            case "th": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-th" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_th2'], resolve, reject); })).default;
            case "tr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-tr" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_tr2'], resolve, reject); })).default;
            case "uk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-uk" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_uk2'], resolve, reject); })).default;
            case "vi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-vi" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_vi2'], resolve, reject); })).default;
            case "zh_CN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-zh_CN" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_zh_CN2'], resolve, reject); })).default;
            case "zh_TW": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-zh_TW" */ 'ui5boot/splash/thirdparty/_dynamics/messagebundle_zh_TW2'], resolve, reject); })).default;
            default: throw "unknown locale";
        }
    };
    const importAndCheck = async (localeId) => {
        const data = await importMessageBundle(localeId);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    const localeIds = ["ar",
        "bg",
        "ca",
        "cnr",
        "cs",
        "cy",
        "da",
        "de",
        "el",
        "en",
        "en_GB",
        "en_US_sappsd",
        "en_US_saprigi",
        "en_US_saptrc",
        "es",
        "es_MX",
        "et",
        "fi",
        "fr",
        "fr_CA",
        "hi",
        "hr",
        "hu",
        "in",
        "it",
        "iw",
        "ja",
        "kk",
        "ko",
        "lt",
        "lv",
        "mk",
        "ms",
        "nl",
        "no",
        "pl",
        "pt",
        "pt_PT",
        "ro",
        "ru",
        "sh",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh_CN",
        "zh_TW",];
    localeIds.forEach(localeId => {
        i18n.registerI18nLoader("@ui5/webcomponents", localeId, importAndCheck);
    });

    const __esModule = true;

    exports.__esModule = __esModule;

}));
