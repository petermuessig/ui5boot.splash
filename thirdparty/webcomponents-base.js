sap.ui.define(["exports","sap/base/strings/hyphenate","sap/ui/core/webc/WebComponentRenderer","ui5boot/splash/thirdparty/Boot","sap/ui/base/DataType"],function(e,t,i,n,s){"use strict";
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var o;const r=window,a=r.trustedTypes,l=a?a.createPolicy("lit-html",{createHTML:e=>e}):void 0,c="$lit$",u=`lit$${(Math.random()+"").slice(9)}$`,p="?"+u,h=`<${p}>`,d=document,g=()=>d.createComment(""),m=e=>null===e||"object"!=typeof e&&"function"!=typeof e,v=Array.isArray,A=e=>v(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),f="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,y=/>/g,b=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,C=/"/g,T=/^(?:script|style|textarea|title)$/i,M=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),N=M(1),H=M(2),S=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),x=new WeakMap,I=d.createTreeWalker(d,129,null,!1);function D(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(t):t}const P=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":"",r=$;for(let t=0;t<i;t++){const i=e[t];let a,l,p=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===$?"!--"===l[1]?r=_:void 0!==l[1]?r=y:void 0!==l[2]?(T.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=b):void 0!==l[3]&&(r=b):r===b?">"===l[0]?(r=null!=s?s:$,p=-1):void 0===l[1]?p=-2:(p=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?b:'"'===l[3]?C:w):r===C||r===w?r=b:r===_||r===y?r=$:(r=b,s=void 0);const g=r===b&&e[t+1].startsWith("/>")?" ":"";o+=r===$?i+h:p>=0?(n.push(a),i.slice(0,p)+c+i.slice(p)+u+g):i+u+(-2===p?(n.push(void 0),t):g)}return[D(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class E{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,l=this.parts,[h,d]=P(e,t);if(this.el=E.createElement(h,i),I.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=I.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(c)||t.startsWith(u)){const i=d[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+c).split(u),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?U:"?"===t[1]?z:"@"===t[1]?F:V})}else l.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(T.test(n.tagName)){const e=n.textContent.split(u),t=e.length-1;if(t>0){n.textContent=a?a.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],g()),I.nextNode(),l.push({type:2,index:++s});n.append(e[t],g())}}}else if(8===n.nodeType)if(n.data===p)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(u,e+1));)l.push({type:7,index:s}),e+=u.length-1}s++}}static createElement(e,t){const i=d.createElement("template");return i.innerHTML=e,i}}function B(e,t,i=e,n){var s,o,r,a;if(t===S)return t;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=m(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=B(e,l._$AS(e,t.values),l,n)),t}class O{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:d).importNode(i,!0);I.currentNode=s;let o=I.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new R(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new k(o,this,e)),this._$AV.push(t),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=I.nextNode(),r++)}return I.currentNode=d,s}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{constructor(e,t,i,n){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),m(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):A(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==L&&m(this._$AH)?this._$AA.nextSibling.data=e:this.$(d.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=E.createElement(D(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(i);else{const e=new O(s,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=x.get(e.strings);return void 0===t&&x.set(e.strings,t=new E(e)),t}T(e){v(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new R(this.k(g()),this.k(g()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=B(this,e,t,0),o=!m(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const n=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=B(this,n[i+r],t,r),a===S&&(a=this._$AH[r]),o||(o=!m(a)||a!==this._$AH[r]),a===L?e=L:e!==L&&(e+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class U extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}const q=a?a.emptyScript:"";class z extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class F extends V{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=B(this,e,t,0))&&void 0!==i?i:L)===S)return;const n=this._$AH,s=e===L&&n!==L||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class k{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const j={O:c,P:u,A:p,C:1,M:P,L:O,R:A,D:B,I:R,V:V,H:z,N:F,U:U,F:k},W=r.litHtmlPolyfillSupport;null==W||W(E,R),(null!==(o=r.litHtmlVersions)&&void 0!==o?o:r.litHtmlVersions=[]).push("2.8.0");const G=(e,t,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=o._$litPart$;if(void 0===r){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new R(t.insertBefore(g(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */};const J=Symbol.for(""),Z=e=>{if((null==e?void 0:e.r)===J)return null==e?void 0:e._$litStatic$},X=e=>({_$litStatic$:e,r:J}),K=new Map,Q=e=>(t,...i)=>{const n=i.length;let s,o;const r=[],a=[];let l,c=0,u=!1;for(;c<n;){for(l=t[c];c<n&&void 0!==(o=i[c],s=Z(o));)l+=s+t[++c],u=!0;c!==n&&a.push(o),r.push(l),c++}if(c===n&&r.push(t[n]),u){const e=r.join("$$lit$$");void 0===(t=K.get(e))&&(r.raw=r,K.set(e,t=r)),i=a}return e(t,...i)},Y=Q(N),ee=Q(H);class te{}te.html=Y;te.svg=ee;te.unsafeStatic=X;n.registerFeature("LitStatic",te);const ie=e=>{const t=e.prototype.openEnd;e.prototype.openEnd=function e(){if(this._mAttributes.popover){delete this._mAttributes.popover}return t.apply(this)}};const ne=e=>{e.setAttribute("popover","manual");e.showPopover()};const se=e=>{if(e.hasAttribute("popover")){e.hidePopover();e.removeAttribute("popover")}};const oe=e=>{const t=e.prototype.open;e.prototype.open=function e(...i){t.apply(this,i);const n=!!document.body.querySelector(":popover-open");const s=["OPENING","OPEN"].includes(this.getOpenState());if(s&&n){const e=this.getContent();if(e){const t=e instanceof HTMLElement?e:e?.getDomRef();if(t){ne(t)}}}}};const re=e=>{const t=e.prototype._closed;e.prototype._closed=function e(...i){const n=this.getContent();const s=n instanceof HTMLElement?n:n?.getDomRef();t.apply(this,i);if(s){se(s)}}};const ae=e=>{const t=e.prototype.onFocusEvent;e.prototype.onFocusEvent=function e(i){const n=i.type==="focus"||i.type==="activate";const s=i.target;if(!n||!s.closest("[ui5-popover],[ui5-responsive-popover],[ui5-dialog]")){t.call(this,i)}}};const le=()=>{const e=new CSSStyleSheet;e.replaceSync(`.sapMPopup-CTX:popover-open { inset: unset; }`);document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]};const ce=e=>{oe(e);re(e);le();ae(e)};class ue{static isAtLeastVersion116(){if(!window.sap.ui.version){return true}const e=window.sap.ui.version;const t=e.split(".");if(!t||t.length<2){return false}return parseInt(t[0])>1||parseInt(t[1])>=116}static isOpenUI5Detected(){return typeof window.sap?.ui?.require==="function"}static init(){if(!ue.isOpenUI5Detected()){return Promise.resolve()}return new Promise(e=>{window.sap.ui.require(["sap/ui/core/Core"],async t=>{const i=()=>{let t=["sap/ui/core/Popup","sap/ui/core/Patcher","sap/ui/core/LocaleData"];if(ue.isAtLeastVersion116()){t=[...t,"sap/base/i18n/Formatting","sap/base/i18n/Localization","sap/ui/core/ControlBehavior","sap/ui/core/Theming","sap/ui/core/date/CalendarUtils"]}window.sap.ui.require(t,(t,i)=>{ie(i);ce(t);e()})};if(ue.isAtLeastVersion116()){await t.ready();i()}else{t.attachInit(i)}})})}static getConfigurationSettingsObject(){if(!ue.isOpenUI5Detected()){return{}}if(ue.isAtLeastVersion116()){const e=window.sap.ui.require("sap/ui/core/ControlBehavior");const t=window.sap.ui.require("sap/base/i18n/Localization");const i=window.sap.ui.require("sap/ui/core/Theming");const n=window.sap.ui.require("sap/base/i18n/Formatting");const s=window.sap.ui.require("sap/ui/core/date/CalendarUtils");return{animationMode:e.getAnimationMode(),language:t.getLanguage(),theme:i.getTheme(),themeRoot:i.getThemeRoot(),rtl:t.getRTL(),timezone:t.getTimezone(),calendarType:n.getCalendarType(),formatSettings:{firstDayOfWeek:s.getWeekConfigurationValues().firstDayOfWeek,legacyDateCalendarCustomizing:n.getCustomIslamicCalendarData?.()??n.getLegacyDateCalendarCustomizing?.()}}}const e=window.sap.ui.require("sap/ui/core/Core");const t=e.getConfiguration();const i=window.sap.ui.require("sap/ui/core/LocaleData");return{animationMode:t.getAnimationMode(),language:t.getLanguage(),theme:t.getTheme(),themeRoot:t.getThemeRoot(),rtl:t.getRTL(),timezone:t.getTimezone(),calendarType:t.getCalendarType(),formatSettings:{firstDayOfWeek:i?i.getInstance(t.getLocale()).getFirstDayOfWeek():undefined,legacyDateCalendarCustomizing:t.getFormatSettings().getLegacyDateCalendarCustomizing()}}}static getLocaleDataObject(){if(!ue.isOpenUI5Detected()){return}const e=window.sap.ui.require("sap/ui/core/LocaleData");if(ue.isAtLeastVersion116()){const t=window.sap.ui.require("sap/base/i18n/Localization");return e.getInstance(t.getLanguageTag())._get()}const t=window.sap.ui.require("sap/ui/core/Core");const i=t.getConfiguration();return e.getInstance(i.getLocale())._get()}static _listenForThemeChange(){if(ue.isAtLeastVersion116()){const e=window.sap.ui.require("sap/ui/core/Theming");e.attachApplied(()=>{n.setTheme(e.getTheme())})}else{const e=window.sap.ui.require("sap/ui/core/Core");const t=e.getConfiguration();e.attachThemeChanged(()=>{n.setTheme(t.getTheme())})}}static attachListeners(){if(!ue.isOpenUI5Detected()){return}ue._listenForThemeChange()}static cssVariablesLoaded(){if(!ue.isOpenUI5Detected()){return}const e=[...document.head.children].find(e=>e.id==="sap-ui-theme-sap.ui.core");if(!e){return false}return!!e.href.match(/\/css(-|_)variables\.css/)}}n.registerFeature("OpenUI5Support",ue);i.renderAttributeProperties=function(e,i){var n=i.getMetadata().getPropertiesByMapping("property");var s=["enabled"].concat(Object.entries(i.getMetadata().getPropertyDefaults()).map(([e,t])=>t!==undefined&&t!==false?e:null));for(var o in n){if(i.isPropertyInitial(o)&&!s.includes(o)){continue}var r=n[o];var a=r.get(i);if(r.type==="object"||typeof a==="object"){continue}var l=r._sMapTo?r._sMapTo:t(o);if(r._fnMappingFormatter){a=i[r._fnMappingFormatter].call(i,a)}if(r.type==="boolean"){if(a){e.attr(l,"")}}else{if(a!=null){e.attr(l,a)}}}};n.setCustomElementsScopingSuffix("6e0d5ba1");const pe={_ui5metadata:{name:"@ui5/webcomponents-base",version:"2.3.0",dependencies:["sap.ui.core"],types:["@ui5/webcomponents-base.AnimationMode","@ui5/webcomponents-base.AriaHasPopup","@ui5/webcomponents-base.AriaRole","@ui5/webcomponents-base.CalendarType","@ui5/webcomponents-base.ItemNavigationBehavior","@ui5/webcomponents-base.MovePlacement","@ui5/webcomponents-base.NavigationMode","@ui5/webcomponents-base.ValueState"],interfaces:[],controls:[],elements:[]}};pe["AnimationMode"]={Full:"Full",Basic:"Basic",Minimal:"Minimal",None:"None"};s.registerEnum("@ui5/webcomponents-base.AnimationMode",pe["AnimationMode"]);pe["AriaHasPopup"]={Dialog:"Dialog",Grid:"Grid",ListBox:"ListBox",Menu:"Menu",Tree:"Tree"};s.registerEnum("@ui5/webcomponents-base.AriaHasPopup",pe["AriaHasPopup"]);pe["AriaRole"]={AlertDialog:"AlertDialog",Button:"Button",Dialog:"Dialog",Link:"Link"};s.registerEnum("@ui5/webcomponents-base.AriaRole",pe["AriaRole"]);pe["CalendarType"]={Gregorian:"Gregorian",Islamic:"Islamic",Japanese:"Japanese",Buddhist:"Buddhist",Persian:"Persian"};s.registerEnum("@ui5/webcomponents-base.CalendarType",pe["CalendarType"]);pe["ItemNavigationBehavior"]={Static:"Static",Cyclic:"Cyclic"};s.registerEnum("@ui5/webcomponents-base.ItemNavigationBehavior",pe["ItemNavigationBehavior"]);pe["MovePlacement"]={On:"On",Before:"Before",After:"After"};s.registerEnum("@ui5/webcomponents-base.MovePlacement",pe["MovePlacement"]);pe["NavigationMode"]={Auto:"Auto",Vertical:"Vertical",Horizontal:"Horizontal",Paging:"Paging"};s.registerEnum("@ui5/webcomponents-base.NavigationMode",pe["NavigationMode"]);pe["ValueState"]={None:"None",Positive:"Positive",Critical:"Critical",Negative:"Negative",Information:"Information"};s.registerEnum("@ui5/webcomponents-base.ValueState",pe["ValueState"]);e.A=L;e.D=G;e.T=S;e.b=H;e.j=j;e.pkg=pe;e.x=N});
//# sourceMappingURL=webcomponents-base.js.map