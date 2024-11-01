sap.ui.define(['exports', 'sap/base/strings/hyphenate', 'sap/ui/core/webc/WebComponentRenderer', 'ui5boot/splash/thirdparty/Boot', 'sap/ui/base/DataType'], (function (exports, hyphenate, WebComponentRenderer, Boot, DataType) { 'use strict';

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t;const i=window,s$1=i.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,u$1=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$1+w):s+n$1+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$1)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$1()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$1());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$1()),this.k(u$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j={O:o$1,P:n$1,A:l$1,C:1,M:V,L:M,R:v,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=Symbol.for(""),l=t=>{if((null==t?void 0:t.r)===e)return null==t?void 0:t._$litStatic$},o=t=>({_$litStatic$:t,r:e}),s=new Map,a=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l(a));)c+=i+r[++$],f=!0;$!==o&&u.push(a),n.push(c),$++;}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s.get(t))&&(n.raw=n,s.set(t,r=n)),e=u;}return t(r,...e)},n=a(x),u=a(b);

    class LitStatic {
    }
    LitStatic.html = n;
    LitStatic.svg = u;
    LitStatic.unsafeStatic = o;
    Boot.registerFeature("LitStatic", LitStatic);

    const patchPatcher = (Patcher) => {
        const origOpenEnd = Patcher.prototype.openEnd;
        Patcher.prototype.openEnd = function openEnd() {
            if (this._mAttributes.popover) {
                delete this._mAttributes.popover; // The "popover" attribute will be managed externally, don't let Patcher remove it
            }
            return origOpenEnd.apply(this);
        };
    };

    const openNativePopover = (domRef) => {
        domRef.setAttribute("popover", "manual");
        domRef.showPopover();
    };
    const closeNativePopover = (domRef) => {
        if (domRef.hasAttribute("popover")) {
            domRef.hidePopover();
            domRef.removeAttribute("popover");
        }
    };
    const patchOpen = (Popup) => {
        const origOpen = Popup.prototype.open;
        Popup.prototype.open = function open(...args) {
            origOpen.apply(this, args); // call open first to initiate opening
            const topLayerAlreadyInUse = !!document.body.querySelector(":popover-open"); // check if there is already something in the top layer
            const openingInitiated = ["OPENING", "OPEN"].includes(this.getOpenState());
            if (openingInitiated && topLayerAlreadyInUse) {
                const element = this.getContent();
                if (element) {
                    const domRef = element instanceof HTMLElement ? element : element?.getDomRef();
                    if (domRef) {
                        openNativePopover(domRef);
                    }
                }
            }
        };
    };
    const patchClosed = (Popup) => {
        const _origClosed = Popup.prototype._closed;
        Popup.prototype._closed = function _closed(...args) {
            const element = this.getContent();
            const domRef = element instanceof HTMLElement ? element : element?.getDomRef();
            _origClosed.apply(this, args); // only then call _close
            if (domRef) {
                closeNativePopover(domRef); // unset the popover attribute and close the native popover, but only if still in DOM
            }
        };
    };
    const patchFocusEvent = (Popup) => {
        const origFocusEvent = Popup.prototype.onFocusEvent;
        Popup.prototype.onFocusEvent = function onFocusEvent(e) {
            const isTypeFocus = e.type === "focus" || e.type === "activate";
            const target = e.target;
            if (!isTypeFocus || !target.closest("[ui5-popover],[ui5-responsive-popover],[ui5-dialog]")) {
                origFocusEvent.call(this, e);
            }
        };
    };
    const createGlobalStyles = () => {
        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(`.sapMPopup-CTX:popover-open { inset: unset; }`);
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
    };
    const patchPopup = (Popup) => {
        patchOpen(Popup); // Popup.prototype.open
        patchClosed(Popup); // Popup.prototype._closed
        createGlobalStyles(); // Ensures correct popover positioning by OpenUI5 (otherwise 0,0 is the center of the screen)
        patchFocusEvent(Popup); // Popup.prototype.onFocusEvent
    };

    class OpenUI5Support {
        static isAtLeastVersion116() {
            if (!window.sap.ui.version) {
                return true; // sap.ui.version will be removed in newer OpenUI5 versions
            }
            const version = window.sap.ui.version;
            const parts = version.split(".");
            if (!parts || parts.length < 2) {
                return false;
            }
            return parseInt(parts[0]) > 1 || parseInt(parts[1]) >= 116;
        }
        static isOpenUI5Detected() {
            return typeof window.sap?.ui?.require === "function";
        }
        static init() {
            if (!OpenUI5Support.isOpenUI5Detected()) {
                return Promise.resolve();
            }
            return new Promise(resolve => {
                window.sap.ui.require(["sap/ui/core/Core"], async (Core) => {
                    const callback = () => {
                        let deps = ["sap/ui/core/Popup", "sap/ui/core/Patcher", "sap/ui/core/LocaleData"];
                        if (OpenUI5Support.isAtLeastVersion116()) { // for versions since 1.116.0 and onward, use the modular core
                            deps = [
                                ...deps,
                                "sap/base/i18n/Formatting",
                                "sap/base/i18n/Localization",
                                "sap/ui/core/ControlBehavior",
                                "sap/ui/core/Theming",
                                "sap/ui/core/date/CalendarUtils",
                            ];
                        }
                        window.sap.ui.require(deps, (Popup, Patcher) => {
                            patchPatcher(Patcher);
                            patchPopup(Popup);
                            resolve();
                        });
                    };
                    if (OpenUI5Support.isAtLeastVersion116()) {
                        await Core.ready();
                        callback();
                    }
                    else {
                        Core.attachInit(callback);
                    }
                });
            });
        }
        static getConfigurationSettingsObject() {
            if (!OpenUI5Support.isOpenUI5Detected()) {
                return {};
            }
            if (OpenUI5Support.isAtLeastVersion116()) {
                const ControlBehavior = window.sap.ui.require("sap/ui/core/ControlBehavior");
                const Localization = window.sap.ui.require("sap/base/i18n/Localization");
                const Theming = window.sap.ui.require("sap/ui/core/Theming");
                const Formatting = window.sap.ui.require("sap/base/i18n/Formatting");
                const CalendarUtils = window.sap.ui.require("sap/ui/core/date/CalendarUtils");
                return {
                    animationMode: ControlBehavior.getAnimationMode(),
                    language: Localization.getLanguage(),
                    theme: Theming.getTheme(),
                    themeRoot: Theming.getThemeRoot(),
                    rtl: Localization.getRTL(),
                    timezone: Localization.getTimezone(),
                    calendarType: Formatting.getCalendarType(),
                    formatSettings: {
                        firstDayOfWeek: CalendarUtils.getWeekConfigurationValues().firstDayOfWeek,
                        legacyDateCalendarCustomizing: Formatting.getCustomIslamicCalendarData?.()
                            ?? Formatting.getLegacyDateCalendarCustomizing?.(),
                    },
                };
            }
            const Core = window.sap.ui.require("sap/ui/core/Core");
            const config = Core.getConfiguration();
            const LocaleData = window.sap.ui.require("sap/ui/core/LocaleData");
            return {
                animationMode: config.getAnimationMode(),
                language: config.getLanguage(),
                theme: config.getTheme(),
                themeRoot: config.getThemeRoot(),
                rtl: config.getRTL(),
                timezone: config.getTimezone(),
                calendarType: config.getCalendarType(),
                formatSettings: {
                    firstDayOfWeek: LocaleData ? LocaleData.getInstance(config.getLocale()).getFirstDayOfWeek() : undefined,
                    legacyDateCalendarCustomizing: config.getFormatSettings().getLegacyDateCalendarCustomizing(),
                },
            };
        }
        static getLocaleDataObject() {
            if (!OpenUI5Support.isOpenUI5Detected()) {
                return;
            }
            const LocaleData = window.sap.ui.require("sap/ui/core/LocaleData");
            if (OpenUI5Support.isAtLeastVersion116()) {
                const Localization = window.sap.ui.require("sap/base/i18n/Localization");
                return LocaleData.getInstance(Localization.getLanguageTag())._get();
            }
            const Core = window.sap.ui.require("sap/ui/core/Core");
            const config = Core.getConfiguration();
            return LocaleData.getInstance(config.getLocale())._get();
        }
        static _listenForThemeChange() {
            if (OpenUI5Support.isAtLeastVersion116()) {
                const Theming = window.sap.ui.require("sap/ui/core/Theming");
                Theming.attachApplied(() => {
                    Boot.setTheme(Theming.getTheme());
                });
            }
            else {
                const Core = window.sap.ui.require("sap/ui/core/Core");
                const config = Core.getConfiguration();
                Core.attachThemeChanged(() => {
                    Boot.setTheme(config.getTheme());
                });
            }
        }
        static attachListeners() {
            if (!OpenUI5Support.isOpenUI5Detected()) {
                return;
            }
            OpenUI5Support._listenForThemeChange();
        }
        static cssVariablesLoaded() {
            if (!OpenUI5Support.isOpenUI5Detected()) {
                return;
            }
            const link = [...document.head.children].find(el => el.id === "sap-ui-theme-sap.ui.core"); // more reliable than querySelector early
            if (!link) {
                return false;
            }
            return !!link.href.match(/\/css(-|_)variables\.css/);
        }
    }
    Boot.registerFeature("OpenUI5Support", OpenUI5Support);

    // Fixed with https://github.com/SAP/openui5/commit/7a4615e3fe55221ae9de9d876d3eed209f71a5b1 in UI5 1.128.0


    WebComponentRenderer.renderAttributeProperties = function (oRm, oWebComponent) {
    	var oAttrProperties = oWebComponent.getMetadata().getPropertiesByMapping("property");
    	// ##### MODIFICATION START #####
    	var aPropsToAlwaysSet = ["enabled"].concat(
    		Object.entries(oWebComponent.getMetadata().getPropertyDefaults()).map(([key, value]) => {
    			return value !== undefined && value !== false ? key : null;
    		})
    	); // some properties can be initial and still have a non-default value due to side effects (e.g. EnabledPropagator)
    	// ##### MODIFICATION END #####
    	for (var sPropName in oAttrProperties) {
    		if (oWebComponent.isPropertyInitial(sPropName) && !aPropsToAlwaysSet.includes(sPropName)) {
    			continue; // do not set attributes for properties that were not explicitly set or bound
    		}

    		var oPropData = oAttrProperties[sPropName];
    		var vPropValue = oPropData.get(oWebComponent);
    		if (oPropData.type === "object" || typeof vPropValue === "object") {
    			continue; // Properties of type "object" and custom-type properties with object values are set during onAfterRendering
    		}

    		var sAttrName = oPropData._sMapTo ? oPropData._sMapTo : hyphenate(sPropName);
    		if (oPropData._fnMappingFormatter) {
    			vPropValue = oWebComponent[oPropData._fnMappingFormatter].call(oWebComponent, vPropValue);
    		}

    		if (oPropData.type === "boolean") {
    			if (vPropValue) {
    				oRm.attr(sAttrName, "");
    			}
    		} else {
    			if (vPropValue != null) {
    				oRm.attr(sAttrName, vPropValue);
    			}
    		}
    	}
    };
    Boot.setCustomElementsScopingSuffix("6e0d5ba1");

    const pkg = {
    	"_ui5metadata": {
      "name": "@ui5/webcomponents-base",
      "version": "2.3.0",
      "dependencies": [
        "sap.ui.core"
      ],
      "types": [
        "@ui5/webcomponents-base.AnimationMode",
        "@ui5/webcomponents-base.AriaHasPopup",
        "@ui5/webcomponents-base.AriaRole",
        "@ui5/webcomponents-base.CalendarType",
        "@ui5/webcomponents-base.ItemNavigationBehavior",
        "@ui5/webcomponents-base.MovePlacement",
        "@ui5/webcomponents-base.NavigationMode",
        "@ui5/webcomponents-base.ValueState"
      ],
      "interfaces": [],
      "controls": [],
      "elements": []
    }
    };

    pkg["AnimationMode"] = {
    	"Full": "Full",
    	"Basic": "Basic",
    	"Minimal": "Minimal",
    	"None": "None",
    };
    DataType.registerEnum("@ui5/webcomponents-base.AnimationMode", pkg["AnimationMode"]);
    pkg["AriaHasPopup"] = {
    	"Dialog": "Dialog",
    	"Grid": "Grid",
    	"ListBox": "ListBox",
    	"Menu": "Menu",
    	"Tree": "Tree",
    };
    DataType.registerEnum("@ui5/webcomponents-base.AriaHasPopup", pkg["AriaHasPopup"]);
    pkg["AriaRole"] = {
    	"AlertDialog": "AlertDialog",
    	"Button": "Button",
    	"Dialog": "Dialog",
    	"Link": "Link",
    };
    DataType.registerEnum("@ui5/webcomponents-base.AriaRole", pkg["AriaRole"]);
    pkg["CalendarType"] = {
    	"Gregorian": "Gregorian",
    	"Islamic": "Islamic",
    	"Japanese": "Japanese",
    	"Buddhist": "Buddhist",
    	"Persian": "Persian",
    };
    DataType.registerEnum("@ui5/webcomponents-base.CalendarType", pkg["CalendarType"]);
    pkg["ItemNavigationBehavior"] = {
    	"Static": "Static",
    	"Cyclic": "Cyclic",
    };
    DataType.registerEnum("@ui5/webcomponents-base.ItemNavigationBehavior", pkg["ItemNavigationBehavior"]);
    pkg["MovePlacement"] = {
    	"On": "On",
    	"Before": "Before",
    	"After": "After",
    };
    DataType.registerEnum("@ui5/webcomponents-base.MovePlacement", pkg["MovePlacement"]);
    pkg["NavigationMode"] = {
    	"Auto": "Auto",
    	"Vertical": "Vertical",
    	"Horizontal": "Horizontal",
    	"Paging": "Paging",
    };
    DataType.registerEnum("@ui5/webcomponents-base.NavigationMode", pkg["NavigationMode"]);
    pkg["ValueState"] = {
    	"None": "None",
    	"Positive": "Positive",
    	"Critical": "Critical",
    	"Negative": "Negative",
    	"Information": "Information",
    };
    DataType.registerEnum("@ui5/webcomponents-base.ValueState", pkg["ValueState"]);

    exports.A = A;
    exports.D = D;
    exports.T = T;
    exports.b = b;
    exports.j = j;
    exports.pkg = pkg;
    exports.x = x;

}));
