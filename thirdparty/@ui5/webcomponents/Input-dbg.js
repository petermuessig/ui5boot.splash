sap.ui.define(['ui5boot/splash/thirdparty/Button2', 'ui5boot/splash/thirdparty/webcomponents-base', 'ui5boot/splash/thirdparty/Boot', 'ui5boot/splash/thirdparty/@ui5/webcomponents', 'sap/ui/core/webc/WebComponent', 'ui5boot/splash/thirdparty/i18n', 'sap/base/strings/hyphenate', 'sap/ui/core/webc/WebComponentRenderer', 'sap/ui/base/DataType'], (function (Button, _ui5_webcomponentsBase, Boot, _ui5_webcomponents, WebComponentBaseClass, i18n, hyphenate, WebComponentRenderer, DataType) { 'use strict';

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const o=Button.e(class extends Button.i{constructor(t){var i;if(super(t),t.type!==Button.t.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return _ui5_webcomponentsBase.T}});

    // @ts-nocheck
    /* eslint-disable */
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    /**
     * This is the original style-map.js directive from lit-html 2 with the only difference that "render" is not called even for the first rendering (update is used instead)
     */
    class StyleMapDirective extends Button.i {
        constructor(partInfo) {
            var _a;
            super(partInfo);
            if (partInfo.type !== Button.t.ATTRIBUTE ||
                partInfo.name !== 'style' ||
                ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
                throw new Error('The `styleMap` directive must be used in the `style` attribute ' +
                    'and must be the only part in the attribute.');
            }
        }
        render(styleInfo) {
            return "";
        }
        update(part, [styleInfo]) {
            const { style } = part.element;
            if (this._previousStyleProperties === undefined) {
                this._previousStyleProperties = new Set();
                for (const name in styleInfo) {
                    this._previousStyleProperties.add(name);
                }
                // return this.render(styleInfo);
            }
            // Remove old properties that no longer exist in styleInfo
            // We use forEach() instead of for-of so that re don't require down-level
            // iteration.
            this._previousStyleProperties.forEach((name) => {
                // If the name isn't in styleInfo or it's null/undefined
                if (styleInfo[name] == null) {
                    this._previousStyleProperties.delete(name);
                    if (name.includes('-')) {
                        style.removeProperty(name);
                    }
                    else {
                        // Note reset using empty string (vs null) as IE11 does not always
                        // reset via null (https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style#setting_styles)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        style[name] = '';
                    }
                }
            });
            // Add or update properties
            for (const name in styleInfo) {
                const value = styleInfo[name];
                if (value != null) {
                    this._previousStyleProperties.add(name);
                    if (name.includes('-')) {
                        style.setProperty(name, value);
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        style[name] = value;
                    }
                }
            }
            return _ui5_webcomponentsBase.T;
        }
    }
    const styleMap = Button.e(StyleMapDirective);

    let resizeObserver;
    const observedElements = new Map();
    const getResizeObserver = () => {
        if (!resizeObserver) {
            resizeObserver = new window.ResizeObserver(entries => {
                window.requestAnimationFrame(() => {
                    entries.forEach(entry => {
                        const callbacks = observedElements.get(entry.target);
                        // Callbacks could be async and we need to handle returned promises to comply with the eslint "no-misused-promises" rule.
                        // Although Promise.all awaits all, we don't await the additional task after calling the callbacks and should not make any difference.
                        callbacks && Promise.all(callbacks.map((callback) => callback()));
                    });
                });
            });
        }
        return resizeObserver;
    };
    const observe = (element, callback) => {
        const callbacks = observedElements.get(element) || [];
        // if no callbacks have been added for this element - start observing it
        if (!callbacks.length) {
            getResizeObserver().observe(element);
        }
        // save the callbacks in an array
        observedElements.set(element, [...callbacks, callback]);
    };
    const unobserve = (element, callback) => {
        const callbacks = observedElements.get(element) || [];
        if (callbacks.length === 0) {
            return;
        }
        const filteredCallbacks = callbacks.filter((fn) => fn !== callback);
        if (filteredCallbacks.length === 0) {
            getResizeObserver().unobserve(element);
            observedElements.delete(element);
        }
        else {
            observedElements.set(element, filteredCallbacks);
        }
    };
    /**
     * Allows to register/deregister resize observers for a DOM element
     *
     * @public
     * @class
      */
    class ResizeHandler {
        /**
         * @public
         * @param element UI5 Web Component or DOM Element to be observed
         * @param callback Callback to be executed
         */
        static register(element, callback) {
            let effectiveElement = element;
            if (Button.instanceOfUI5Element(effectiveElement)) {
                effectiveElement = effectiveElement.getDomRef();
            }
            if (effectiveElement instanceof HTMLElement) {
                observe(effectiveElement, callback);
            }
            else {
                console.warn("Cannot register ResizeHandler for element", element); // eslint-disable-line
            }
        }
        /**
         * @public
         * @param element UI5 Web Component or DOM Element to be unobserved
         * @param callback Callback to be removed
         */
        static deregister(element, callback) {
            let effectiveElement = element;
            if (Button.instanceOfUI5Element(effectiveElement)) {
                effectiveElement = effectiveElement.getDomRef();
            }
            if (effectiveElement instanceof HTMLElement) {
                unobserve(effectiveElement, callback);
            }
            else {
                console.warn("Cannot deregister ResizeHandler for element", element); // eslint-disable-line
            }
        }
    }

    /**
     * Create hex string and pad to length with zeros.
     * @example
     * sap.ui.require(["sap/base/strings/toHex"], function(toHex){
     *      toHex(10, 2); // "0a"
     *      toHex(16, 2); // "10"
     * });
     *
     * @function
     * @since 1.58
     * @private
     * @alias module:sap/base/strings/toHex
     * @param {int} iChar UTF-16 character code
     * @param {int} [iLength=0] number of padded zeros
     * @returns {string} padded hex representation of the given character code
     */ /*!
         * OpenUI5
         * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
         * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
         */
    /*
     * IMPORTANT: This is a private module, its API must not be used and is subject to change.
     * Code other than the OpenUI5 libraries must not introduce dependencies to this module.
     */

    var fnToHex = function (iChar, iLength) {
      var sHex = iChar.toString(16);
      return sHex;
    };

    /*!
     * OpenUI5
     * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
     * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
     */
    /* eslint-disable no-control-regex -- special characters are really needed here! */
    /**
     * RegExp and escape function for HTML escaping
     */
    var rHtml = /[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,
      rHtmlReplace = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,
      mHtmlLookup = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "\"": "&quot;"
      };
    /* eslint-enable no-control-regex */

    var fnHtml = function (sChar) {
      var sEncoded = mHtmlLookup[sChar];
      if (!sEncoded) {
        if (rHtmlReplace.test(sChar)) {
          sEncoded = "&#xfffd;";
        } else {
          sEncoded = "&#x" + fnToHex(sChar.charCodeAt(0)) + ";";
        }
        mHtmlLookup[sChar] = sEncoded;
      }
      return sEncoded;
    };

    /*
     * Encoding according to the Secure Programming Guide
     * <SAPWIKI>/wiki/display/NWCUIAMSIM/XSS+Secure+Programming+Guide
     */

    /**
     * Encode the string for inclusion into XML content/attribute.
     *
     * @function
     * @since 1.58
     * @alias module:sap/base/security/encodeXML
     * @param {string} sString The string to be escaped
     * @returns {string} The encoded string
     * @SecValidate {0|return|XSS} validates the given string for XML contexts
     * @public
     */
    var fnEncodeXML = function (sString) {
      return sString.replace(rHtml, fnHtml);
    };

    /**
     * Different types of ValueStates.
     *
     * @public
     */
    var ValueState;
    (function (ValueState) {
        /**
         * @public
         */
        ValueState["None"] = "None";
        /**
         * @public
         */
        ValueState["Positive"] = "Positive";
        /**
         * @public
         */
        ValueState["Critical"] = "Critical";
        /**
         * @public
         */
        ValueState["Negative"] = "Negative";
        /**
         * @public
         */
        ValueState["Information"] = "Information";
    })(ValueState || (ValueState = {}));
    var ValueState$1 = ValueState;

    /**
     * Returns the caret (cursor) position of the specified text field (field).
     * Return value range is 0-field.value.length.
     */
    const getCaretPosition = (field) => {
        // Initialize
        let caretPos = 0;
        if (field.selectionStart || field.selectionStart === 0) { // Firefox support
            caretPos = field.selectionDirection === "backward" ? field.selectionStart : field.selectionEnd;
        }
        return caretPos;
    };
    const setCaretPosition = (field, caretPos) => {
        if (field.selectionStart) {
            field.focus();
            field.setSelectionRange(caretPos, caretPos);
        }
        else {
            field.focus();
        }
    };

    const getActiveElement = () => {
        let element = document.activeElement;
        while (element && element.shadowRoot && element.shadowRoot.activeElement) {
            element = element.shadowRoot.activeElement;
        }
        return element;
    };

    const ICON_DECLINE = { key: "ICON_DECLINE", defaultText: "Decline" };
    const ICON_ERROR = { key: "ICON_ERROR", defaultText: "Error" };

    const name$d = "decline";
    const pathData$d = "M86 109l22-23q5-5 12-5 6 0 11 5l124 125L380 86q5-5 11-5 7 0 12 5l22 23q6 5 6 11t-6 12L301 256l124 125q6 5 6 11 0 5-6 11l-22 23q-8 5-12 5-3 0-11-5L255 301 131 426q-5 5-11 5-4 0-12-5l-22-23q-6-6-6-11 0-6 6-11l124-125L86 132q-6-6-6-12t6-11z";
    const ltr$d = false;
    const accData$3 = ICON_DECLINE;
    const collection$d = "SAP-icons-v4";
    const packageName$d = "@ui5/webcomponents-icons";

    Button.registerIcon(name$d, { pathData: pathData$d, ltr: ltr$d, accData: accData$3, collection: collection$d, packageName: packageName$d });

    const name$c = "decline";
    const pathData$c = "M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-9 0-18-7L256 292 140 409q-9 7-18 7-11 0-18.5-7.5T96 390t7-18l117-116-117-116q-7-7-7-18t7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z";
    const ltr$c = false;
    const accData$2 = ICON_DECLINE;
    const collection$c = "SAP-icons-v5";
    const packageName$c = "@ui5/webcomponents-icons";

    Button.registerIcon(name$c, { pathData: pathData$c, ltr: ltr$c, accData: accData$2, collection: collection$c, packageName: packageName$c });

    const name$b = "not-editable";
    const pathData$b = "M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-34 11l-46-44-64 64 45 45zm-87 88l-46-45L52 381l46 46zm158 116l32 32-66 63 66 66-32 32-63-66-65 66-33-32 66-66-66-63 33-32 65 64z";
    const ltr$b = false;
    const collection$b = "SAP-icons-v4";
    const packageName$b = "@ui5/webcomponents-icons";

    Button.registerIcon(name$b, { pathData: pathData$b, ltr: ltr$b, collection: collection$b, packageName: packageName$b });

    const name$a = "not-editable";
    const pathData$a = "M504 94q7 7 7 18t-7 18L130 504q-8 8-18 8H26q-11 0-18.5-7.5T0 486v-86q0-9 7-18L381 8q8-8 18-8 12 0 18 8zM363 198l-50-50L62 400l50 50zm86-86l-50-50-50 50 50 50zm56 356q7 7 7 18t-7.5 18.5T486 512q-10 0-18-8l-37-37-38 37q-8 8-18 8-11 0-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38z";
    const ltr$a = false;
    const collection$a = "SAP-icons-v5";
    const packageName$a = "@ui5/webcomponents-icons";

    Button.registerIcon(name$a, { pathData: pathData$a, ltr: ltr$a, collection: collection$a, packageName: packageName$a });

    const name$9 = "error";
    const pathData$9 = "M512 256q0 53-20.5 100t-55 81.5-81 54.5-99.5 20-100-20.5-81.5-55T20 355 0 256q0-54 20-100.5t55-81T156.5 20 256 0t99.5 20T437 75t55 81.5 20 99.5zM399 364q3-3 3-6t-3-6l-86-86q-3-3-3-6t3-6l81-81q3-3 3-6t-3-6l-37-37q-2-2-6-2t-6 2l-83 82q-1 3-6 3-3 0-6-3l-84-83q-1-2-6-2-4 0-6 2l-37 37q-3 3-3 6t3 6l83 82q3 3 3 6t-3 6l-83 82q-2 2-2.5 4.5l-.5 2.5q0 3 3 5l36 37q4 2 6 2 4 0 6-2l85-84q2-2 6-2t6 2l88 88q4 2 6 2t6-2z";
    const ltr$9 = false;
    const accData$1 = ICON_ERROR;
    const collection$9 = "SAP-icons-v4";
    const packageName$9 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$9, { pathData: pathData$9, ltr: ltr$9, accData: accData$1, collection: collection$9, packageName: packageName$9 });

    const name$8 = "error";
    const pathData$8 = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z";
    const ltr$8 = false;
    const accData = ICON_ERROR;
    const collection$8 = "SAP-icons-v5";
    const packageName$8 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$8, { pathData: pathData$8, ltr: ltr$8, accData, collection: collection$8, packageName: packageName$8 });

    const name$7 = "alert";
    const pathData$7 = "M501 374q5 10 7.5 19.5T512 412v5q0 31-23 47t-50 16H74q-13 0-26-4t-23.5-12-17-20T0 417q0-13 4-22.5t9-20.5L198 38q21-38 61-38 38 0 59 38zM257 127q-13 0-23.5 8T223 161q1 7 2 12 3 25 4.5 48t3.5 61q0 11 7.5 16t16.5 5q22 0 23-21l2-36 9-85q0-18-10.5-26t-23.5-8zm0 299q20 0 31.5-12t11.5-32q0-19-11.5-31T257 339t-31.5 12-11.5 31q0 20 11.5 32t31.5 12z";
    const ltr$7 = false;
    const collection$7 = "SAP-icons-v4";
    const packageName$7 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$7, { pathData: pathData$7, ltr: ltr$7, collection: collection$7, packageName: packageName$7 });

    const name$6 = "alert";
    const pathData$6 = "M505 399q7 13 7 27 0 21-15.5 37.5T456 480H56q-25 0-40.5-16.5T0 426q0-14 7-27L208 59q8-14 21-20.5t27-6.5 27 6.5T304 59zm-249 17q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9zm32-240q0-14-9-23t-23-9-23 9-9 23v96q0 14 9 23t23 9 23-9 9-23v-96z";
    const ltr$6 = false;
    const collection$6 = "SAP-icons-v5";
    const packageName$6 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$6, { pathData: pathData$6, ltr: ltr$6, collection: collection$6, packageName: packageName$6 });

    const name$5 = "sys-enter-2";
    const pathData$5 = "M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-118-87q2-4 2-7t-3-6l-36-36q-3-4-8-4t-8 5L237 294h-4l-70-52q-4-3-7-3t-4.5 2-2.5 3l-29 41q-3 3-3 6 0 5 5 8l113 95q2 2 7 2t8-4z";
    const ltr$5 = true;
    const collection$5 = "SAP-icons-v4";
    const packageName$5 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$5, { pathData: pathData$5, ltr: ltr$5, collection: collection$5, packageName: packageName$5 });

    const name$4 = "sys-enter-2";
    const pathData$4 = "M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm150 183q10-9 10-23 0-13-9.5-22.5T384 128t-22 9L186 308l-68-63q-9-9-22-9t-22.5 9.5T64 268q0 15 10 24l90 83q11 9 22 9 13 0 22-9z";
    const ltr$4 = true;
    const collection$4 = "SAP-icons-v5";
    const packageName$4 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$4, { pathData: pathData$4, ltr: ltr$4, collection: collection$4, packageName: packageName$4 });

    const name$3 = "information";
    const pathData$3 = "M0 256q0-53 20.5-100t55-81.5T157 20t99-20q54 0 100.5 20t81 55 54.5 81.5 20 99.5q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256zm226-89q14 11 30 11 17 0 29.5-11.5T298 138q0-19-13-31-12-12-29-12-19 0-30.5 12.5T214 138q0 17 12 29zm-34 201v33h128v-33h-32V215q0-6-7-6h-88v31h32v128h-33z";
    const ltr$3 = false;
    const collection$3 = "SAP-icons-v4";
    const packageName$3 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$3, { pathData: pathData$3, ltr: ltr$3, collection: collection$3, packageName: packageName$3 });

    const name$2 = "information";
    const pathData$2 = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm32 224q0-14-9-23t-23-9-23 9-9 23v160q0 14 9 23t23 9 23-9 9-23V224zm-32-64q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z";
    const ltr$2 = false;
    const collection$2 = "SAP-icons-v5";
    const packageName$2 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$2, { pathData: pathData$2, ltr: ltr$2, collection: collection$2, packageName: packageName$2 });

    /**
     * Different input types.
     * @public
     */
    var InputType;
    (function (InputType) {
        /**
         * Defines a one-line text input field:
         * @public
         */
        InputType["Text"] = "Text";
        /**
         * Used for input fields that must contain an e-mail address.
         * @public
         */
        InputType["Email"] = "Email";
        /**
         * Defines a numeric input field.
         * @public
         */
        InputType["Number"] = "Number";
        /**
         * Defines a password field.
         * @public
         */
        InputType["Password"] = "Password";
        /**
         * Used for input fields that should contain a telephone number.
         * @public
         */
        InputType["Tel"] = "Tel";
        /**
         * Used for input fields that should contain a URL address.
         * @public
         */
        InputType["URL"] = "URL";
        /**
         * Used for input fields that should contain a search term.
         * @since 2.0.0
         * @public
         */
        InputType["Search"] = "Search";
    })(InputType || (InputType = {}));
    var InputType$1 = InputType;

    const getFocusedElement = () => {
        const element = getActiveElement();
        return (element && typeof element.focus === "function") ? element : null;
    };
    const isFocusedElementWithinNode = (node) => {
        const fe = getFocusedElement();
        if (fe) {
            return isNodeContainedWithin(node, fe);
        }
        return false;
    };
    const isNodeContainedWithin = (parent, child) => {
        let currentNode = parent;
        if (currentNode.shadowRoot) {
            const children = Array.from(currentNode.shadowRoot.children);
            currentNode = children.find(n => n.localName !== "style");
            if (!currentNode) {
                return false;
            }
        }
        if (currentNode === child) {
            return true;
        }
        const childNodes = currentNode.localName === "slot" ? currentNode.assignedNodes() : currentNode.children;
        if (childNodes) {
            return Array.from(childNodes).some(n => isNodeContainedWithin(n, child));
        }
        return false;
    };
    const isPointInRect = (x, y, rect) => {
        return x >= rect.left && x <= rect.right
            && y >= rect.top && y <= rect.bottom;
    };
    const isClickInRect = (e, rect) => {
        let x;
        let y;
        if (e instanceof MouseEvent) {
            x = e.clientX;
            y = e.clientY;
        }
        else {
            const touch = e.touches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        return isPointInRect(x, y, rect);
    };
    function instanceOfPopup(object) {
        return "isUI5Element" in object && "_show" in object;
    }
    const getClosedPopupParent = (el) => {
        const parent = el.parentElement || (el.getRootNode && el.getRootNode().host);
        if (parent && ((instanceOfPopup(parent) || parent === document.documentElement))) {
            return parent;
        }
        return getClosedPopupParent(parent);
    };

    /**
     * Returns a value clamped between an upper bound 'max' and lower bound 'min'.
     * @param {number} val value
     * @param {number} min lower bound
     * @param {number} max upper bound
     * @returns {number}
     */
    const clamp = (val, min, max) => {
        // handles case when max < min
        return Math.min(Math.max(val, min), Math.max(min, max));
    };

    const isElementContainingBlock = (el) => {
        const computedStyle = getComputedStyle(el);
        return ["size", "inline-size"].indexOf(computedStyle.containerType) > -1
            || ["transform", "perspective"].indexOf(computedStyle.willChange) > -1
            || ["layout", "paint", "strict", "content"].indexOf(computedStyle.contain) > -1
            || (computedStyle.transform && computedStyle.transform !== "none")
            || (computedStyle.perspective && computedStyle.perspective !== "none")
            || (computedStyle.backdropFilter && computedStyle.backdropFilter !== "none");
    };

    const NO_SCROLLBAR_STYLE_CLASS = "ui5-content-native-scrollbars";
    const isSSR = typeof document === "undefined";
    const getEffectiveScrollbarStyle = () => {
        if (isSSR || document.body.classList.contains(NO_SCROLLBAR_STYLE_CLASS)) {
            return "";
        }
        return `::-webkit-scrollbar:horizontal {
	height: var(--sapScrollBar_Dimension);
}

::-webkit-scrollbar:vertical {
	width: var(--sapScrollBar_Dimension);
}

::-webkit-scrollbar {
	background-color: var(--sapScrollBar_TrackColor);
	border-left: none;
}

::-webkit-scrollbar-thumb {
	border-radius: var(--sapElement_BorderCornerRadius);
	background-color: var(--sapScrollBar_FaceColor);
}

::-webkit-scrollbar-thumb:hover {
	background-color: var(--sapScrollBar_Hover_FaceColor);
}

::-webkit-scrollbar-corner {
	background-color: var(--sapScrollBar_TrackColor);
}`;
    };

    const getParentElement = (el) => {
        return (el.parentElement ? el.parentNode : el.parentNode.host);
    };

    const DOMReferenceConverter = {
        toAttribute(propertyValue) {
            if (propertyValue instanceof HTMLElement) {
                return null;
            }
            return propertyValue;
        },
        fromAttribute(value) {
            return value;
        },
    };

    const isElementHidden = (el) => {
        if (el.nodeName === "SLOT") {
            return false;
        }
        return (el.offsetWidth <= 0 && el.offsetHeight <= 0) || (el.style && el.style.visibility === "hidden");
    };

    const rClickable = /^(?:a|area)$/i;
    const rFocusable = /^(?:input|select|textarea|button)$/i;
    const isElementClickable = (el) => {
        if (el.disabled) {
            return false;
        }
        const tabIndex = el.getAttribute("tabindex");
        if (tabIndex !== null && tabIndex !== undefined) {
            return parseInt(tabIndex) >= 0;
        }
        return rFocusable.test(el.nodeName)
            || (rClickable.test(el.nodeName)
                && !!el.href);
    };

    const isFocusTrap = (el) => {
        return el.hasAttribute("data-ui5-focus-trap");
    };
    const getFirstFocusableElement = async (container, startFromContainer) => {
        if (!container || isElementHidden(container)) {
            return null;
        }
        return findFocusableElement(container, true);
    };
    const getLastFocusableElement = async (container, startFromContainer) => {
        if (!container || isElementHidden(container)) {
            return null;
        }
        return findFocusableElement(container, false);
    };
    const isElemFocusable = (el) => {
        return el.hasAttribute("data-ui5-focus-redirect") || !isElementHidden(el);
    };
    const findFocusableElement = async (container, forward, startFromContainer) => {
        let child;
        let assignedElements;
        let currentIndex = -1;
        if (container.shadowRoot) {
            child = forward ? container.shadowRoot.firstChild : container.shadowRoot.lastChild;
        }
        else if (container instanceof HTMLSlotElement && container.assignedNodes()) {
            assignedElements = container.assignedNodes();
            currentIndex = forward ? 0 : assignedElements.length - 1;
            child = assignedElements[currentIndex];
        }
        else {
            child = forward ? container.firstElementChild : container.lastElementChild;
        }
        let focusableDescendant;
        /* eslint-disable no-await-in-loop */
        while (child) {
            const originalChild = child;
            if (Button.instanceOfUI5Element(child)) {
                child = await child.getFocusDomRefAsync();
            }
            if (!child) {
                return null;
            }
            if (child.nodeType === 1 && isElemFocusable(child) && !isFocusTrap(child)) {
                if (isElementClickable(child)) {
                    return (child && typeof child.focus === "function") ? child : null;
                }
                focusableDescendant = await findFocusableElement(child, forward);
                if (focusableDescendant) {
                    return (focusableDescendant && typeof focusableDescendant.focus === "function") ? focusableDescendant : null;
                }
            }
            child = forward ? originalChild.nextSibling : originalChild.previousSibling;
            // If the child element is not part of the currently assigned element,
            // we have to check the next/previous element assigned to the slot or continue with the next/previous sibling of the slot,
            // otherwise, the nextSibling/previousSibling is the next element inside the light DOM
            if (assignedElements && !assignedElements[currentIndex].contains(child)) {
                currentIndex = forward ? currentIndex + 1 : currentIndex - 1;
                child = assignedElements[currentIndex];
            }
        }
        /* eslint-enable no-await-in-loop */
        return null;
    };

    const mediaRanges = new Map();
    const DEAFULT_RANGE_SET = new Map();
    DEAFULT_RANGE_SET.set("S", [0, 599]);
    DEAFULT_RANGE_SET.set("M", [600, 1023]);
    DEAFULT_RANGE_SET.set("L", [1024, 1439]);
    DEAFULT_RANGE_SET.set("XL", [1440, Infinity]);
    /**
     * Enumeration containing the names and settings of predefined screen width media query range sets.
     *
     * @public
     */
    var RANGESETS;
    (function (RANGESETS) {
        /**
         * A 4-step range set (S-M-L-XL).
         *
         * The ranges of this set are:
         *
         * - `"S"`: For screens smaller than 600 pixels.
         * - `"M"`: For screens greater than or equal to 600 pixels and smaller than 1024 pixels.
         * - `"L"`: For screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
         * - `"XL"`: For screens greater than or equal to 1440 pixels.
         *
         *
         * @public
         */
        RANGESETS["RANGE_4STEPS"] = "4Step";
    })(RANGESETS || (RANGESETS = {}));
    /**
     * Initializes a screen width media query range set.
     *
     * This initialization step makes the range set ready to be used for one of the other functions in namespace `MediaRange`.
     *
     * A range set can be defined as shown in the following example:
     * ```
     * MediaRange.initRangeSet("MyRangeSet", [200, 400], ["Small", "Medium", "Large"]);
     * ```
     * This example defines the following named ranges:
     *
     * - `"Small"`: For screens smaller than 200 pixels.
     * - `"Medium"`: For screens greater than or equal to 200 pixels and smaller than 400 pixels.
     * - `"Large"`: For screens greater than or equal to 400 pixels.
     *
     *
     * @param name The name of the range set to be initialized.
     * The name must be a valid id and consist only of letters and numeric digits.
     * @param range The given range set.
     */
    const initRangeSet = (name, range) => {
        mediaRanges.set(name, range);
    };
    /**
     * Returns information about the current active range of the range set with the given name.
     *
     * If the optional parameter `width` is given, the active range will be determined for that width,
     * otherwise it is determined for the current window size.
     *
     * @param name The name of the range set. The range set must be initialized beforehand ({@link MediaRange.initRangeSet})
     * @param [width] An optional width, based on which the range should be determined;
     * If `width` is not provided, the window size will be used.
     * @returns The name of the current active interval of the range set.
     * @public
     */
    const getCurrentRange = (name, width = window.innerWidth) => {
        let rangeSet = mediaRanges.get(name);
        if (!rangeSet) {
            rangeSet = mediaRanges.get(RANGESETS.RANGE_4STEPS);
        }
        let currentRangeName;
        const effectiveWidth = Math.floor(width);
        rangeSet.forEach((value, key) => {
            if (effectiveWidth >= value[0] && effectiveWidth <= value[1]) {
                currentRangeName = key;
            }
        });
        return currentRangeName || [...rangeSet.keys()][0];
    };
    /**
     * API for screen width changes.
     */
    const MediaRange = {
        RANGESETS,
        initRangeSet,
        getCurrentRange,
    };
    MediaRange.initRangeSet(MediaRange.RANGESETS.RANGE_4STEPS, DEAFULT_RANGE_SET);

    /**
     * Different types of Title level.
     * @public
     */
    var TitleLevel;
    (function (TitleLevel) {
        /**
         * Renders `h1` tag.
         * @public
         */
        TitleLevel["H1"] = "H1";
        /**
         * Renders `h2` tag.
         * @public
         */
        TitleLevel["H2"] = "H2";
        /**
         * Renders `h3` tag.
         * @public
         */
        TitleLevel["H3"] = "H3";
        /**
         * Renders `h4` tag.
         * @public
         */
        TitleLevel["H4"] = "H4";
        /**
         * Renders `h5` tag.
         * @public
         */
        TitleLevel["H5"] = "H5";
        /**
         * Renders `h6` tag.
         * @public
         */
        TitleLevel["H6"] = "H6";
    })(TitleLevel || (TitleLevel = {}));
    var TitleLevel$1 = TitleLevel;

    /* eslint no-unused-vars: 0 */
    function block0$5(context, tags, suffix) { return Button.effectiveHtml `${this.h1 ? block1$4.call(this, context, tags, suffix) : undefined}${this.h2 ? block2$4.call(this, context, tags, suffix) : undefined}${this.h3 ? block3$4.call(this, context, tags, suffix) : undefined}${this.h4 ? block4$4.call(this, context, tags, suffix) : undefined}${this.h5 ? block5$4.call(this, context, tags, suffix) : undefined}${this.h6 ? block6$3.call(this, context, tags, suffix) : undefined}`; }
    function block1$4(context, tags, suffix) { return Button.effectiveHtml `<h1 class="ui5-title-root"><span id="${Button.l(this._id)}-inner"><slot></slot></span></h1>`; }
    function block2$4(context, tags, suffix) { return Button.effectiveHtml `<h2 class="ui5-title-root"><span id="${Button.l(this._id)}-inner"><slot></slot></span></h2>`; }
    function block3$4(context, tags, suffix) { return Button.effectiveHtml `<h3 class="ui5-title-root"><span id="${Button.l(this._id)}-inner"><slot></slot></span></h3>`; }
    function block4$4(context, tags, suffix) { return Button.effectiveHtml `<h4 class="ui5-title-root"><span id="${Button.l(this._id)}-inner"><slot></slot></span></h4>`; }
    function block5$4(context, tags, suffix) { return Button.effectiveHtml `<h5 class="ui5-title-root"><span id="${Button.l(this._id)}-inner"><slot></slot></span></h5>`; }
    function block6$3(context, tags, suffix) { return Button.effectiveHtml `<h6 class="ui5-title-root"><span id="${Button.l(this._id)}-inner"><slot></slot></span></h6>`; }

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$b = { packageName: "@ui5/webcomponents", fileName: "themes/Title.css.ts", content: `:host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader5Size);font-family:"72override",var(--sapFontHeaderFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host{white-space:pre-line}:host([wrapping-type="None"]){white-space:nowrap}.ui5-title-root,:host ::slotted(*){white-space:inherit}::slotted(*){font-size:inherit;font-family:inherit;text-shadow:inherit}:host([size="H1"]){font-size:var(--sapFontHeader1Size)}:host([size="H2"]){font-size:var(--sapFontHeader2Size)}:host([size="H3"]){font-size:var(--sapFontHeader3Size)}:host([size="H4"]){font-size:var(--sapFontHeader4Size)}:host([size="H5"]){font-size:var(--sapFontHeader5Size)}:host([size="H6"]){font-size:var(--sapFontHeader6Size)}
` };

    var __decorate$5 = this && this.__decorate || (function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return (c > 3 && r && Object.defineProperty(target, key, r), r);
    });
    let Title = class Title extends Button.UI5Element {
      constructor() {
        super(...arguments);
        this.wrappingType = "Normal";
        this.level = "H2";
        this.size = "H5";
      }
      get h1() {
        return this.level === TitleLevel$1.H1;
      }
      get h2() {
        return this.level === TitleLevel$1.H2;
      }
      get h3() {
        return this.level === TitleLevel$1.H3;
      }
      get h4() {
        return this.level === TitleLevel$1.H4;
      }
      get h5() {
        return this.level === TitleLevel$1.H5;
      }
      get h6() {
        return this.level === TitleLevel$1.H6;
      }
    };
    __decorate$5([Button.property()], Title.prototype, "wrappingType", void 0);
    __decorate$5([Button.property()], Title.prototype, "level", void 0);
    __decorate$5([Button.property()], Title.prototype, "size", void 0);
    Title = __decorate$5([Button.customElement({
      tag: "ui5-title",
      renderer: Button.litRender,
      template: block0$5,
      styles: styleData$b
    })], Title);
    Title.define();
    var Title$1 = Title;

    /* eslint no-unused-vars: 0 */
    function block0$4(context, tags, suffix) { return Button.effectiveHtml `<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${o(this.classes.root)}" role="${Button.l(this._role)}" aria-modal="${Button.l(this._ariaModal)}" aria-label="${Button.l(this._ariaLabel)}" aria-labelledby="${Button.l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${styleMap(this.styles.content)}" class="${o(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`; }

    /**
     * Popup accessible roles.
     * @public
     */
    var PopupAccessibleRole;
    (function (PopupAccessibleRole) {
        /**
         * Represents no ARIA role.
         * @public
         */
        PopupAccessibleRole["None"] = "None";
        /**
         * Represents the ARIA role "dialog".
         * @public
         */
        PopupAccessibleRole["Dialog"] = "Dialog";
        /**
         * Represents the ARIA role "alertdialog".
         * @public
         */
        PopupAccessibleRole["AlertDialog"] = "AlertDialog";
    })(PopupAccessibleRole || (PopupAccessibleRole = {}));
    var PopupAccessibleRole$1 = PopupAccessibleRole;

    const OpenedPopupsRegistry = Boot.getSharedResource("OpenedPopupsRegistry", { openedRegistry: [] });
    const addOpenedPopup = (instance, parentPopovers = []) => {
        if (!OpenedPopupsRegistry.openedRegistry.some(popup => popup.instance === instance)) {
            OpenedPopupsRegistry.openedRegistry.push({
                instance,
                parentPopovers,
            });
        }
        _updateTopModalPopup();
        if (OpenedPopupsRegistry.openedRegistry.length === 1) {
            attachGlobalListener();
        }
    };
    const removeOpenedPopup = (instance) => {
        OpenedPopupsRegistry.openedRegistry = OpenedPopupsRegistry.openedRegistry.filter(el => {
            return el.instance !== instance;
        });
        _updateTopModalPopup();
        if (!OpenedPopupsRegistry.openedRegistry.length) {
            detachGlobalListener();
        }
    };
    const getOpenedPopups = () => {
        return [...OpenedPopupsRegistry.openedRegistry];
    };
    const _keydownListener = (event) => {
        if (!OpenedPopupsRegistry.openedRegistry.length) {
            return;
        }
        if (Button.isEscape(event)) {
            event.stopPropagation();
            OpenedPopupsRegistry.openedRegistry[OpenedPopupsRegistry.openedRegistry.length - 1].instance.closePopup(true);
        }
    };
    const attachGlobalListener = () => {
        document.addEventListener("keydown", _keydownListener);
    };
    const detachGlobalListener = () => {
        document.removeEventListener("keydown", _keydownListener);
    };
    const _updateTopModalPopup = () => {
        let popup;
        let hasModal = false;
        for (let i = OpenedPopupsRegistry.openedRegistry.length - 1; i >= 0; i--) {
            popup = OpenedPopupsRegistry.openedRegistry[i].instance;
            if (!hasModal && popup.isModal) {
                popup.isTopModalPopup = true;
                hasModal = true;
            }
            else {
                popup.isTopModalPopup = false;
            }
        }
    };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$a = { packageName: "@ui5/webcomponents", fileName: "themes/Popup.css.ts", content: `:host{min-width:1px;overflow:visible;border:none;inset:unset;margin:0;padding:0}
` };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$9 = { packageName: "@ui5/webcomponents", fileName: "themes/PopupBlockLayer.css.ts", content: `.ui5-block-layer{position:fixed;z-index:-1;display:none;inset:-500px;outline:none;pointer-events:all}
` };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$8 = { packageName: "@ui5/webcomponents", fileName: "themes/PopupGlobal.css.ts", content: `.ui5-popup-scroll-blocker{overflow:hidden}
` };

    var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Popup_1;
    const createBlockingStyle = () => {
        if (!Boot.hasStyle("data-ui5-popup-scroll-blocker")) {
            Boot.createStyle(styleData$8, "data-ui5-popup-scroll-blocker");
        }
    };
    createBlockingStyle();
    const pageScrollingBlockers = new Set();
    /**
     * @class
     * ### Overview
     * Base class for all popup Web Components.
     *
     * If you need to create your own popup-like custom UI5 Web Components.
     *
     * 1. The Popup class handles modality:
     *  - The "isModal" getter can be overridden by derivatives to provide their own conditions when they are modal or not
     *  - Derivatives may call the "blockPageScrolling" and "unblockPageScrolling" static methods to temporarily remove scrollbars on the html element
     *  - Derivatives may call the "openPopup" and "closePopup" methods which handle focus, manage the popup registry and for modal popups, manage the blocking layer
     *
     *  2. Provides blocking layer (relevant for modal popups only):
     *   - Controlled by the "open" and "close" methods
     *
     * 3. The Popup class "traps" focus:
     *  - Derivatives may call the "applyInitialFocus" method (usually when opening, to transfer focus inside the popup)
     *
     * 4. The template of this component exposes two inline partials you can override in derivatives:
     *  - beforeContent (upper part of the box, useful for header/title/close button)
     *  - afterContent (lower part, useful for footer/action buttons)
     * @constructor
     * @extends UI5Element
     * @public
     */
    let Popup = Popup_1 = class Popup extends Button.UI5Element {
        constructor() {
            super();
            /**
             * Defines if the focus should be returned to the previously focused element,
             * when the popup closes.
             * @default false
             * @public
             * @since 1.0.0-rc.8
            */
            this.preventFocusRestore = false;
            /**
             * Allows setting a custom role.
             * @default "Dialog"
             * @public
             * @since 1.10.0
             */
            this.accessibleRole = "Dialog";
            /**
             * Indicates whether initial focus should be prevented.
             * @public
             * @default false
             * @since 2.0.0
             */
            this.preventInitialFocus = false;
            /**
             * Indicates if the element is the top modal popup
             *
             * This property is calculated automatically
             * @private
             * @default false
             */
            this.isTopModalPopup = false;
            /**
             * @private
             */
            this.onPhone = false;
            /**
             * @private
             */
            this.onDesktop = false;
            this._opened = false;
            this._open = false;
            this._resizeHandler = this._resize.bind(this);
            this._getRealDomRef = () => {
                return this.shadowRoot.querySelector("[root-element]");
            };
        }
        onBeforeRendering() {
            this.onPhone = Boot.isPhone();
            this.onDesktop = Boot.isDesktop();
        }
        onAfterRendering() {
            Boot.renderFinished().then(() => {
                this._updateMediaRange();
            });
        }
        onEnterDOM() {
            this.setAttribute("popover", "manual");
            ResizeHandler.register(this, this._resizeHandler);
            if (Boot.isDesktop()) {
                this.setAttribute("desktop", "");
            }
            this.tabIndex = -1;
            if (this.open) {
                this.showPopover();
            }
        }
        onExitDOM() {
            if (this._opened) {
                Popup_1.unblockPageScrolling(this);
                this._removeOpenedPopup();
            }
            ResizeHandler.deregister(this, this._resizeHandler);
        }
        /**
         * Indicates if the element is open
         * @public
         * @default false
         * @since 1.2.0
         */
        set open(value) {
            if (this._open === value) {
                return;
            }
            this._open = value;
            if (value) {
                this.openPopup();
            }
            else {
                this.closePopup();
            }
        }
        get open() {
            return this._open;
        }
        async openPopup() {
            if (this._opened) {
                return;
            }
            const prevented = !this.fireEvent("before-open", {}, true, false);
            if (prevented || this._opened) {
                return;
            }
            this._opened = true;
            if (this.isModal) {
                Popup_1.blockPageScrolling(this);
            }
            this._focusedElementBeforeOpen = getFocusedElement();
            this._show();
            if (this.getDomRef()) {
                this._updateMediaRange();
            }
            this._addOpenedPopup();
            this.open = true;
            // initial focus, if focused element is statically created
            await this.applyInitialFocus();
            await Boot.renderFinished();
            // initial focus, if focused element is dynamically created
            await this.applyInitialFocus();
            if (this.isConnected) {
                this.fireEvent("open", {}, false, false);
            }
        }
        _resize() {
            this._updateMediaRange();
        }
        /**
         * Prevents the user from interacting with the content under the block layer
         */
        _preventBlockLayerFocus(e) {
            e.preventDefault();
        }
        /**
         * Temporarily removes scrollbars from the html element
         * @protected
         */
        static blockPageScrolling(popup) {
            pageScrollingBlockers.add(popup);
            if (pageScrollingBlockers.size !== 1) {
                return;
            }
            document.documentElement.classList.add("ui5-popup-scroll-blocker");
        }
        /**
         * Restores scrollbars on the html element, if needed
         * @protected
         */
        static unblockPageScrolling(popup) {
            pageScrollingBlockers.delete(popup);
            if (pageScrollingBlockers.size !== 0) {
                return;
            }
            document.documentElement.classList.remove("ui5-popup-scroll-blocker");
        }
        _scroll(e) {
            this.fireEvent("scroll", {
                scrollTop: e.target.scrollTop,
                targetRef: e.target,
            });
        }
        _onkeydown(e) {
            const isTabOutAttempt = e.target === this._root && Button.isTabPrevious(e);
            // if the popup is closed, focus is already moved, so Enter keydown may result in click on the newly focused element
            const isEnterOnClosedPopupChild = Button.isEnter(e) && !this.open;
            if (isTabOutAttempt || isEnterOnClosedPopupChild) {
                e.preventDefault();
            }
        }
        _onfocusout(e) {
            // relatedTarget is the element, which will get focus. If no such element exists, focus the root.
            // This happens after the mouse is released in order to not interrupt text selection.
            if (!e.relatedTarget) {
                this._shouldFocusRoot = true;
            }
        }
        _onmousedown(e) {
            if (this.shadowRoot.contains(e.target)) {
                this._shouldFocusRoot = true;
            }
            else {
                this._shouldFocusRoot = false;
            }
        }
        _onmouseup() {
            if (this._shouldFocusRoot) {
                if (Boot.isChrome()) {
                    this._root.focus();
                }
                this._shouldFocusRoot = false;
            }
        }
        /**
         * Focus trapping
         * @private
         */
        async forwardToFirst() {
            const firstFocusable = await getFirstFocusableElement(this);
            if (firstFocusable) {
                firstFocusable.focus();
            }
            else {
                this._root.focus();
            }
        }
        /**
         * Focus trapping
         * @private
         */
        async forwardToLast() {
            const lastFocusable = await getLastFocusableElement(this);
            if (lastFocusable) {
                lastFocusable.focus();
            }
            else {
                this._root.focus();
            }
        }
        /**
         * Use this method to focus the element denoted by "initialFocus", if provided,
         * or the first focusable element otherwise.
         * @protected
         */
        async applyInitialFocus() {
            if (!this.preventInitialFocus) {
                await this.applyFocus();
            }
        }
        /**
         * Focuses the element denoted by `initialFocus`, if provided,
         * or the first focusable element otherwise.
         * @public
         * @returns Promise that resolves when the focus is applied
         */
        async applyFocus() {
            // do nothing if the standard HTML autofocus is used
            if (this.querySelector("[autofocus]")) {
                return;
            }
            await this._waitForDomRef();
            if (this.getRootNode() === this) {
                return;
            }
            let element;
            if (this.initialFocus) {
                element = this.getRootNode().getElementById(this.initialFocus)
                    || document.getElementById(this.initialFocus);
            }
            element = element || await getFirstFocusableElement(this) || this._root; // in case of no focusable content focus the root
            if (element) {
                if (element === this._root) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }
        isFocusWithin() {
            return isFocusedElementWithinNode(this._root);
        }
        _updateMediaRange() {
            this.mediaRange = MediaRange.getCurrentRange(MediaRange.RANGESETS.RANGE_4STEPS, this.getDomRef().offsetWidth);
        }
        /**
         * Adds the popup to the "opened popups registry"
         * @protected
         */
        _addOpenedPopup() {
            addOpenedPopup(this);
        }
        /**
         * Closes the popup.
         */
        closePopup(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
            if (!this._opened) {
                return;
            }
            const prevented = !this.fireEvent("before-close", { escPressed }, true, false);
            if (prevented) {
                return;
            }
            this._opened = false;
            if (this.isModal) {
                Popup_1.unblockPageScrolling(this);
            }
            this.hide();
            this.open = false;
            if (!preventRegistryUpdate) {
                this._removeOpenedPopup();
            }
            if (!this.preventFocusRestore && !preventFocusRestore) {
                this.resetFocus();
            }
            this.fireEvent("close", {}, false, false);
        }
        /**
         * Removes the popup from the "opened popups registry"
         * @protected
         */
        _removeOpenedPopup() {
            removeOpenedPopup(this);
        }
        /**
         * Returns the focus to the previously focused element
         * @protected
         */
        resetFocus() {
            if (!this._focusedElementBeforeOpen) {
                return;
            }
            this._focusedElementBeforeOpen.focus();
            this._focusedElementBeforeOpen = null;
        }
        /**
         * Sets "block" display to the popup. The property can be overriden by derivatives of Popup.
         * @protected
         */
        _show() {
            if (this.isConnected) {
                this.setAttribute("popover", "manual");
                this.showPopover();
            }
        }
        /**
         * Sets "none" display to the popup
         * @protected
         */
        hide() {
            this.isConnected && this.hidePopover();
        }
        /**
         * Ensures ariaLabel is never null or empty string
         * @protected
         */
        get _ariaLabel() {
            return Button.getEffectiveAriaLabelText(this);
        }
        get _root() {
            return this.shadowRoot.querySelector(".ui5-popup-root");
        }
        get _role() {
            return (this.accessibleRole === PopupAccessibleRole$1.None) ? undefined : this.accessibleRole.toLowerCase();
        }
        get _ariaModal() {
            return this.accessibleRole === PopupAccessibleRole$1.None ? undefined : "true";
        }
        get contentDOM() {
            return this.shadowRoot.querySelector(".ui5-popup-content");
        }
        get styles() {
            return {
                root: {},
                content: {},
            };
        }
        get classes() {
            return {
                root: {
                    "ui5-popup-root": true,
                },
                content: {
                    "ui5-popup-content": true,
                },
            };
        }
    };
    __decorate$4([
        Button.property()
    ], Popup.prototype, "initialFocus", void 0);
    __decorate$4([
        Button.property({ type: Boolean })
    ], Popup.prototype, "preventFocusRestore", void 0);
    __decorate$4([
        Button.property()
    ], Popup.prototype, "accessibleName", void 0);
    __decorate$4([
        Button.property()
    ], Popup.prototype, "accessibleNameRef", void 0);
    __decorate$4([
        Button.property()
    ], Popup.prototype, "accessibleRole", void 0);
    __decorate$4([
        Button.property()
    ], Popup.prototype, "mediaRange", void 0);
    __decorate$4([
        Button.property({ type: Boolean })
    ], Popup.prototype, "preventInitialFocus", void 0);
    __decorate$4([
        Button.property({ type: Boolean, noAttribute: true })
    ], Popup.prototype, "isTopModalPopup", void 0);
    __decorate$4([
        Button.slot({ type: HTMLElement, "default": true })
    ], Popup.prototype, "content", void 0);
    __decorate$4([
        Button.property({ type: Boolean })
    ], Popup.prototype, "onPhone", void 0);
    __decorate$4([
        Button.property({ type: Boolean })
    ], Popup.prototype, "onDesktop", void 0);
    __decorate$4([
        Button.property({ type: Boolean })
    ], Popup.prototype, "open", null);
    Popup = Popup_1 = __decorate$4([
        Button.customElement({
            renderer: Button.litRender,
            styles: [styleData$a, styleData$9],
            template: block0$4,
            dependencies: [
                Title$1,
            ],
        })
        /**
         * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
         * @public
         * @allowPreventDefault
         */
        ,
        Button.event("before-open")
        /**
         * Fired after the component is opened. **This event does not bubble.**
         * @public
         */
        ,
        Button.event("open")
        /**
         * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
         * @public
         * @allowPreventDefault
         * @param {boolean} escPressed Indicates that `ESC` key has triggered the event.
         */
        ,
        Button.event("before-close", {
            detail: {
                /**
                 * @public
                 */
                escPressed: {
                    type: Boolean,
                },
            },
        })
        /**
         * Fired after the component is closed. **This event does not bubble.**
         * @public
         */
        ,
        Button.event("close")
        /**
         * Fired whenever the popup content area is scrolled
         * @private
         */
        ,
        Button.event("scroll")
    ], Popup);
    var Popup$1 = Popup;

    /**
     * Popover placements.
     * @public
     */
    var PopoverPlacement;
    (function (PopoverPlacement) {
        /**
         * Popover will be placed at the start of the reference element.
         * @public
         */
        PopoverPlacement["Start"] = "Start";
        /**
         * Popover will be placed at the end of the reference element.
         * @public
         */
        PopoverPlacement["End"] = "End";
        /**
         * Popover will be placed at the top of the reference element.
         * @public
         */
        PopoverPlacement["Top"] = "Top";
        /**
         * Popover will be placed at the bottom of the reference element.
         * @public
         */
        PopoverPlacement["Bottom"] = "Bottom";
    })(PopoverPlacement || (PopoverPlacement = {}));
    var PopoverPlacement$1 = PopoverPlacement;

    /**
     * Popover vertical align types.
     * @public
     */
    var PopoverVerticalAlign;
    (function (PopoverVerticalAlign) {
        /**
         * @public
         */
        PopoverVerticalAlign["Center"] = "Center";
        /**
         * Popover will be placed at the top of the reference control.
         * @public
         */
        PopoverVerticalAlign["Top"] = "Top";
        /**
         * Popover will be placed at the bottom of the reference control.
         * @public
         */
        PopoverVerticalAlign["Bottom"] = "Bottom";
        /**
         * Popover will be streched
         * @public
         */
        PopoverVerticalAlign["Stretch"] = "Stretch";
    })(PopoverVerticalAlign || (PopoverVerticalAlign = {}));
    var PopoverVerticalAlign$1 = PopoverVerticalAlign;

    /**
     * Popover horizontal align types.
     * @public
     */
    var PopoverHorizontalAlign;
    (function (PopoverHorizontalAlign) {
        /**
         * Popover is centered.
         * @public
         */
        PopoverHorizontalAlign["Center"] = "Center";
        /**
         * Popover is aligned with the start of the target.
         * @public
         */
        PopoverHorizontalAlign["Start"] = "Start";
        /**
         * Popover is aligned with the end of the target.
         * @public
         */
        PopoverHorizontalAlign["End"] = "End";
        /**
         * Popover is stretched.
         * @public
         */
        PopoverHorizontalAlign["Stretch"] = "Stretch";
    })(PopoverHorizontalAlign || (PopoverHorizontalAlign = {}));
    var PopoverHorizontalAlign$1 = PopoverHorizontalAlign;

    let updateInterval;
    const intervalTimeout = 300;
    const openedRegistry = [];
    const repositionPopovers = () => {
        openedRegistry.forEach(popover => {
            popover.instance.reposition();
        });
    };
    const closePopoversIfLostFocus = () => {
        if (getActiveElement().tagName === "IFRAME") {
            getRegistry().reverse().forEach(popup => popup.instance.closePopup(false, false, true));
        }
    };
    const runUpdateInterval = () => {
        updateInterval = setInterval(() => {
            repositionPopovers();
            closePopoversIfLostFocus();
        }, intervalTimeout);
    };
    const stopUpdateInterval = () => {
        clearInterval(updateInterval);
    };
    const attachGlobalScrollHandler = () => {
        document.addEventListener("scroll", repositionPopovers, { capture: true });
    };
    const detachGlobalScrollHandler = () => {
        document.removeEventListener("scroll", repositionPopovers, { capture: true });
    };
    const attachScrollHandler = (popover) => {
        popover && popover.shadowRoot.addEventListener("scroll", repositionPopovers, { capture: true });
    };
    const detachScrollHandler = (popover) => {
        popover && popover.shadowRoot.removeEventListener("scroll", repositionPopovers, { capture: true });
    };
    const attachGlobalClickHandler = () => {
        document.addEventListener("mousedown", clickHandler);
    };
    const detachGlobalClickHandler = () => {
        document.removeEventListener("mousedown", clickHandler);
    };
    const clickHandler = (event) => {
        const openedPopups = getOpenedPopups();
        if (openedPopups.length === 0) {
            return;
        }
        const isTopPopupPopover = instanceOfPopover(openedPopups[openedPopups.length - 1].instance);
        if (!isTopPopupPopover) {
            return;
        }
        // loop all open popovers
        for (let i = (openedPopups.length - 1); i !== -1; i--) {
            const popup = openedPopups[i].instance;
            // if popup is modal, opener is clicked, popup is dialog skip closing
            if (popup.isModal || popup.isOpenerClicked(event)) {
                return;
            }
            if (isClickInRect(event, popup.getBoundingClientRect())) {
                break;
            }
            popup.closePopup();
        }
    };
    const addOpenedPopover = (instance) => {
        const parentPopovers = getParentPopoversIfNested(instance);
        addOpenedPopup(instance, parentPopovers);
        openedRegistry.push({
            instance,
            parentPopovers,
        });
        attachScrollHandler(instance);
        if (openedRegistry.length === 1) {
            attachGlobalScrollHandler();
            attachGlobalClickHandler();
            runUpdateInterval();
        }
    };
    const removeOpenedPopover = (instance) => {
        const popoversToClose = [instance];
        for (let i = 0; i < openedRegistry.length; i++) {
            const indexOfCurrentInstance = openedRegistry[i].parentPopovers.indexOf(instance);
            if (openedRegistry[i].parentPopovers.length > 0 && indexOfCurrentInstance > -1) {
                popoversToClose.push(openedRegistry[i].instance);
            }
        }
        for (let i = popoversToClose.length - 1; i >= 0; i--) {
            for (let j = 0; j < openedRegistry.length; j++) {
                let indexOfItemToRemove = -1;
                if (popoversToClose[i] === openedRegistry[j].instance) {
                    indexOfItemToRemove = j;
                }
                if (indexOfItemToRemove >= 0) {
                    removeOpenedPopup(openedRegistry[indexOfItemToRemove].instance);
                    detachScrollHandler(openedRegistry[indexOfItemToRemove].instance);
                    const itemToClose = openedRegistry.splice(indexOfItemToRemove, 1);
                    itemToClose[0].instance.closePopup(false, true);
                }
            }
        }
        if (!openedRegistry.length) {
            detachGlobalScrollHandler();
            detachGlobalClickHandler();
            stopUpdateInterval();
        }
    };
    const getRegistry = () => {
        return openedRegistry;
    };
    const getParentPopoversIfNested = (instance) => {
        let currentElement = instance.parentNode;
        const parentPopovers = [];
        while (currentElement && currentElement.parentNode) {
            for (let i = 0; i < openedRegistry.length; i++) {
                if (currentElement === openedRegistry[i].instance) {
                    parentPopovers.push(currentElement);
                }
            }
            currentElement = currentElement.parentNode;
        }
        return parentPopovers;
    };

    /* eslint no-unused-vars: 0 */
    function block0$3(context, tags, suffix) { return Button.effectiveHtml `<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${o(this.classes.root)}" role="${Button.l(this._role)}" aria-modal="${Button.l(this._ariaModal)}" aria-label="${Button.l(this._ariaLabel)}" aria-labelledby="${Button.l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block1$3.call(this, context, tags, suffix) : undefined}<div style="${styleMap(this.styles.content)}" class="${o(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block4$3.call(this, context, tags, suffix) : undefined}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `; }
    function block1$3(context, tags, suffix) { return Button.effectiveHtml `<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block2$3.call(this, context, tags, suffix) : block3$3.call(this, context, tags, suffix)}</header>`; }
    function block2$3(context, tags, suffix) { return Button.effectiveHtml `<slot name="header"></slot>`; }
    function block3$3(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-title", tags, suffix)} level="H1" class="ui5-popup-header-text">${Button.l(this.headerText)}</${Button.scopeTag("ui5-title", tags, suffix)}>` : Button.effectiveHtml `<ui5-title level="H1" class="ui5-popup-header-text">${Button.l(this.headerText)}</ui5-title>`; }
    function block4$3(context, tags, suffix) { return Button.effectiveHtml `${this.footer.length ? block5$3.call(this, context, tags, suffix) : undefined}`; }
    function block5$3(context, tags, suffix) { return Button.effectiveHtml `<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`; }

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$7 = { packageName: "@ui5/webcomponents", fileName: "themes/PopupsCommon.css.ts", content: `:host{position:fixed;background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v2-3-0_popup_border_radius);min-height:2rem;box-sizing:border-box}:host([open]){display:flex}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;outline:none}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--_ui5-v2-3-0_popup_header_shadow);border-bottom:var(--_ui5-v2-3-0_popup_header_border)}.ui5-popup-content{color:var(--sapTextColor);flex:auto}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-header-root,.ui5-popup-footer-root,:host([header-text]) .ui5-popup-header-text{margin:0;display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v2-3-0_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{min-height:var(--_ui5-v2-3-0_popup_default_header_height);max-height:var(--_ui5-v2-3-0_popup_default_header_height);line-height:var(--_ui5-v2-3-0_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-flex;justify-content:var(--_ui5-v2-3-0_popup_header_prop_header_text_alignment)}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v2-3-0_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([no-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range="S"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-3-0_popup_content_padding_s)}:host([media-range="M"]) .ui5-popup-content,:host([media-range="L"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-3-0_popup_content_padding_m_l)}:host([media-range="XL"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-3-0_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v2-3-0_popup_header_background)}:host([media-range="S"]) .ui5-popup-header-root,:host([media-range="S"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-3-0_popup_header_footer_padding_s);padding-right:var(--_ui5-v2-3-0_popup_header_footer_padding_s)}:host([media-range="M"]) .ui5-popup-header-root,:host([media-range="L"]) .ui5-popup-header-root,:host([media-range="M"]) .ui5-popup-footer-root,:host([media-range="L"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-3-0_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v2-3-0_popup_header_footer_padding_m_l)}:host([media-range="XL"]) .ui5-popup-header-root,:host([media-range="XL"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-3-0_popup_header_footer_padding_xl);padding-right:var(--_ui5-v2-3-0_popup_header_footer_padding_xl)}
` };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$6 = { packageName: "@ui5/webcomponents", fileName: "themes/Popover.css.ts", content: `:host{box-shadow:var(--_ui5-v2-3-0_popover_box_shadow);background-color:var(--_ui5-v2-3-0_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v2-3-0_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v2-3-0_popover_no_arrow_box_shadow)}:host([opened][actual-placement="Top"]){margin-top:var(--_ui5-v2-3-0-popover-margin-bottom)}:host([opened][actual-placement="Bottom"]){margin-top:var(--_ui5-v2-3-0-popover-margin-top)}:host([actual-placement="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5rem}:host([actual-placement="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_upward_arrow_margin)}:host([actual-placement="Start"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement="Start"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_right_arrow_margin)}:host([actual-placement="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_downward_arrow_margin)}:host(:not([actual-placement])) .ui5-popover-arrow,:host([actual-placement="End"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement])) .ui5-popover-arrow:after,:host([actual-placement="End"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-3-0_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v2-3-0_popover_background);box-shadow:var(--_ui5-v2-3-0_popover_box_shadow);transform:rotate(-45deg)}:host([modal])::backdrop{background-color:var(--_ui5-v2-3-0_popup_block_layer_background);opacity:var(--_ui5-v2-3-0_popup_block_layer_opacity)}:host([modal]) .ui5-block-layer{display:block}
` };

    var __decorate$3 = this && this.__decorate || (function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return (c > 3 && r && Object.defineProperty(target, key, r), r);
    });
    var Popover_1;
    const ARROW_SIZE = 8;
    let Popover = Popover_1 = class Popover extends Popup$1 {
      static get VIEWPORT_MARGIN() {
        return 10;
      }
      constructor() {
        super();
        this.placement = "End";
        this.horizontalAlign = "Center";
        this.verticalAlign = "Center";
        this.modal = false;
        this.hideArrow = false;
        this.allowTargetOverlap = false;
        this.disableScrolling = false;
        this.arrowTranslateX = 0;
        this.arrowTranslateY = 0;
        this.actualPlacement = "End";
      }
      set opener(value) {
        if (this._opener === value) {
          return;
        }
        this._opener = value;
        if (value && this.open) {
          this.openPopup();
        }
      }
      get opener() {
        return this._opener;
      }
      async openPopup() {
        if (this._opened) {
          return;
        }
        const opener = this.getOpenerHTMLElement(this.opener);
        if (!opener) {
          console.warn("Valid opener id is required. It must be defined before opening the popover.");
          return;
        }
        if (this.isOpenerOutsideViewport(opener.getBoundingClientRect())) {
          await Boot.renderFinished();
          this.open = false;
          this.fireEvent("close", {}, false, false);
          return;
        }
        this._openerRect = opener.getBoundingClientRect();
        await super.openPopup();
      }
      isOpenerClicked(e) {
        const target = e.target;
        if (target === this._opener) {
          return true;
        }
        const ui5ElementTarget = target;
        if (ui5ElementTarget.getFocusDomRef && ui5ElementTarget.getFocusDomRef() === this._opener) {
          return true;
        }
        return e.composedPath().indexOf(this._opener) > -1;
      }
      _addOpenedPopup() {
        addOpenedPopover(this);
      }
      _removeOpenedPopup() {
        removeOpenedPopover(this);
      }
      getOpenerHTMLElement(opener) {
        if (opener === undefined || opener instanceof HTMLElement) {
          return opener;
        }
        const rootNode = this.getRootNode();
        if (rootNode instanceof Document) {
          return rootNode.getElementById(opener);
        }
        return document.getElementById(opener);
      }
      shouldCloseDueToOverflow(placement, openerRect) {
        const threshold = 32;
        const limits = {
          "Start": openerRect.right,
          "End": openerRect.left,
          "Top": openerRect.top,
          "Bottom": openerRect.bottom
        };
        const opener = this.getOpenerHTMLElement(this.opener);
        const closedPopupParent = getClosedPopupParent(opener);
        let overflowsBottom = false;
        let overflowsTop = false;
        if (closedPopupParent instanceof Popover_1) {
          const contentRect = closedPopupParent.contentDOM.getBoundingClientRect();
          overflowsBottom = openerRect.top > contentRect.top + contentRect.height;
          overflowsTop = openerRect.top + openerRect.height < contentRect.top;
        }
        return limits[placement] < 0 || limits[placement] + threshold > closedPopupParent.innerHeight || overflowsBottom || overflowsTop;
      }
      shouldCloseDueToNoOpener(openerRect) {
        return openerRect.top === 0 && openerRect.bottom === 0 && openerRect.left === 0 && openerRect.right === 0;
      }
      isOpenerOutsideViewport(openerRect) {
        return openerRect.bottom < 0 || openerRect.top > window.innerHeight || openerRect.right < 0 || openerRect.left > window.innerWidth;
      }
      _resize() {
        super._resize();
        if (this.open) {
          this.reposition();
        }
      }
      reposition() {
        this._show();
      }
      async _show() {
        super._show();
        const opener = this.getOpenerHTMLElement(this.opener);
        if (opener && this._isUI5Element(opener) && !opener.getDomRef()) {
          return;
        }
        if (!this._opened) {
          this._showOutsideViewport();
        }
        const popoverSize = this.getPopoverSize();
        let placement;
        if (popoverSize.width === 0 || popoverSize.height === 0) {
          return;
        }
        if (this.open) {
          this._openerRect = opener.getBoundingClientRect();
        }
        if (this._oldPlacement && this.shouldCloseDueToNoOpener(this._openerRect) && this.isFocusWithin()) {
          placement = this._oldPlacement;
        } else {
          placement = this.calcPlacement(this._openerRect, popoverSize);
        }
        if (this._preventRepositionAndClose || this.isOpenerOutsideViewport(this._openerRect)) {
          await this._waitForDomRef();
          return this.closePopup();
        }
        this._oldPlacement = placement;
        this.actualPlacement = placement.placement;
        let left = clamp(this._left, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientWidth - popoverSize.width - Popover_1.VIEWPORT_MARGIN);
        if (this.actualPlacement === PopoverPlacement$1.End) {
          left = Math.max(left, this._left);
        }
        let top = clamp(this._top, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientHeight - popoverSize.height - Popover_1.VIEWPORT_MARGIN);
        if (this.actualPlacement === PopoverPlacement$1.Bottom) {
          top = Math.max(top, this._top);
        }
        this.arrowTranslateX = placement.arrow.x;
        this.arrowTranslateY = placement.arrow.y;
        top = this._adjustForIOSKeyboard(top);
        Object.assign(this.style, {
          top: `${top}px`,
          left: `${left}px`
        });
        if (this.horizontalAlign === PopoverHorizontalAlign$1.Stretch && this._width) {
          this.style.width = this._width;
        }
        if (this.verticalAlign === PopoverVerticalAlign$1.Stretch && this._height) {
          this.style.height = this._height;
        }
      }
      _adjustForIOSKeyboard(top) {
        if (!Boot.isIOS()) {
          return top;
        }
        const actualTop = Math.ceil(this.getBoundingClientRect().top);
        return top + (Number.parseInt(this.style.top || "0") - actualTop);
      }
      _getContainingBlockClientLocation() {
        let parentElement = getParentElement(this);
        while (parentElement) {
          if (isElementContainingBlock(parentElement)) {
            return parentElement.getBoundingClientRect();
          }
          parentElement = getParentElement(parentElement);
        }
        return {
          left: 0,
          top: 0
        };
      }
      getPopoverSize() {
        const rect = this.getBoundingClientRect(), width = rect.width, height = rect.height;
        return {
          width,
          height
        };
      }
      _showOutsideViewport() {
        Object.assign(this.style, {
          top: "-10000px",
          left: "-10000px"
        });
      }
      _isUI5Element(el) {
        return ("isUI5Element" in el);
      }
      get arrowDOM() {
        return this.shadowRoot.querySelector(".ui5-popover-arrow");
      }
      calcPlacement(targetRect, popoverSize) {
        let left = Popover_1.VIEWPORT_MARGIN;
        let top = 0;
        const allowTargetOverlap = this.allowTargetOverlap;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        let maxHeight = clientHeight;
        let maxWidth = clientWidth;
        const placement = this.getActualPlacement(targetRect, popoverSize);
        this._preventRepositionAndClose = this.shouldCloseDueToNoOpener(targetRect) || this.shouldCloseDueToOverflow(placement, targetRect);
        const isVertical = placement === PopoverPlacement$1.Top || placement === PopoverPlacement$1.Bottom;
        if (this.horizontalAlign === PopoverHorizontalAlign$1.Stretch && isVertical) {
          popoverSize.width = targetRect.width;
          this._width = `${targetRect.width}px`;
        } else if (this.verticalAlign === PopoverVerticalAlign$1.Stretch && !isVertical) {
          popoverSize.height = targetRect.height;
          this._height = `${targetRect.height}px`;
        }
        const arrowOffset = this.hideArrow ? 0 : ARROW_SIZE;
        switch (placement) {
          case PopoverPlacement$1.Top:
            left = this.getVerticalLeft(targetRect, popoverSize);
            top = Math.max(targetRect.top - popoverSize.height - arrowOffset, 0);
            if (!allowTargetOverlap) {
              maxHeight = targetRect.top - arrowOffset;
            }
            break;
          case PopoverPlacement$1.Bottom:
            left = this.getVerticalLeft(targetRect, popoverSize);
            top = targetRect.bottom + arrowOffset;
            if (allowTargetOverlap) {
              top = Math.max(Math.min(top, clientHeight - popoverSize.height), 0);
            } else {
              maxHeight = clientHeight - targetRect.bottom - arrowOffset;
            }
            break;
          case PopoverPlacement$1.Start:
            left = Math.max(targetRect.left - popoverSize.width - arrowOffset, 0);
            top = this.getHorizontalTop(targetRect, popoverSize);
            if (!allowTargetOverlap) {
              maxWidth = targetRect.left - arrowOffset;
            }
            break;
          case PopoverPlacement$1.End:
            left = targetRect.left + targetRect.width + arrowOffset;
            top = this.getHorizontalTop(targetRect, popoverSize);
            if (allowTargetOverlap) {
              left = Math.max(Math.min(left, clientWidth - popoverSize.width), 0);
            } else {
              maxWidth = clientWidth - targetRect.right - arrowOffset;
            }
            break;
        }
        if (isVertical) {
          if (popoverSize.width > clientWidth || left < Popover_1.VIEWPORT_MARGIN) {
            left = Popover_1.VIEWPORT_MARGIN;
          } else if (left + popoverSize.width > clientWidth - Popover_1.VIEWPORT_MARGIN) {
            left = clientWidth - Popover_1.VIEWPORT_MARGIN - popoverSize.width;
          }
        } else {
          if (popoverSize.height > clientHeight || top < Popover_1.VIEWPORT_MARGIN) {
            top = Popover_1.VIEWPORT_MARGIN;
          } else if (top + popoverSize.height > clientHeight - Popover_1.VIEWPORT_MARGIN) {
            top = clientHeight - Popover_1.VIEWPORT_MARGIN - popoverSize.height;
          }
        }
        this._maxHeight = Math.round(maxHeight - Popover_1.VIEWPORT_MARGIN);
        this._maxWidth = Math.round(maxWidth - Popover_1.VIEWPORT_MARGIN);
        if (this._left === undefined || Math.abs(this._left - left) > 1.5) {
          this._left = Math.round(left);
        }
        if (this._top === undefined || Math.abs(this._top - top) > 1.5) {
          this._top = Math.round(top);
        }
        const borderRadius = Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));
        const arrowPos = this.getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius);
        return {
          arrow: arrowPos,
          top: this._top,
          left: this._left,
          placement
        };
      }
      getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius) {
        const horizontalAlign = this._actualHorizontalAlign;
        let arrowXCentered = horizontalAlign === PopoverHorizontalAlign$1.Center || horizontalAlign === PopoverHorizontalAlign$1.Stretch;
        if (horizontalAlign === PopoverHorizontalAlign$1.End && left <= targetRect.left) {
          arrowXCentered = true;
        }
        if (horizontalAlign === PopoverHorizontalAlign$1.Start && left + popoverSize.width >= targetRect.left + targetRect.width) {
          arrowXCentered = true;
        }
        let arrowTranslateX = 0;
        if (isVertical && arrowXCentered) {
          arrowTranslateX = targetRect.left + targetRect.width / 2 - left - popoverSize.width / 2;
        }
        let arrowTranslateY = 0;
        if (!isVertical) {
          arrowTranslateY = targetRect.top + targetRect.height / 2 - top - popoverSize.height / 2;
        }
        const safeRangeForArrowY = popoverSize.height / 2 - borderRadius - ARROW_SIZE / 2;
        arrowTranslateY = clamp(arrowTranslateY, -safeRangeForArrowY, safeRangeForArrowY);
        const safeRangeForArrowX = popoverSize.width / 2 - borderRadius - ARROW_SIZE / 2;
        arrowTranslateX = clamp(arrowTranslateX, -safeRangeForArrowX, safeRangeForArrowX);
        return {
          x: Math.round(arrowTranslateX),
          y: Math.round(arrowTranslateY)
        };
      }
      fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) {
        if (targetRect.left > popoverSize.width) {
          return PopoverPlacement$1.Start;
        }
        if (clientWidth - targetRect.right > targetRect.left) {
          return PopoverPlacement$1.End;
        }
        if (clientHeight - targetRect.bottom > popoverSize.height) {
          return PopoverPlacement$1.Bottom;
        }
        if (clientHeight - targetRect.bottom < targetRect.top) {
          return PopoverPlacement$1.Top;
        }
      }
      getActualPlacement(targetRect, popoverSize) {
        const placement = this.placement;
        let actualPlacement = placement;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        switch (placement) {
          case PopoverPlacement$1.Top:
            if (targetRect.top < popoverSize.height && targetRect.top < clientHeight - targetRect.bottom) {
              actualPlacement = PopoverPlacement$1.Bottom;
            }
            break;
          case PopoverPlacement$1.Bottom:
            if (clientHeight - targetRect.bottom < popoverSize.height && clientHeight - targetRect.bottom < targetRect.top) {
              actualPlacement = PopoverPlacement$1.Top;
            }
            break;
          case PopoverPlacement$1.Start:
            if (targetRect.left < popoverSize.width) {
              actualPlacement = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placement;
            }
            break;
          case PopoverPlacement$1.End:
            if (clientWidth - targetRect.right < popoverSize.width) {
              actualPlacement = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placement;
            }
            break;
        }
        return actualPlacement;
      }
      getVerticalLeft(targetRect, popoverSize) {
        const horizontalAlign = this._actualHorizontalAlign;
        let left = Popover_1.VIEWPORT_MARGIN;
        switch (horizontalAlign) {
          case PopoverHorizontalAlign$1.Center:
          case PopoverHorizontalAlign$1.Stretch:
            left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
            break;
          case PopoverHorizontalAlign$1.Start:
            left = targetRect.left;
            break;
          case PopoverHorizontalAlign$1.End:
            left = targetRect.right - popoverSize.width;
            break;
        }
        return left;
      }
      getHorizontalTop(targetRect, popoverSize) {
        let top = 0;
        switch (this.verticalAlign) {
          case PopoverVerticalAlign$1.Center:
          case PopoverVerticalAlign$1.Stretch:
            top = targetRect.top - (popoverSize.height - targetRect.height) / 2;
            break;
          case PopoverVerticalAlign$1.Top:
            top = targetRect.top;
            break;
          case PopoverVerticalAlign$1.Bottom:
            top = targetRect.bottom - popoverSize.height;
            break;
        }
        return top;
      }
      get isModal() {
        return this.modal;
      }
      get _ariaLabelledBy() {
        if (!this._ariaLabel && this._displayHeader) {
          return "ui5-popup-header";
        }
        return undefined;
      }
      get styles() {
        return {
          ...super.styles,
          root: {
            "max-height": this._maxHeight ? `${this._maxHeight}px` : "",
            "max-width": this._maxWidth ? `${this._maxWidth}px` : ""
          },
          arrow: {
            transform: `translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`
          }
        };
      }
      get classes() {
        const allClasses = super.classes;
        allClasses.root["ui5-popover-root"] = true;
        return allClasses;
      }
      get _displayHeader() {
        return !!(this.header.length || this.headerText);
      }
      get _displayFooter() {
        return true;
      }
      get _actualHorizontalAlign() {
        if (this.effectiveDir === "rtl") {
          if (this.horizontalAlign === PopoverHorizontalAlign$1.Start) {
            return PopoverHorizontalAlign$1.End;
          }
          if (this.horizontalAlign === PopoverHorizontalAlign$1.End) {
            return PopoverHorizontalAlign$1.Start;
          }
        }
        return this.horizontalAlign;
      }
    };
    __decorate$3([Button.property()], Popover.prototype, "headerText", void 0);
    __decorate$3([Button.property()], Popover.prototype, "placement", void 0);
    __decorate$3([Button.property()], Popover.prototype, "horizontalAlign", void 0);
    __decorate$3([Button.property()], Popover.prototype, "verticalAlign", void 0);
    __decorate$3([Button.property({
      type: Boolean
    })], Popover.prototype, "modal", void 0);
    __decorate$3([Button.property({
      type: Boolean
    })], Popover.prototype, "hideArrow", void 0);
    __decorate$3([Button.property({
      type: Boolean
    })], Popover.prototype, "allowTargetOverlap", void 0);
    __decorate$3([Button.property({
      type: Boolean
    })], Popover.prototype, "disableScrolling", void 0);
    __decorate$3([Button.property({
      type: Number,
      noAttribute: true
    })], Popover.prototype, "arrowTranslateX", void 0);
    __decorate$3([Button.property({
      type: Number,
      noAttribute: true
    })], Popover.prototype, "arrowTranslateY", void 0);
    __decorate$3([Button.property()], Popover.prototype, "actualPlacement", void 0);
    __decorate$3([Button.property({
      type: Number,
      noAttribute: true
    })], Popover.prototype, "_maxHeight", void 0);
    __decorate$3([Button.property({
      type: Number,
      noAttribute: true
    })], Popover.prototype, "_maxWidth", void 0);
    __decorate$3([Button.slot({
      type: HTMLElement
    })], Popover.prototype, "header", void 0);
    __decorate$3([Button.slot({
      type: HTMLElement
    })], Popover.prototype, "footer", void 0);
    __decorate$3([Button.property({
      converter: DOMReferenceConverter
    })], Popover.prototype, "opener", null);
    Popover = Popover_1 = __decorate$3([Button.customElement({
      tag: "ui5-popover",
      styles: [Popup$1.styles, styleData$7, styleData$6, getEffectiveScrollbarStyle()],
      template: block0$3
    })], Popover);
    const instanceOfPopover = object => {
      return ("opener" in object);
    };
    Popover.define();
    var Popover$1 = Popover;

    /* eslint no-unused-vars: 0 */
    function block0$2(context, tags, suffix) { return Button.effectiveHtml `<div class="ui5-input-root ui5-input-focusable-element" part="root" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><input id="inner" part="input" class="ui5-input-inner" style="${styleMap(this.styles.innerInput)}" type="${Button.l(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${Button.l(this._innerValue)}" placeholder="${Button.l(this._placeholder)}" maxlength="${Button.l(this.maxlength)}" role="${Button.l(this.accInfo.input.role)}" aria-controls="${Button.l(this.accInfo.input.ariaControls)}" aria-invalid="${Button.l(this.accInfo.input.ariaInvalid)}" aria-haspopup="${Button.l(this.accInfo.input.ariaHasPopup)}" aria-describedby="${Button.l(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${Button.l(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${Button.l(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${Button.l(this.accInfo.input.ariaExpanded)}" aria-label="${Button.l(this.accInfo.input.ariaLabel)}" aria-required="${Button.l(this.required)}" autocomplete="off" @input="${this._handleInput}" @change="${this._handleChange}" @select="${this._handleSelect}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${Button.l(this.nativeInputAttributes.step)}" min="${Button.l(this.nativeInputAttributes.min)}" max="${Button.l(this.nativeInputAttributes.max)}" />${this._effectiveShowClearIcon ? block1$2.call(this, context, tags, suffix) : undefined}${this.icon.length ? block2$2.call(this, context, tags, suffix) : undefined}<div class="ui5-input-value-state-icon">${Button.o(this._valueStateInputIcon)}</div>${this._effectiveShowSuggestions ? block3$2.call(this, context, tags, suffix) : undefined}${this.accInfo.input.ariaDescription ? block4$2.call(this, context, tags, suffix) : undefined}${this.hasValueState ? block5$2.call(this, context, tags, suffix) : undefined}</div></div>${this._effectiveShowSuggestions ? block6$2.call(this, context, tags, suffix) : undefined}${this.hasValueStateMessage ? block18.call(this, context, tags, suffix) : undefined} `; }
    function block1$2(context, tags, suffix) { return suffix ? Button.effectiveHtml `<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1"><${Button.scopeTag("ui5-icon", tags, suffix)} part="clear-icon" tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${Button.l(this.clearIconAccessibleName)}"></${Button.scopeTag("ui5-icon", tags, suffix)}></div>` : Button.effectiveHtml `<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1"><ui5-icon part="clear-icon" tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${Button.l(this.clearIconAccessibleName)}"></ui5-icon></div>`; }
    function block2$2(context, tags, suffix) { return Button.effectiveHtml `<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`; }
    function block3$2(context, tags, suffix) { return Button.effectiveHtml `<span id="suggestionsText" class="ui5-hidden-text">${Button.l(this.suggestionsText)}</span><span id="selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="suggestionsCount" class="ui5-hidden-text" aria-live="polite">${Button.l(this.availableSuggestionsCount)}</span>`; }
    function block4$2(context, tags, suffix) { return Button.effectiveHtml `<span id="descr" class="ui5-hidden-text">${Button.l(this.accInfo.input.ariaDescription)}</span>`; }
    function block5$2(context, tags, suffix) { return Button.effectiveHtml `<span id="valueStateDesc" class="ui5-hidden-text">${Button.l(this.ariaValueStateHiddenText)}</span>`; }
    function block6$2(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-responsive-popover", tags, suffix)} class="${o(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${Button.l(this._afterOpenPicker)}" @ui5-close="${Button.l(this._afterClosePicker)}" @ui5-scroll="${Button.l(this._scroll)}" .open=${Button.l(this.open)} .opener=${Button.l(this)} accessible-name="${Button.l(this._popupLabel)}">${this._isPhone ? block7$2.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block12$1.call(this, context, tags, suffix) : undefined}<${Button.scopeTag("ui5-list", tags, suffix)} separators="${Button.l(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${Button.l(this._handleSuggestionItemPress)}" @ui5-selection-change="${Button.l(this._handleSelectionChange)}"><slot></slot></${Button.scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block17.call(this, context, tags, suffix) : undefined}</${Button.scopeTag("ui5-responsive-popover", tags, suffix)}>` : Button.effectiveHtml `<ui5-responsive-popover class="${o(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${Button.l(this._afterOpenPicker)}" @ui5-close="${Button.l(this._afterClosePicker)}" @ui5-scroll="${Button.l(this._scroll)}" .open=${Button.l(this.open)} .opener=${Button.l(this)} accessible-name="${Button.l(this._popupLabel)}">${this._isPhone ? block7$2.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block12$1.call(this, context, tags, suffix) : undefined}<ui5-list separators="${Button.l(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${Button.l(this._handleSuggestionItemPress)}" @ui5-selection-change="${Button.l(this._handleSelectionChange)}"><slot></slot></ui5-list>${this._isPhone ? block17.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>`; }
    function block7$2(context, tags, suffix) { return suffix ? Button.effectiveHtml `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${Button.l(this._headerTitleText)}</span><${Button.scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></${Button.scopeTag("ui5-button", tags, suffix)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${Button.scopeTag("ui5-input", tags, suffix)} class="ui5-input-inner-phone" type="${Button.l(this.inputType)}" .value="${Button.l(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${Button.l(this.placeholder)}" @ui5-input="${Button.l(this._handleInput)}" @ui5-change="${Button.l(this._handleChange)}"></${Button.scopeTag("ui5-input", tags, suffix)}></div></div></div>${this.hasValueStateMessage ? block8$2.call(this, context, tags, suffix) : undefined}` : Button.effectiveHtml `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${Button.l(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${Button.l(this.inputType)}" .value="${Button.l(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${Button.l(this.placeholder)}" @ui5-input="${Button.l(this._handleInput)}" @ui5-change="${Button.l(this._handleChange)}"></ui5-input></div></div></div>${this.hasValueStateMessage ? block8$2.call(this, context, tags, suffix) : undefined}`; }
    function block8$2(context, tags, suffix) { return suffix ? Button.effectiveHtml `<div class="${o(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><${Button.scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${Button.l(this._valueStateMessageInputIcon)}"></${Button.scopeTag("ui5-icon", tags, suffix)}>${this.open ? block9$2.call(this, context, tags, suffix) : undefined}</div>` : Button.effectiveHtml `<div class="${o(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${Button.l(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block9$2.call(this, context, tags, suffix) : undefined}</div>`; }
    function block9$2(context, tags, suffix) { return Button.effectiveHtml `${this.shouldDisplayDefaultValueStateMessage ? block10$2.call(this, context, tags, suffix) : block11$2.call(this, context, tags, suffix)}`; }
    function block10$2(context, tags, suffix) { return Button.effectiveHtml `${Button.l(this.valueStateText)}`; }
    function block11$2(context, tags, suffix) { return Button.effectiveHtml `<slot name="valueStateMessage"></slot>`; }
    function block12$1(context, tags, suffix) { return Button.effectiveHtml `${this.hasValueStateMessage ? block13.call(this, context, tags, suffix) : undefined}`; }
    function block13(context, tags, suffix) { return suffix ? Button.effectiveHtml `<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${o(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><${Button.scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${Button.l(this._valueStateMessageInputIcon)}"></${Button.scopeTag("ui5-icon", tags, suffix)}>${this.open ? block14.call(this, context, tags, suffix) : undefined}</div>` : Button.effectiveHtml `<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${o(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${Button.l(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block14.call(this, context, tags, suffix) : undefined}</div>`; }
    function block14(context, tags, suffix) { return Button.effectiveHtml `${this.shouldDisplayDefaultValueStateMessage ? block15.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}`; }
    function block15(context, tags, suffix) { return Button.effectiveHtml `${Button.l(this.valueStateText)}`; }
    function block16(context, tags, suffix) { return Button.effectiveHtml `<slot name="valueStateMessage"></slot>`; }
    function block17(context, tags, suffix) { return suffix ? Button.effectiveHtml `<div slot="footer" class="ui5-responsive-popover-footer"><${Button.scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePicker}">OK</${Button.scopeTag("ui5-button", tags, suffix)}></div>` : Button.effectiveHtml `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePicker}">OK</ui5-button></div>`; }
    function block18(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${Button.l(this._valueStatePopoverHorizontalAlign)}" .opener=${Button.l(this)} .open=${Button.l(this.valueStateOpen)} @ui5-close="${Button.l(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${o(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${Button.scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${Button.l(this._valueStateMessageInputIcon)}"></${Button.scopeTag("ui5-icon", tags, suffix)}>${this.valueStateOpen ? block19.call(this, context, tags, suffix) : undefined}</div></${Button.scopeTag("ui5-popover", tags, suffix)}>` : Button.effectiveHtml `<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${Button.l(this._valueStatePopoverHorizontalAlign)}" .opener=${Button.l(this)} .open=${Button.l(this.valueStateOpen)} @ui5-close="${Button.l(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${o(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${Button.l(this._valueStateMessageInputIcon)}"></ui5-icon>${this.valueStateOpen ? block19.call(this, context, tags, suffix) : undefined}</div></ui5-popover>`; }
    function block19(context, tags, suffix) { return Button.effectiveHtml `${this.shouldDisplayDefaultValueStateMessage ? block20.call(this, context, tags, suffix) : block21.call(this, context, tags, suffix)}`; }
    function block20(context, tags, suffix) { return Button.effectiveHtml `${Button.l(this.valueStateText)}`; }
    function block21(context, tags, suffix) { return Button.effectiveHtml `<slot name="valueStateMessage"></slot>`; }

    const StartsWith = (value, items, propName) => items.filter(item => (item[propName] || "").toLowerCase().startsWith(value.toLowerCase()));

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$5 = { packageName: "@ui5/webcomponents", fileName: "themes/Input.css.ts", content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-3-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-3-0_input_icon_padding);border-inline-start:var(--_ui5-v2-3-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-3-0_input_icon_border_radius)}.inputIcon[pressed]{background:var(--_ui5-v2-3-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-3-0_select_hover_icon_left_border);color:var(--_ui5-v2-3-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-3-0_select_hover_icon_left_border);color:var(--_ui5-v2-3-0_input_icon_pressed_color)}.inputIcon:not([pressed]):not(:active):hover{background:var(--_ui5-v2-3-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-3-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v2-3-0_input_width);min-width:calc(var(--_ui5-v2-3-0_input_min_width) + (var(--_ui5-v2-3-0-input-icons-count)*var(--_ui5-v2-3-0_input_icon_width)));margin:var(--_ui5-v2-3-0_input_margin_top_bottom) 0;height:var(--_ui5-v2-3-0_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v2-3-0-input-border);border-radius:var(--_ui5-v2-3-0_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v2-3-0_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-3-0_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v2-3-0_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v2-3-0_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v2-3-0_input_focus_outline_color);border-radius:var(--_ui5-v2-3-0_input_focus_border_radius);top:var(--_ui5-v2-3-0_input_focus_offset);bottom:var(--_ui5-v2-3-0_input_focus_offset);left:var(--_ui5-v2-3-0_input_focus_offset);right:var(--_ui5-v2-3-0_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v2-3-0_input_readonly_focus_offset);bottom:var(--_ui5-v2-3-0_input_readonly_focus_offset);left:var(--_ui5-v2-3-0_input_readonly_focus_offset);right:var(--_ui5-v2-3-0_input_readonly_focus_offset);border-radius:var(--_ui5-v2-3-0_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v2-3-0_input_bottom_border_height);transition:var(--_ui5-v2-3-0_input_transition);background-color:var(--_ui5-v2-3-0_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v2-3-0_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v2-3-0_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-3-0-input_disabled_background);border-color:var(--_ui5-v2-3-0_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v2-3-0_input_inner_padding);box-sizing:border-box;min-width:var(--_ui5-v2-3-0_input_min_width);width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-3-0_input_inner_padding_with_icon)}[inner-input][type=search]::-webkit-search-decoration,[inner-input][type=search]::-webkit-search-cancel-button,[inner-input][type=search]::-webkit-search-results-button,[inner-input][type=search]::-webkit-search-results-decoration{display:none}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v2-3-0-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v2-3-0_input_placeholder_style);color:var(--_ui5-v2-3-0_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-3-0_input_placeholder_style);color:var(--_ui5-v2-3-0_input_placeholder_color);padding-right:.125rem}:host([value-state="Negative"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-3-0-input_error_placeholder_color);font-weight:var(--_ui5-v2-3-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Negative"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-3-0-input_error_placeholder_color);font-weight:var(--_ui5-v2-3-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v2-3-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v2-3-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Positive"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-3-0_input_placeholder_color)}:host([value-state="Positive"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-3-0_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-3-0_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-3-0_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v2-3-0_input_border_radius)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-3-0_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-3-0_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v2-3-0_input_hover_border);border-color:var(--_ui5-v2-3-0_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v2-3-0_input_state_border_width)}:host([value-state="Negative"]) [inner-input],:host([value-state="Critical"]) [inner-input]{font-style:var(--_ui5-v2-3-0_input_error_warning_font_style);text-indent:var(--_ui5-v2-3-0_input_error_warning_text_indent)}:host([value-state="Negative"]) [inner-input]{font-weight:var(--_ui5-v2-3-0_input_error_font_weight)}:host([value-state="Critical"]) [inner-input]{font-weight:var(--_ui5-v2-3-0_input_warning_font_weight)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-3-0_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-3-0_input_focused_value_state_error_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_error_border_color)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-3-0_input_focused_value_state_error_focus_outline_color)}:host([value-state="Negative"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-3-0-input-value-state-error-border-botom-color)}:host([value-state="Negative"]:not([readonly]):not([focused]):hover),:host([value-state="Negative"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v2-3-0_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])),:host([value-state="Critical"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v2-3-0_input_error_warning_border_style)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-3-0_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-3-0_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_warning_border_color)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-3-0_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Critical"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-3-0_input_value_state_warning_border_botom_color)}:host([value-state="Critical"]:not([readonly]):not([focused]):hover),:host([value-state="Critical"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-3-0_input_value_state_success_border_color);border-width:var(--_ui5-v2-3-0_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-3-0_input_focused_value_state_success_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_success_border_color)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-3-0_input_focused_value_state_success_focus_outline_color)}:host([value-state="Positive"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-3-0_input_value_state_success_border_botom_color)}:host([value-state="Positive"]:not([readonly]):not([focused]):hover),:host([value-state="Positive"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-3-0_input_value_state_information_border_color);border-width:var(--_ui5-v2-3-0_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-3-0_input_focused_value_state_information_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-3-0_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v2-3-0_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v2-3-0_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-3-0_input_error_warning_icon_padding)}:host([value-state="Negative"][focused]) .inputIcon,:host([value-state="Critical"][focused]) .inputIcon{padding:var(--_ui5-v2-3-0_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-3-0_input_information_icon_padding)}:host([value-state="Information"][focused]) .inputIcon{padding:var(--_ui5-v2-3-0_input_information_focused_icon_padding)}:host([value-state="Negative"]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-3-0_input_error_warning_custom_icon_padding)}:host([value-state="Negative"][focused]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-3-0_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-3-0_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-3-0_input_information_custom_focused_icon_padding)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_error_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_error_pressed_color)}:host([value-state="Negative"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_warning_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_warning_pressed_color)}:host([value-state="Critical"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_information_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_information_pressed_color)}:host([value-state="Information"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_success_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_success_pressed_color)}:host([value-state="Positive"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-3-0_input_icon_wrapper_height);padding:0;width:var(--_ui5-v2-3-0_input_icon_width);min-width:var(--_ui5-v2-3-0_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Positive"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-3-0_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Positive"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-3-0_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}
` };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$4 = { packageName: "@ui5/webcomponents", fileName: "themes/ResponsivePopoverCommon.css.ts", content: `.input-root-phone{flex:1;position:relative;height:var(--_ui5-v2-3-0_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-3-0_input_background_color);border:var(--_ui5-v2-3-0-input-border);border-radius:var(--_ui5-v2-3-0_input_border_radius);box-sizing:border-box}.input-root-phone [inner-input]{padding:0 .5rem;width:100%;height:100%}.input-root-phone [inner-input]:focus{background-color:var(--sapField_Focus_Background)}.input-root-phone:focus-within:before{content:"";position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-3-0_input_focus_border_radius);top:var(--_ui5-v2-3-0_input_focus_offset);bottom:var(--_ui5-v2-3-0_input_focus_offset);left:var(--_ui5-v2-3-0_input_focus_offset);right:var(--_ui5-v2-3-0_input_focus_offset)}.input-root-phone [value-state=Negative] .inputIcon[data-ui5-compact-size],.input-root-phone [value-state=Positive] .inputIcon[data-ui5-compact-size],.input-root-phone [value-state=Critical] .inputIcon[data-ui5-compact-size]{padding:.1875rem .5rem}[inner-input]{background:transparent;color:inherit;border:none;font-style:normal;-webkit-appearance:none;-moz-appearance:textfield;line-height:normal;padding:var(--_ui5-v2-3-0_input_inner_padding);box-sizing:border-box;min-width:3rem;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;border-radius:var(--_ui5-v2-3-0_input_border_radius)}[inner-input]::selection,[inner-input]::-moz-selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}[inner-input]::-webkit-input-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor)}[inner-input]::-moz-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor)}.input-root-phone[value-state]:not([value-state=None]){border-width:var(--_ui5-v2-3-0_input_state_border_width)}.input-root-phone[value-state=Negative] [inner-input],.input-root-phone[value-state=Critical] [inner-input]{font-style:var(--_ui5-v2-3-0_input_error_warning_font_style)}.input-root-phone[value-state=Negative] [inner-input]{font-weight:var(--_ui5-v2-3-0_input_error_font_weight)}.input-root-phone[value-state=Negative]:not([readonly]){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-3-0_input_value_state_error_border_color)}.input-root-phone[value-state=Negative]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-3-0_input_focused_value_state_error_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_error_border_color)}.input-root-phone[value-state=Negative]:not([readonly]):focus-within:before{border-color:var(--_ui5-v2-3-0_input_focused_value_state_error_focus_outline_color)}.input-root-phone[value-state=Negative]:not([readonly]):not([disabled]),.input-root-phone[value-state=Critical]:not([readonly]):not([disabled]),.input-root-phone[value-state=Information]:not([readonly]):not([disabled]){border-style:var(--_ui5-v2-3-0_input_error_warning_border_style)}.input-root-phone[value-state=Critical]:not([readonly]){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-3-0_input_value_state_warning_border_color)}.input-root-phone[value-state=Critical]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-3-0_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_warning_border_color)}.input-root-phone[value-state=Critical]:not([readonly]):focus-within:before{border-color:var(--_ui5-v2-3-0_input_focused_value_state_warning_focus_outline_color)}.input-root-phone[value-state=Positive]:not([readonly]){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-3-0_input_value_state_success_border_color);border-width:var(--_ui5-v2-3-0_input_value_state_success_border_width)}.input-root-phone[value-state=Positive]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-3-0_input_focused_value_state_success_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_success_border_color)}.input-root-phone[value-state=Positive]:not([readonly]):focus-within:before{border-color:var(--_ui5-v2-3-0_input_focused_value_state_success_focus_outline_color)}.input-root-phone[value-state=Information]:not([readonly]){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-3-0_input_value_state_information_border_color);border-width:var(--_ui5-v2-3-0_input_information_border_width)}.input-root-phone[value-state=Information]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-3-0_input_focused_value_state_information_background);border-color:var(--_ui5-v2-3-0_input_focused_value_state_information_border_color)}.ui5-multi-combobox-toggle-button{margin-left:.5rem}.ui5-responsive-popover-header{width:100%;min-height:2.5rem;display:flex;flex-direction:column}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v2-3-0_button_base_min_width))}.ui5-responsive-popover-header .row{box-sizing:border-box;padding:.25rem 1rem;min-height:2.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontHeader5Size)}.ui5-responsive-popover-footer{display:flex;justify-content:flex-end;padding:.25rem 0;width:100%}.ui5-responsive-popover-close-btn{position:absolute;right:1rem}
` };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$3 = { packageName: "@ui5/webcomponents", fileName: "themes/ValueStateMessage.css.ts", content: `.ui5-valuestatemessage-popover{border-radius:var(--_ui5-v2-3-0_value_state_message_popover_border_radius);box-shadow:var(--_ui5-v2-3-0_value_state_message_popover_box_shadow)}.ui5-input-value-state-message-icon{width:var(--_ui5-v2-3-0_value_state_message_icon_width);height:var(--_ui5-v2-3-0_value_state_message_icon_height);display:var(--_ui5-v2-3-0_input_value_state_icon_display);position:absolute;padding-right:.375rem}.ui5-valuestatemessage-root .ui5-input-value-state-message-icon{left:var(--_ui5-v2-3-0_input_value_state_icon_offset)}.ui5-input-value-state-message-icon[name=error]{color:var(--sapNegativeElementColor)}.ui5-input-value-state-message-icon[name=alert]{color:var(--sapCriticalElementColor)}.ui5-input-value-state-message-icon[name=success]{color:var(--sapPositiveElementColor)}.ui5-input-value-state-message-icon[name=information]{color:var(--sapInformativeElementColor)}.ui5-valuestatemessage-root{box-sizing:border-box;display:inline-block;color:var(--sapTextColor);font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);height:auto;padding:var(--_ui5-v2-3-0_value_state_message_padding);overflow:hidden;text-overflow:ellipsis;min-width:6.25rem;border:var(--_ui5-v2-3-0_value_state_message_border);line-height:var(--_ui5-v2-3-0_value_state_message_line_height)}[ui5-responsive-popover] .ui5-valuestatemessage-header,[ui5-popover] .ui5-valuestatemessage-header{min-height:2rem}[ui5-responsive-popover] .ui5-valuestatemessage-header{padding:var(--_ui5-v2-3-0_value_state_header_padding);border:var(--_ui5-v2-3-0_value_state_header_border);border-bottom:var(--_ui5-v2-3-0_value_state_header_border_bottom);flex-grow:1;position:relative}.ui5-valuestatemessage--success{background:var(--sapSuccessBackground)}.ui5-valuestatemessage--warning{background:var(--sapWarningBackground)}.ui5-valuestatemessage--error{background:var(--sapErrorBackground)}.ui5-valuestatemessage--information{background:var(--sapInformationBackground)}.ui5-responsive-popover-header[focused],.ui5-responsive-popover-header:focus{outline-offset:var(--_ui5-v2-3-0_value_state_header_offset);outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(content){padding:0}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(footer){min-height:0}.ui5-valuestatemessage-popover::part(header),.ui5-popover-with-value-state-header::part(header),.ui5-popover-with-value-state-header-phone::part(header){margin-bottom:0}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-root{padding:var(--_ui5-v2-3-0_value_state_message_padding_phone);width:100%}.ui5-popover-with-value-state-header-phone .ui5-input-value-state-message-icon{left:var(--_ui5-v2-3-0_value_state_message_icon_offset_phone)}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-header{position:relative;flex:none;top:0;left:0}.ui5-popover-with-value-state-header-phone::part(content){padding:0;overflow:hidden;display:flex;flex-direction:column}.ui5-popover-with-value-state-header-phone [ui5-list]{overflow:auto}[ui5-responsive-popover] .ui5-valuestatemessage--error{box-shadow:var(--_ui5-v2-3-0_value_state_header_box_shadow_error)}[ui5-responsive-popover] .ui5-valuestatemessage--information{box-shadow:var(--_ui5-v2-3-0_value_state_header_box_shadow_information)}[ui5-responsive-popover] .ui5-valuestatemessage--success{box-shadow:var(--_ui5-v2-3-0_value_state_header_box_shadow_success)}[ui5-responsive-popover] .ui5-valuestatemessage--warning{box-shadow:var(--_ui5-v2-3-0_value_state_header_box_shadow_warning)}[ui5-responsive-popover].ui5-popover-with-value-state-header .ui5-valuestatemessage-root:has(+[ui5-list]:empty){box-shadow:none}
` };

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$2 = { packageName: "@ui5/webcomponents", fileName: "themes/Suggestions.css.ts", content: `.ui5-suggestions-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-suggestions-popover::part(header),.ui5-suggestions-popover::part(content){padding:0}.ui5-suggestions-popover::part(footer){padding:0 1rem}.input-root-phone.native-input-wrapper{display:contents}.input-root-phone.native-input-wrapper:before{display:none}.native-input-wrapper .ui5-input-inner-phone{margin:0}
` };

    /* eslint no-unused-vars: 0 */
    function block0$1(context, tags, suffix) { return Button.effectiveHtml `${this._isPhone ? block1$1.call(this, context, tags, suffix) : block7$1.call(this, context, tags, suffix)}`; }
    function block1$1(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-dialog", tags, suffix)} root-element accessible-name=${Button.l(this.accessibleName)} accessible-name-ref=${Button.l(this.accessibleNameRef)} accessible-role=${Button.l(this.accessibleRole)} stretch ?prevent-initial-focus="${this.preventInitialFocus}" initial-focus="${Button.l(this.initialFocus)}" @ui5-before-open="${Button.l(this._beforeDialogOpen)}" @ui5-open="${Button.l(this._propagateDialogEvent)}" @ui5-before-close="${Button.l(this._propagateDialogEvent)}" @ui5-close="${Button.l(this._afterDialogClose)}" exportparts="content, header, footer" .open=${Button.l(this.open)}>${!this._hideHeader ? block2$1.call(this, context, tags, suffix) : undefined}<slot></slot><slot slot="footer" name="footer"></slot></${Button.scopeTag("ui5-dialog", tags, suffix)}>` : Button.effectiveHtml `<ui5-dialog root-element accessible-name=${Button.l(this.accessibleName)} accessible-name-ref=${Button.l(this.accessibleNameRef)} accessible-role=${Button.l(this.accessibleRole)} stretch ?prevent-initial-focus="${this.preventInitialFocus}" initial-focus="${Button.l(this.initialFocus)}" @ui5-before-open="${Button.l(this._beforeDialogOpen)}" @ui5-open="${Button.l(this._propagateDialogEvent)}" @ui5-before-close="${Button.l(this._propagateDialogEvent)}" @ui5-close="${Button.l(this._afterDialogClose)}" exportparts="content, header, footer" .open=${Button.l(this.open)}>${!this._hideHeader ? block2$1.call(this, context, tags, suffix) : undefined}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`; }
    function block2$1(context, tags, suffix) { return Button.effectiveHtml `${this.header.length ? block3$1.call(this, context, tags, suffix) : block4$1.call(this, context, tags, suffix)}`; }
    function block3$1(context, tags, suffix) { return Button.effectiveHtml `<slot slot="header" name="header"></slot>`; }
    function block4$1(context, tags, suffix) { return Button.effectiveHtml `<div class="${o(this.classes.header)}" slot="header">${this.headerText ? block5$1.call(this, context, tags, suffix) : undefined}${!this._hideCloseButton ? block6$1.call(this, context, tags, suffix) : undefined}</div>`; }
    function block5$1(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-title", tags, suffix)} level="H1" wrapping-type="None" class="ui5-popup-header-text ui5-responsive-popover-header-text">${Button.l(this.headerText)}</${Button.scopeTag("ui5-title", tags, suffix)}>` : Button.effectiveHtml `<ui5-title level="H1" wrapping-type="None" class="ui5-popup-header-text ui5-responsive-popover-header-text">${Button.l(this.headerText)}</ui5-title>`; }
    function block6$1(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" accessible-name="${Button.l(this._closeDialogAriaLabel)}" @click="${this.closePopup}"></${Button.scopeTag("ui5-button", tags, suffix)}>` : Button.effectiveHtml `<ui5-button icon="decline" design="Transparent" accessible-name="${Button.l(this._closeDialogAriaLabel)}" @click="${this.closePopup}"></ui5-button>`; }
    function block7$1(context, tags, suffix) { return Button.effectiveHtml `<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${o(this.classes.root)}" role="${Button.l(this._role)}" aria-modal="${Button.l(this._ariaModal)}" aria-label="${Button.l(this._ariaLabel)}" aria-labelledby="${Button.l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block8$1.call(this, context, tags, suffix) : undefined}<div style="${styleMap(this.styles.content)}" class="${o(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block11$1.call(this, context, tags, suffix) : undefined}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`; }
    function block8$1(context, tags, suffix) { return Button.effectiveHtml `<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block9$1.call(this, context, tags, suffix) : block10$1.call(this, context, tags, suffix)}</header>`; }
    function block9$1(context, tags, suffix) { return Button.effectiveHtml `<slot name="header"></slot>`; }
    function block10$1(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-title", tags, suffix)} level="H1" class="ui5-popup-header-text">${Button.l(this.headerText)}</${Button.scopeTag("ui5-title", tags, suffix)}>` : Button.effectiveHtml `<ui5-title level="H1" class="ui5-popup-header-text">${Button.l(this.headerText)}</ui5-title>`; }
    function block11$1(context, tags, suffix) { return Button.effectiveHtml `${this.footer.length ? block12.call(this, context, tags, suffix) : undefined}`; }
    function block12(context, tags, suffix) { return Button.effectiveHtml `<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`; }

    const name$1 = "resize-corner";
    const pathData$1 = "M384 160v32q0 12-10 22L182 406q-10 10-22 10h-32zM224 416l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z";
    const ltr$1 = false;
    const collection$1 = "SAP-icons-v4";
    const packageName$1 = "@ui5/webcomponents-icons";

    Button.registerIcon(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

    const name = "resize-corner";
    const pathData = "M282 416q-11 0-18.5-7.5T256 390t7-18l109-109q7-7 18-7t18.5 7.5T416 282t-7 18L300 409q-7 7-18 7zm-160 0q-11 0-18.5-7.5T96 390t7-18l269-269q7-7 18-7t18.5 7.5T416 122t-7 18L140 409q-7 7-18 7z";
    const ltr = false;
    const collection = "SAP-icons-v5";
    const packageName = "@ui5/webcomponents-icons";

    Button.registerIcon(name, { pathData, ltr, collection, packageName });

    /* eslint no-unused-vars: 0 */
    function block0(context, tags, suffix) { return Button.effectiveHtml `<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${o(this.classes.root)}" role="${Button.l(this._role)}" aria-modal="${Button.l(this._ariaModal)}" aria-label="${Button.l(this._ariaLabel)}" aria-labelledby="${Button.l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader ? block1.call(this, context, tags, suffix) : undefined}<div style="${styleMap(this.styles.content)}" class="${o(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length ? block10.call(this, context, tags, suffix) : undefined}${this._showResizeHandle ? block11.call(this, context, tags, suffix) : undefined}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `; }
    function block1(context, tags, suffix) { return Button.effectiveHtml `<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${Button.l(this.effectiveAriaDescribedBy)} aria-roledescription=${Button.l(this.ariaRoleDescriptionHeaderText)} tabindex="${Button.l(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${Button.l(this.state)}">${this.hasValueState ? block2.call(this, context, tags, suffix) : undefined}${this.header.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}${this.resizable ? block5.call(this, context, tags, suffix) : block8.call(this, context, tags, suffix)}</div></header>`; }
    function block2(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-icon", tags, suffix)} class="ui5-dialog-value-state-icon" name="${Button.l(this._dialogStateIcon)}"></${Button.scopeTag("ui5-icon", tags, suffix)}>` : Button.effectiveHtml `<ui5-icon class="ui5-dialog-value-state-icon" name="${Button.l(this._dialogStateIcon)}"></ui5-icon>`; }
    function block3(context, tags, suffix) { return Button.effectiveHtml `<slot name="header"></slot>`; }
    function block4(context, tags, suffix) { return suffix ? Button.effectiveHtml `<${Button.scopeTag("ui5-title", tags, suffix)} level="H1" id="ui5-popup-header-text" class="ui5-popup-header-text">${Button.l(this.headerText)}</${Button.scopeTag("ui5-title", tags, suffix)}>` : Button.effectiveHtml `<ui5-title level="H1" id="ui5-popup-header-text" class="ui5-popup-header-text">${Button.l(this.headerText)}</ui5-title>`; }
    function block5(context, tags, suffix) { return Button.effectiveHtml `${this.draggable ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}`; }
    function block6(context, tags, suffix) { return Button.effectiveHtml `<span id="${Button.l(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${Button.l(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`; }
    function block7(context, tags, suffix) { return Button.effectiveHtml `<span id="${Button.l(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${Button.l(this.ariaDescribedByHeaderTextResizable)}</span>`; }
    function block8(context, tags, suffix) { return Button.effectiveHtml `${this.draggable ? block9.call(this, context, tags, suffix) : undefined}`; }
    function block9(context, tags, suffix) { return Button.effectiveHtml `<span id="${Button.l(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${Button.l(this.ariaDescribedByHeaderTextDraggable)}</span>`; }
    function block10(context, tags, suffix) { return Button.effectiveHtml `<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`; }
    function block11(context, tags, suffix) { return suffix ? Button.effectiveHtml `<div class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"><${Button.scopeTag("ui5-icon", tags, suffix)} name="resize-corner"></${Button.scopeTag("ui5-icon", tags, suffix)}></div>` : Button.effectiveHtml `<div class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"><ui5-icon name="resize-corner"></ui5-icon></div>`; }

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData$1 = { packageName: "@ui5/webcomponents", fileName: "themes/Dialog.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}::slotted([slot="header"]){max-width:100%}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v2-3-0_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Negative"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Positive"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Critical"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Negative"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0_dialog_header_information_state_icon_color)}:host([state="Positive"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0_dialog_header_success_state_icon_color)}:host([state="Critical"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}:host([desktop]) .ui5-popup-header-root:focus:after,.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5-v2-3-0_dialog_header_focus_left_offset);bottom:var(--_ui5-v2-3-0_dialog_header_focus_bottom_offset);right:var(--_ui5-v2-3-0_dialog_header_focus_right_offset);top:var(--_ui5-v2-3-0_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-3-0_dialog_header_border_radius) var(--_ui5-v2-3-0_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v2-3-0_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:-.5rem;inset-inline-end:-.5rem;cursor:var(--_ui5-v2-3-0_dialog_resize_cursor);width:1.5rem;height:1.5rem;border-radius:50%}.ui5-popup-resize-handle [ui5-icon]{color:var(--sapButton_Lite_TextColor)}::slotted([slot="footer"]){height:var(--_ui5-v2-3-0_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}::slotted([slot="footer"][ui5-toolbar]){border:0}:host::backdrop{background-color:var(--_ui5-v2-3-0_popup_block_layer_background);opacity:var(--_ui5-v2-3-0_popup_block_layer_opacity)}.ui5-block-layer{display:block}
` };

    var __decorate$2 = this && this.__decorate || (function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return (c > 3 && r && Object.defineProperty(target, key, r), r);
    });
    var Dialog_1;
    const STEP_SIZE = 16;
    const ICON_PER_STATE = {
      [ValueState$1.Negative]: "error",
      [ValueState$1.Critical]: "alert",
      [ValueState$1.Positive]: "sys-enter-2",
      [ValueState$1.Information]: "information"
    };
    let Dialog = Dialog_1 = class Dialog extends Popup$1 {
      constructor() {
        super();
        this.stretch = false;
        this.draggable = false;
        this.resizable = false;
        this.state = "None";
        this._draggedOrResized = false;
        this._revertSize = () => {
          Object.assign(this.style, {
            top: "",
            left: "",
            width: "",
            height: ""
          });
        };
        this._screenResizeHandler = this._screenResize.bind(this);
        this._dragMouseMoveHandler = this._onDragMouseMove.bind(this);
        this._dragMouseUpHandler = this._onDragMouseUp.bind(this);
        this._resizeMouseMoveHandler = this._onResizeMouseMove.bind(this);
        this._resizeMouseUpHandler = this._onResizeMouseUp.bind(this);
        this._dragStartHandler = this._handleDragStart.bind(this);
      }
      static _isHeader(element) {
        return element.classList.contains("ui5-popup-header-root") || element.getAttribute("slot") === "header";
      }
      get isModal() {
        return true;
      }
      get _ariaLabelledBy() {
        let ariaLabelledById;
        if (this.headerText && !this._ariaLabel) {
          ariaLabelledById = "ui5-popup-header-text";
        }
        return ariaLabelledById;
      }
      get ariaRoleDescriptionHeaderText() {
        return this.resizable || this.draggable ? Dialog_1.i18nBundle.getText(Button.DIALOG_HEADER_ARIA_ROLE_DESCRIPTION) : undefined;
      }
      get effectiveAriaDescribedBy() {
        return this.resizable || this.draggable ? `${this._id}-descr` : undefined;
      }
      get ariaDescribedByHeaderTextResizable() {
        return Dialog_1.i18nBundle.getText(Button.DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE);
      }
      get ariaDescribedByHeaderTextDraggable() {
        return Dialog_1.i18nBundle.getText(Button.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE);
      }
      get ariaDescribedByHeaderTextDraggableAndResizable() {
        return Dialog_1.i18nBundle.getText(Button.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE);
      }
      get _displayHeader() {
        return this.header.length || this.headerText || this.draggable || this.resizable;
      }
      get _movable() {
        return !this.stretch && this.onDesktop && (this.draggable || this.resizable);
      }
      get _headerTabIndex() {
        return this._movable ? "0" : undefined;
      }
      get _showResizeHandle() {
        return this.resizable && this.onDesktop;
      }
      get _minHeight() {
        let minHeight = Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);
        const header = this._root.querySelector(".ui5-popup-header-root");
        if (header) {
          minHeight += header.offsetHeight;
        }
        const footer = this._root.querySelector(".ui5-popup-footer-root");
        if (footer) {
          minHeight += footer.offsetHeight;
        }
        return minHeight;
      }
      get hasValueState() {
        return this.state !== ValueState$1.None;
      }
      get _dialogStateIcon() {
        return ICON_PER_STATE[this.state];
      }
      get _role() {
        if (this.accessibleRole === PopupAccessibleRole$1.None) {
          return undefined;
        }
        if (this.state === ValueState$1.Negative || this.state === ValueState$1.Critical) {
          return PopupAccessibleRole$1.AlertDialog.toLowerCase();
        }
        return this.accessibleRole.toLowerCase();
      }
      _show() {
        super._show();
        this._center();
      }
      onBeforeRendering() {
        super.onBeforeRendering();
        this._isRTL = this.effectiveDir === "rtl";
      }
      onEnterDOM() {
        super.onEnterDOM();
        this._attachScreenResizeHandler();
        this.addEventListener("dragstart", this._dragStartHandler);
      }
      onExitDOM() {
        super.onExitDOM();
        this._detachScreenResizeHandler();
        this.removeEventListener("dragstart", this._dragStartHandler);
      }
      _resize() {
        super._resize();
        if (!this._draggedOrResized) {
          this._center();
        }
      }
      _screenResize() {
        this._center();
      }
      _attachScreenResizeHandler() {
        if (!this._screenResizeHandlerAttached) {
          window.addEventListener("resize", this._screenResizeHandler);
          this._screenResizeHandlerAttached = true;
        }
      }
      _detachScreenResizeHandler() {
        if (this._screenResizeHandlerAttached) {
          window.removeEventListener("resize", this._screenResizeHandler);
          this._screenResizeHandlerAttached = false;
        }
      }
      _center() {
        const height = window.innerHeight - this.offsetHeight, width = window.innerWidth - this.offsetWidth;
        Object.assign(this.style, {
          top: `${Math.round(height / 2)}px`,
          left: `${Math.round(width / 2)}px`
        });
      }
      _onDragMouseDown(e) {
        if (!this._movable || !this.draggable || !Dialog_1._isHeader(e.target)) {
          return;
        }
        const {top, left} = this.getBoundingClientRect();
        const {width, height} = window.getComputedStyle(this);
        Object.assign(this.style, {
          top: `${top}px`,
          left: `${left}px`,
          width: `${Math.round(Number.parseFloat(width) * 100) / 100}px`,
          height: `${Math.round(Number.parseFloat(height) * 100) / 100}px`
        });
        this._x = e.clientX;
        this._y = e.clientY;
        this._draggedOrResized = true;
        this._attachMouseDragHandlers();
      }
      _onDragMouseMove(e) {
        e.preventDefault();
        const {clientX, clientY} = e;
        const calcX = this._x - clientX;
        const calcY = this._y - clientY;
        const {left, top} = this.getBoundingClientRect();
        Object.assign(this.style, {
          left: `${Math.floor(left - calcX)}px`,
          top: `${Math.floor(top - calcY)}px`
        });
        this._x = clientX;
        this._y = clientY;
      }
      _onDragMouseUp() {
        delete this._x;
        delete this._y;
        this._detachMouseDragHandlers();
      }
      _onDragOrResizeKeyDown(e) {
        if (!this._movable || !Dialog_1._isHeader(e.target)) {
          return;
        }
        if (this.draggable && [Button.isUp, Button.isDown, Button.isLeft, Button.isRight].some(key => key(e))) {
          this._dragWithEvent(e);
          return;
        }
        if (this.resizable && [Button.isUpShift, Button.isDownShift, Button.isLeftShift, Button.isRightShift].some(key => key(e))) {
          this._resizeWithEvent(e);
        }
      }
      _dragWithEvent(e) {
        const {top, left, width, height} = this.getBoundingClientRect();
        let newPos = 0;
        let posDirection = "top";
        switch (true) {
          case Button.isUp(e):
            newPos = top - STEP_SIZE;
            posDirection = "top";
            break;
          case Button.isDown(e):
            newPos = top + STEP_SIZE;
            posDirection = "top";
            break;
          case Button.isLeft(e):
            newPos = left - STEP_SIZE;
            posDirection = "left";
            break;
          case Button.isRight(e):
            newPos = left + STEP_SIZE;
            posDirection = "left";
            break;
        }
        newPos = clamp(newPos, 0, posDirection === "left" ? window.innerWidth - width : window.innerHeight - height);
        this.style[posDirection] = `${newPos}px`;
      }
      _resizeWithEvent(e) {
        this._draggedOrResized = true;
        this.addEventListener("ui5-before-close", this._revertSize, {
          once: true
        });
        const {top, left} = this.getBoundingClientRect(), style = window.getComputedStyle(this), minWidth = Number.parseFloat(style.minWidth), maxWidth = window.innerWidth - left, maxHeight = window.innerHeight - top;
        let width = Number.parseFloat(style.width), height = Number.parseFloat(style.height);
        switch (true) {
          case Button.isUpShift(e):
            height -= STEP_SIZE;
            break;
          case Button.isDownShift(e):
            height += STEP_SIZE;
            break;
          case Button.isLeftShift(e):
            width -= STEP_SIZE;
            break;
          case Button.isRightShift(e):
            width += STEP_SIZE;
            break;
        }
        width = clamp(width, minWidth, maxWidth);
        height = clamp(height, this._minHeight, maxHeight);
        Object.assign(this.style, {
          width: `${width}px`,
          height: `${height}px`
        });
      }
      _attachMouseDragHandlers() {
        window.addEventListener("mousemove", this._dragMouseMoveHandler);
        window.addEventListener("mouseup", this._dragMouseUpHandler);
      }
      _detachMouseDragHandlers() {
        window.removeEventListener("mousemove", this._dragMouseMoveHandler);
        window.removeEventListener("mouseup", this._dragMouseUpHandler);
      }
      _onResizeMouseDown(e) {
        if (!this._movable || !this.resizable) {
          return;
        }
        e.preventDefault();
        const {top, left} = this.getBoundingClientRect();
        const {width, height, minWidth} = window.getComputedStyle(this);
        this._initialX = e.clientX;
        this._initialY = e.clientY;
        this._initialWidth = Number.parseFloat(width);
        this._initialHeight = Number.parseFloat(height);
        this._initialTop = top;
        this._initialLeft = left;
        this._minWidth = Number.parseFloat(minWidth);
        this._cachedMinHeight = this._minHeight;
        Object.assign(this.style, {
          top: `${top}px`,
          left: `${left}px`
        });
        this._draggedOrResized = true;
        this._attachMouseResizeHandlers();
      }
      _onResizeMouseMove(e) {
        const {clientX, clientY} = e;
        let newWidth, newLeft;
        if (this._isRTL) {
          newWidth = clamp(this._initialWidth - (clientX - this._initialX), this._minWidth, this._initialLeft + this._initialWidth);
          newLeft = clamp(this._initialLeft + (clientX - this._initialX), 0, this._initialX + this._initialWidth - this._minWidth);
        } else {
          newWidth = clamp(this._initialWidth + (clientX - this._initialX), this._minWidth, window.innerWidth - this._initialLeft);
        }
        const newHeight = clamp(this._initialHeight + (clientY - this._initialY), this._cachedMinHeight, window.innerHeight - this._initialTop);
        Object.assign(this.style, {
          height: `${newHeight}px`,
          width: `${newWidth}px`,
          left: newLeft ? `${newLeft}px` : undefined
        });
      }
      _onResizeMouseUp() {
        delete this._initialX;
        delete this._initialY;
        delete this._initialWidth;
        delete this._initialHeight;
        delete this._initialTop;
        delete this._initialLeft;
        delete this._minWidth;
        delete this._cachedMinHeight;
        this._detachMouseResizeHandlers();
      }
      _handleDragStart(e) {
        if (this.draggable) {
          e.preventDefault();
        }
      }
      _attachMouseResizeHandlers() {
        window.addEventListener("mousemove", this._resizeMouseMoveHandler);
        window.addEventListener("mouseup", this._resizeMouseUpHandler);
        this.addEventListener("ui5-before-close", this._revertSize, {
          once: true
        });
      }
      _detachMouseResizeHandlers() {
        window.removeEventListener("mousemove", this._resizeMouseMoveHandler);
        window.removeEventListener("mouseup", this._resizeMouseUpHandler);
      }
    };
    __decorate$2([Button.property()], Dialog.prototype, "headerText", void 0);
    __decorate$2([Button.property({
      type: Boolean
    })], Dialog.prototype, "stretch", void 0);
    __decorate$2([Button.property({
      type: Boolean
    })], Dialog.prototype, "draggable", void 0);
    __decorate$2([Button.property({
      type: Boolean
    })], Dialog.prototype, "resizable", void 0);
    __decorate$2([Button.property()], Dialog.prototype, "state", void 0);
    __decorate$2([Button.slot()], Dialog.prototype, "header", void 0);
    __decorate$2([Button.slot()], Dialog.prototype, "footer", void 0);
    __decorate$2([Button.i18n("@ui5/webcomponents")], Dialog, "i18nBundle", void 0);
    Dialog = Dialog_1 = __decorate$2([Button.customElement({
      tag: "ui5-dialog",
      template: block0,
      styles: [Popup$1.styles, styleData$7, styleData$1, getEffectiveScrollbarStyle()],
      dependencies: [Button.Icon, ...Popup$1.dependencies]
    })], Dialog);
    Dialog.define();
    var Dialog$1 = Dialog;

    Boot.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => Button.styleData);
    Boot.registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => Button.styleData$1);
    const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ResponsivePopover.css.ts", content: `:host{--_ui5-v2-3-0_input_width: 100%;min-width:6.25rem;min-height:2rem}:host([on-phone]){display:contents}.ui5-responsive-popover-header{height:var(--_ui5-v2-3-0-responsive_popover_header_height);display:flex;justify-content:var(--_ui5-v2-3-0_popup_header_prop_header_text_alignment);align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v2-3-0_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}
` };

    var __decorate$1 = this && this.__decorate || (function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return (c > 3 && r && Object.defineProperty(target, key, r), r);
    });
    var ResponsivePopover_1;
    let ResponsivePopover = ResponsivePopover_1 = class ResponsivePopover extends Popover$1 {
      constructor() {
        super();
        this.contentOnlyOnDesktop = false;
        this._hideHeader = false;
        this._hideCloseButton = false;
      }
      async openPopup() {
        if (!Boot.isPhone()) {
          await super.openPopup();
        } else if (this._dialog) {
          this._dialog.open = true;
        }
      }
      async _show() {
        if (!Boot.isPhone()) {
          return super._show();
        }
      }
      closePopup(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
        if (!Boot.isPhone()) {
          super.closePopup(escPressed, preventRegistryUpdate, preventFocusRestore);
        } else {
          this._dialog?.closePopup(escPressed, preventRegistryUpdate, preventFocusRestore);
        }
      }
      toggle(opener) {
        if (this.open) {
          this.closePopup();
          return;
        }
        this.opener = opener;
        this.open = true;
      }
      get classes() {
        const allClasses = super.classes;
        allClasses.header = {
          "ui5-responsive-popover-header": true,
          "ui5-responsive-popover-header-no-title": !this.headerText
        };
        return allClasses;
      }
      get _dialog() {
        return this.shadowRoot.querySelector("[ui5-dialog]");
      }
      get contentDOM() {
        return Boot.isPhone() ? this._dialog.contentDOM : super.contentDOM;
      }
      get _isPhone() {
        return Boot.isPhone();
      }
      get _displayHeader() {
        return (Boot.isPhone() || !this.contentOnlyOnDesktop) && super._displayHeader;
      }
      get _displayFooter() {
        return Boot.isPhone() || !this.contentOnlyOnDesktop;
      }
      get _closeDialogAriaLabel() {
        return ResponsivePopover_1.i18nBundle.getText(Button.RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON);
      }
      _beforeDialogOpen(e) {
        this._opened = true;
        this.open = true;
        this._propagateDialogEvent(e);
      }
      _afterDialogClose(e) {
        this._opened = false;
        this.open = false;
        this._propagateDialogEvent(e);
      }
      _propagateDialogEvent(e) {
        const type = e.type.replace("ui5-", "");
        this.fireEvent(type, e.detail);
      }
      get isModal() {
        if (!Boot.isPhone()) {
          return super.isModal;
        }
        return this._dialog.isModal;
      }
    };
    __decorate$1([Button.property({
      type: Boolean
    })], ResponsivePopover.prototype, "contentOnlyOnDesktop", void 0);
    __decorate$1([Button.property({
      type: Boolean
    })], ResponsivePopover.prototype, "_hideHeader", void 0);
    __decorate$1([Button.property({
      type: Boolean
    })], ResponsivePopover.prototype, "_hideCloseButton", void 0);
    __decorate$1([Button.i18n("@ui5/webcomponents")], ResponsivePopover, "i18nBundle", void 0);
    ResponsivePopover = ResponsivePopover_1 = __decorate$1([Button.customElement({
      tag: "ui5-responsive-popover",
      styles: [Popover$1.styles, styleData],
      template: block0$1,
      dependencies: [...Popover$1.dependencies, Button.Button, Dialog$1]
    })], ResponsivePopover);
    ResponsivePopover.define();
    var ResponsivePopover$1 = ResponsivePopover;

    var __decorate = this && this.__decorate || (function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return (c > 3 && r && Object.defineProperty(target, key, r), r);
    });
    var Input_1;
    var INPUT_EVENTS;
    (function (INPUT_EVENTS) {
      INPUT_EVENTS["CHANGE"] = "change";
      INPUT_EVENTS["INPUT"] = "input";
      INPUT_EVENTS["SELECTION_CHANGE"] = "selection-change";
    })(INPUT_EVENTS || (INPUT_EVENTS = {}));
    var INPUT_ACTIONS;
    (function (INPUT_ACTIONS) {
      INPUT_ACTIONS["ACTION_ENTER"] = "enter";
      INPUT_ACTIONS["ACTION_USER_INPUT"] = "input";
    })(INPUT_ACTIONS || (INPUT_ACTIONS = {}));
    let Input = Input_1 = class Input extends Button.UI5Element {
      get formValidityMessage() {
        return Input_1.i18nBundle.getText(Button.FORM_TEXTFIELD_REQUIRED);
      }
      get _effectiveShowSuggestions() {
        return !!(this.showSuggestions && this.Suggestions);
      }
      get formValidity() {
        return {
          valueMissing: this.required && !this.value
        };
      }
      async formElementAnchor() {
        return this.getFocusDomRefAsync();
      }
      get formFormattedValue() {
        return this.value;
      }
      constructor() {
        super();
        this.disabled = false;
        this.highlight = false;
        this.readonly = false;
        this.required = false;
        this.noTypeahead = false;
        this.type = "Text";
        this.value = "";
        this._innerValue = "";
        this.valueState = "None";
        this.showSuggestions = false;
        this.showClearIcon = false;
        this.open = false;
        this._effectiveShowClearIcon = false;
        this.focused = false;
        this.valueStateOpen = false;
        this._isValueStateFocused = false;
        this._inputAccInfo = {};
        this._nativeInputAttributes = {};
        this._inputIconFocused = false;
        this.hasSuggestionItemSelected = false;
        this.valueBeforeItemSelection = "";
        this.valueBeforeSelectionStart = "";
        this.previousValue = "";
        this.firstRendering = true;
        this.typedInValue = "";
        this.lastConfirmedValue = "";
        this.isTyping = false;
        this._isLatestValueFromSuggestions = false;
        this._handleResizeBound = this._handleResize.bind(this);
        this._keepInnerValue = false;
        this._focusedAfterClear = false;
      }
      onEnterDOM() {
        ResizeHandler.register(this, this._handleResizeBound);
        Button.registerUI5Element(this, this._updateAssociatedLabelsTexts.bind(this));
      }
      onExitDOM() {
        ResizeHandler.deregister(this, this._handleResizeBound);
        Button.deregisterUI5Element(this);
      }
      _highlightSuggestionItem(item) {
        item.markupText = this.typedInValue ? this.Suggestions?.hightlightInput(item.text || "", this.typedInValue) : fnEncodeXML(item.text || "");
      }
      _isGroupItem(item) {
        return item.hasAttribute("ui5-suggestion-item-group");
      }
      onBeforeRendering() {
        if (!this._keepInnerValue) {
          this._innerValue = this.value === null ? "" : this.value;
        }
        if (this.showSuggestions) {
          this.enableSuggestions();
          this._flattenItems.forEach(item => {
            if (item.hasAttribute("ui5-suggestion-item")) {
              this._highlightSuggestionItem(item);
            } else if (this._isGroupItem(item)) {
              item.items?.forEach(nestedItem => {
                this._highlightSuggestionItem(nestedItem);
              });
            }
          });
        }
        this._effectiveShowClearIcon = this.showClearIcon && !!this.value && !this.readonly && !this.disabled;
        this.style.setProperty(Boot.getScopedVarName("--_ui5-input-icons-count"), `${this.iconsCount}`);
        const hasItems = !!this._flattenItems.length;
        const hasValue = !!this.value;
        const isFocused = this.shadowRoot.querySelector("input") === getActiveElement();
        if (this.shouldDisplayOnlyValueStateMessage) {
          this.openValueStatePopover();
        } else {
          this.closeValueStatePopover();
        }
        const preventOpenPicker = this.disabled || this.readonly;
        if (preventOpenPicker) {
          this.open = false;
        } else if (!this._isPhone) {
          this.open = hasItems && (this.open || hasValue && isFocused && this.isTyping);
        }
        const value = this.value;
        const innerInput = this.getInputDOMRefSync();
        if (!innerInput || !value) {
          return;
        }
        const autoCompletedChars = innerInput.selectionEnd - innerInput.selectionStart;
        if (this._shouldAutocomplete && !Boot.isAndroid() && !autoCompletedChars && !this._isKeyNavigation) {
          const item = this._getFirstMatchingItem(value);
          if (item) {
            this._handleTypeAhead(item);
          }
        }
      }
      onAfterRendering() {
        const innerInput = this.getInputDOMRefSync();
        if (this.showSuggestions && this.Suggestions?._getPicker()) {
          this._listWidth = this.Suggestions._getListWidth();
        }
        if (this._performTextSelection) {
          if (innerInput.value !== this._innerValue) {
            innerInput.value = this._innerValue;
          }
          if (this.typedInValue.length && this.value.length) {
            innerInput.setSelectionRange(this.typedInValue.length, this.value.length);
          }
          this.fireEvent("type-ahead");
        }
        this._performTextSelection = false;
      }
      _onkeydown(e) {
        this._isKeyNavigation = true;
        this._shouldAutocomplete = !this.noTypeahead && !(Button.isBackSpace(e) || Button.isDelete(e) || Button.isEscape(e));
        if (Button.isUp(e)) {
          return this._handleUp(e);
        }
        if (Button.isDown(e)) {
          return this._handleDown(e);
        }
        if (Button.isSpace(e)) {
          return this._handleSpace(e);
        }
        if (Button.isTabNext(e)) {
          return this._handleTab();
        }
        if (Button.isEnter(e)) {
          return this._handleEnter(e);
        }
        if (Button.isPageUp(e)) {
          return this._handlePageUp(e);
        }
        if (Button.isPageDown(e)) {
          return this._handlePageDown(e);
        }
        if (Button.isHome(e)) {
          return this._handleHome(e);
        }
        if (Button.isEnd(e)) {
          return this._handleEnd(e);
        }
        if (Button.isEscape(e)) {
          return this._handleEscape();
        }
        if (this.showSuggestions) {
          this._clearPopoverFocusAndSelection();
        }
        this._keyDown = true;
        this._isKeyNavigation = false;
      }
      _onkeyup(e) {
        if (Button.isDelete(e)) {
          this.value = e.target.value;
        }
        this._keyDown = false;
      }
      _handleUp(e) {
        if (this.Suggestions?.isOpened()) {
          this.Suggestions.onUp(e);
        }
      }
      _handleDown(e) {
        if (this.Suggestions?.isOpened()) {
          this.Suggestions.onDown(e);
        }
      }
      _handleSpace(e) {
        if (this.Suggestions) {
          this.Suggestions.onSpace(e);
        }
      }
      _handleTab() {
        if (this.Suggestions && this.previousValue !== this.value) {
          this.Suggestions.onTab();
        }
      }
      _handleEnter(e) {
        const suggestionItemPressed = !!this.Suggestions?.onEnter(e);
        const innerInput = this.getInputDOMRefSync();
        const matchingItem = this._selectableItems.find(item => {
          return item.text === this.value;
        });
        if (matchingItem) {
          const itemText = matchingItem.text || "";
          innerInput.setSelectionRange(itemText.length, itemText.length);
          if (!suggestionItemPressed) {
            this.fireSelectionChange(matchingItem, true);
            this.acceptSuggestion(matchingItem, true);
            this.open = false;
          }
        }
        if (this._isPhone && !this._flattenItems.length && !this.isTypeNumber) {
          innerInput.setSelectionRange(this.value.length, this.value.length);
        }
        if (!suggestionItemPressed) {
          this.lastConfirmedValue = this.value;
          if (this._internals.form) {
            Button.submitForm(this);
          }
          return;
        }
        this.focused = true;
      }
      _handlePageUp(e) {
        if (this._isSuggestionsFocused) {
          this.Suggestions?.onPageUp(e);
        } else {
          e.preventDefault();
        }
      }
      _handlePageDown(e) {
        if (this._isSuggestionsFocused) {
          this.Suggestions?.onPageDown(e);
        } else {
          e.preventDefault();
        }
      }
      _handleHome(e) {
        if (this._isSuggestionsFocused) {
          this.Suggestions?.onHome(e);
        }
      }
      _handleEnd(e) {
        if (this._isSuggestionsFocused) {
          this.Suggestions?.onEnd(e);
        }
      }
      _handleEscape() {
        const hasSuggestions = this.showSuggestions && !!this.Suggestions;
        const isOpen = hasSuggestions && this.open;
        const innerInput = this.getInputDOMRefSync();
        const isAutoCompleted = innerInput.selectionEnd - innerInput.selectionStart > 0;
        this.isTyping = false;
        if (!isOpen) {
          this.value = this.lastConfirmedValue ? this.lastConfirmedValue : this.previousValue;
          return;
        }
        if (isOpen && this.Suggestions?._isItemOnTarget()) {
          this.value = this.typedInValue || this.valueBeforeSelectionStart;
          this.focused = true;
          return;
        }
        if (isAutoCompleted) {
          this.value = this.typedInValue;
        }
        if (this._isValueStateFocused) {
          this._isValueStateFocused = false;
          this.focused = true;
        }
      }
      _onfocusin(e) {
        this.focused = true;
        if (!this._focusedAfterClear) {
          this.previousValue = this.value;
        }
        this.valueBeforeSelectionStart = this.value;
        this._inputIconFocused = !!e.target && e.target === this.querySelector("[ui5-icon]");
        this._focusedAfterClear = false;
      }
      innerFocusIn() {}
      _onfocusout(e) {
        const toBeFocused = e.relatedTarget;
        if (this.Suggestions?._getPicker().contains(toBeFocused) || this.contains(toBeFocused) || this.getSlottedNodes("valueStateMessage").some(el => el.contains(toBeFocused))) {
          return;
        }
        this._keepInnerValue = false;
        this.focused = false;
        if (this.showClearIcon && !this._effectiveShowClearIcon) {
          this._clearIconClicked = false;
          this._handleChange();
        }
        this.open = false;
        this._clearPopoverFocusAndSelection();
        if (!this._clearIconClicked) {
          this.previousValue = "";
        }
        this.lastConfirmedValue = "";
        this.isTyping = false;
      }
      _clearPopoverFocusAndSelection() {
        if (!this.showSuggestions || !this.Suggestions) {
          return;
        }
        this._isValueStateFocused = false;
        this.hasSuggestionItemSelected = false;
        this.Suggestions?._deselectItems();
        this.Suggestions?._clearItemFocus();
      }
      _click() {
        if (Boot.isPhone() && !this.readonly && this.Suggestions) {
          this.blur();
          this.open = true;
        }
      }
      _handleChange() {
        if (this._clearIconClicked) {
          this._clearIconClicked = false;
          return;
        }
        const fireChange = () => {
          this.fireEvent(INPUT_EVENTS.CHANGE);
          this.previousValue = this.value;
          this.typedInValue = this.value;
        };
        if (this.previousValue !== this.getInputDOMRefSync().value) {
          if (this.Suggestions?._getPicker().open && this._flattenItems.some(item => item.hasAttribute("ui5-suggestion-item") && item.selected)) {
            this._changeToBeFired = true;
          } else {
            fireChange();
          }
        }
      }
      _clear() {
        const valueBeforeClear = this.value;
        this.value = "";
        const prevented = !this.fireEvent(INPUT_EVENTS.INPUT, {
          inputType: ""
        }, true);
        if (prevented) {
          this.value = valueBeforeClear;
          return;
        }
        if (!this._isPhone) {
          this.fireResetSelectionChange();
          this.focus();
          this._focusedAfterClear = true;
        }
      }
      _iconMouseDown() {
        this._clearIconClicked = true;
      }
      _scroll(e) {
        this.fireEvent("suggestion-scroll", {
          scrollTop: e.detail.scrollTop,
          scrollContainer: e.detail.targetRef
        });
      }
      _handleSelect() {
        this.fireEvent("select", {});
      }
      _handleInput(e) {
        const inputDomRef = this.getInputDOMRefSync();
        const emptyValueFiredOnNumberInput = this.value && this.isTypeNumber && !inputDomRef.value;
        const eventType = e.inputType || e.detail && e.detail.inputType || "";
        this._keepInnerValue = false;
        const allowedEventTypes = ["deleteWordBackward", "deleteWordForward", "deleteSoftLineBackward", "deleteSoftLineForward", "deleteEntireSoftLine", "deleteHardLineBackward", "deleteHardLineForward", "deleteByDrag", "deleteByCut", "deleteContent", "deleteContentBackward", "deleteContentForward", "historyUndo"];
        this._shouldAutocomplete = !allowedEventTypes.includes(eventType) && !this.noTypeahead;
        if (e instanceof InputEvent) {
          const delimiterCase = this.isTypeNumber && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward") && !e.target.value.includes(".") && this.value.includes(".");
          const eNotationCase = emptyValueFiredOnNumberInput && e.data === "e";
          const minusRemovalCase = emptyValueFiredOnNumberInput && this.value.startsWith("-") && this.value.length === 2 && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward");
          if (delimiterCase || eNotationCase || minusRemovalCase) {
            this.value = e.target.value;
            this._keepInnerValue = true;
          }
        }
        if (e.target === inputDomRef) {
          this.focused = true;
          e.stopImmediatePropagation();
        }
        this.fireEventByAction(INPUT_ACTIONS.ACTION_ENTER, e);
        this.hasSuggestionItemSelected = false;
        this._isValueStateFocused = false;
        if (this.Suggestions) {
          this.Suggestions.updateSelectedItemPosition(-1);
        }
        this.isTyping = true;
      }
      _startsWithMatchingItems(str) {
        return StartsWith(str, this._selectableItems, "text");
      }
      _getFirstMatchingItem(current) {
        if (!this._flattenItems.length) {
          return;
        }
        const matchingItems = this._startsWithMatchingItems(current).filter(item => !this._isGroupItem(item));
        if (matchingItems.length) {
          return matchingItems[0];
        }
      }
      _handleSelectionChange(e) {
        this.Suggestions?.onItemPress(e);
      }
      _handleTypeAhead(item) {
        const value = item.text ? item.text : "";
        this._innerValue = value;
        this.value = value;
        this._performTextSelection = true;
        this._shouldAutocomplete = false;
      }
      _handleResize() {
        this._inputWidth = this.offsetWidth;
      }
      _updateAssociatedLabelsTexts() {
        this._associatedLabelsTexts = Button.getAssociatedLabelForTexts(this);
        this._accessibleLabelsRefTexts = Button.getAllAccessibleNameRefTexts(this);
      }
      _closePicker() {
        this.open = false;
      }
      _afterOpenPicker() {
        if (Boot.isPhone()) {
          this.getInputDOMRef().focus();
        }
        this._handlePickerAfterOpen();
      }
      _afterClosePicker() {
        this.announceSelectedItem();
        if (Boot.isPhone()) {
          this.blur();
          this.focused = false;
        }
        if (this._changeToBeFired) {
          this.fireEvent(INPUT_EVENTS.CHANGE);
          this._changeToBeFired = false;
        }
        this.open = false;
        this.isTyping = false;
        if (this.hasSuggestionItemSelected) {
          this.focus();
        }
        this._handlePickerAfterClose();
      }
      _handlePickerAfterOpen() {
        this.Suggestions?._onOpen();
        this.fireEvent("open", null, false, false);
      }
      _handlePickerAfterClose() {
        this.Suggestions?._onClose();
        this.fireEvent("close", null, false, false);
      }
      openValueStatePopover() {
        this.valueStateOpen = true;
      }
      closeValueStatePopover() {
        this.valueStateOpen = false;
      }
      _handleValueStatePopoverAfterClose() {
        this.valueStateOpen = false;
      }
      _getValueStatePopover() {
        return this.shadowRoot.querySelector("[ui5-popover]");
      }
      enableSuggestions() {
        if (this.Suggestions) {
          return;
        }
        const Suggestions = Boot.getComponentFeature("InputSuggestions");
        Suggestions.i18nBundle = Input_1.i18nBundle;
        if (Suggestions) {
          this.Suggestions = new Suggestions(this, "suggestionItems", true, false);
        }
      }
      acceptSuggestion(item, keyboardUsed) {
        if (this._isGroupItem(item)) {
          return;
        }
        const value = this.typedInValue || this.value;
        const itemText = item.text || "";
        const fireChange = keyboardUsed ? this.valueBeforeItemSelection !== itemText : value !== itemText;
        this.hasSuggestionItemSelected = true;
        this.value = itemText;
        if (fireChange && this.previousValue !== itemText) {
          this.valueBeforeItemSelection = itemText;
          this.lastConfirmedValue = itemText;
          this._performTextSelection = true;
          this.fireEvent(INPUT_EVENTS.CHANGE);
          this.typedInValue = this.value;
          this.previousValue = this.value;
        }
        this.valueBeforeSelectionStart = "";
        this.isTyping = false;
        this.open = false;
      }
      updateValueOnSelect(item) {
        const itemValue = this._isGroupItem(item) ? this.valueBeforeSelectionStart : item.text;
        this.value = itemValue || "";
        this._performTextSelection = true;
      }
      fireEventByAction(action, e) {
        const valueBeforeInput = this.value;
        const inputRef = this.getInputDOMRefSync();
        if (this.disabled || this.readonly) {
          return;
        }
        const inputValue = this.getInputValue();
        const isUserInput = action === INPUT_ACTIONS.ACTION_ENTER;
        this.value = inputValue;
        this.typedInValue = inputValue;
        this.valueBeforeSelectionStart = inputValue;
        if (isUserInput) {
          const inputType = e.inputType || "";
          const prevented = !this.fireEvent(INPUT_EVENTS.INPUT, {
            inputType
          }, true);
          if (prevented) {
            this.value = valueBeforeInput;
            inputRef && (inputRef.value = valueBeforeInput);
          }
          this.fireEvent("value-changed");
          this.fireResetSelectionChange();
        }
      }
      getInputValue() {
        const domRef = this.getDomRef();
        if (domRef) {
          return this.getInputDOMRef().value;
        }
        return "";
      }
      getInputDOMRef() {
        if (Boot.isPhone() && this.Suggestions) {
          return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone");
        }
        return this.nativeInput;
      }
      getInputDOMRefSync() {
        if (Boot.isPhone() && this.Suggestions?._getPicker()) {
          return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input");
        }
        return this.nativeInput;
      }
      get nativeInput() {
        const domRef = this.getDomRef();
        return domRef ? domRef.querySelector(`input`) : null;
      }
      get nativeInputWidth() {
        return this.nativeInput ? this.nativeInput.offsetWidth : 0;
      }
      isSuggestionsScrollable() {
        if (!this.Suggestions) {
          return Promise.resolve(false);
        }
        return this.Suggestions?._isScrollable();
      }
      onItemMouseDown(e) {
        e.preventDefault();
      }
      onItemSelected(suggestionItem, keyboardUsed) {
        const shouldFireSelectionChange = !keyboardUsed && !suggestionItem?.focused && this.valueBeforeItemSelection !== suggestionItem.text;
        if (shouldFireSelectionChange) {
          this.fireSelectionChange(suggestionItem, true);
        }
        this.acceptSuggestion(suggestionItem, keyboardUsed);
      }
      _handleSuggestionItemPress(e) {
        this.Suggestions?.onItemPress(e);
      }
      onItemSelect(item) {
        this.valueBeforeItemSelection = this.value;
        this.updateValueOnSelect(item);
        this.announceSelectedItem();
        this.fireSelectionChange(item, true);
      }
      get _flattenItems() {
        return this.getSlottedNodes("suggestionItems").flatMap(item => {
          return this._isGroupItem(item) ? [item, ...item.items] : [item];
        });
      }
      get _selectableItems() {
        return this._flattenItems.filter(item => !this._isGroupItem(item));
      }
      get valueStateTypeMappings() {
        return {
          "Positive": Input_1.i18nBundle.getText(Button.VALUE_STATE_TYPE_SUCCESS),
          "Information": Input_1.i18nBundle.getText(Button.VALUE_STATE_TYPE_INFORMATION),
          "Negative": Input_1.i18nBundle.getText(Button.VALUE_STATE_TYPE_ERROR),
          "Critical": Input_1.i18nBundle.getText(Button.VALUE_STATE_TYPE_WARNING)
        };
      }
      valueStateTextMappings() {
        return {
          "Positive": Input_1.i18nBundle.getText(Button.VALUE_STATE_SUCCESS),
          "Information": Input_1.i18nBundle.getText(Button.VALUE_STATE_INFORMATION),
          "Negative": Input_1.i18nBundle.getText(Button.VALUE_STATE_ERROR),
          "Critical": Input_1.i18nBundle.getText(Button.VALUE_STATE_WARNING)
        };
      }
      announceSelectedItem() {
        const invisibleText = this.shadowRoot.querySelector(`#selectionText`);
        if (invisibleText) {
          invisibleText.textContent = this.itemSelectionAnnounce;
        }
      }
      fireSelectionChange(item, isValueFromSuggestions) {
        if (this.Suggestions) {
          this.fireEvent(INPUT_EVENTS.SELECTION_CHANGE, {
            item
          });
          this._isLatestValueFromSuggestions = isValueFromSuggestions;
        }
      }
      fireResetSelectionChange() {
        if (this._isLatestValueFromSuggestions) {
          this.fireSelectionChange(null, false);
        }
      }
      get _readonly() {
        return this.readonly && !this.disabled;
      }
      get _headerTitleText() {
        return Input_1.i18nBundle.getText(Button.INPUT_SUGGESTIONS_TITLE);
      }
      get clearIconAccessibleName() {
        return Input_1.i18nBundle.getText(Button.INPUT_CLEAR_ICON_ACC_NAME);
      }
      get _popupLabel() {
        return Input_1.i18nBundle.getText(Button.INPUT_AVALIABLE_VALUES);
      }
      get inputType() {
        return this.type.toLowerCase();
      }
      get isTypeNumber() {
        return this.type === InputType$1.Number;
      }
      get suggestionsTextId() {
        return this.showSuggestions ? `suggestionsText` : "";
      }
      get valueStateTextId() {
        return this.hasValueState ? `valueStateDesc` : "";
      }
      get accInfo() {
        const ariaHasPopupDefault = this.showSuggestions ? "dialog" : undefined;
        const ariaAutoCompleteDefault = this.showSuggestions ? "list" : undefined;
        const ariaDescribedBy = this._inputAccInfo.ariaDescribedBy ? `${this.suggestionsTextId} ${this.valueStateTextId} ${this._inputAccInfo.ariaDescribedBy}`.trim() : `${this.suggestionsTextId} ${this.valueStateTextId}`.trim();
        const info = {
          "input": {
            "ariaRoledescription": this._inputAccInfo && (this._inputAccInfo.ariaRoledescription || undefined),
            "ariaDescribedBy": ariaDescribedBy || undefined,
            "ariaInvalid": this.valueState === ValueState$1.Negative ? "true" : undefined,
            "ariaHasPopup": this._inputAccInfo.ariaHasPopup ? this._inputAccInfo.ariaHasPopup : ariaHasPopupDefault,
            "ariaAutoComplete": this._inputAccInfo.ariaAutoComplete ? this._inputAccInfo.ariaAutoComplete : ariaAutoCompleteDefault,
            "role": this._inputAccInfo && this._inputAccInfo.role,
            "ariaControls": this._inputAccInfo && this._inputAccInfo.ariaControls,
            "ariaExpanded": this._inputAccInfo && this._inputAccInfo.ariaExpanded,
            "ariaDescription": this._inputAccInfo && this._inputAccInfo.ariaDescription,
            "ariaLabel": this._inputAccInfo && this._inputAccInfo.ariaLabel || this._accessibleLabelsRefTexts || this.accessibleName || this._associatedLabelsTexts || undefined
          }
        };
        return info;
      }
      get nativeInputAttributes() {
        return {
          "min": this.isTypeNumber ? this._nativeInputAttributes.min : undefined,
          "max": this.isTypeNumber ? this._nativeInputAttributes.max : undefined,
          "step": this.isTypeNumber ? this._nativeInputAttributes.step || "any" : undefined
        };
      }
      get ariaValueStateHiddenText() {
        if (!this.hasValueState) {
          return;
        }
        const valueState = this.valueState !== ValueState$1.None ? this.valueStateTypeMappings[this.valueState] : "";
        if (this.shouldDisplayDefaultValueStateMessage) {
          return this.valueStateText ? `${valueState} ${this.valueStateText}` : valueState;
        }
        return `${valueState}`.concat(" ", this.valueStateMessage.map(el => el.textContent).join(" "));
      }
      get itemSelectionAnnounce() {
        return this.Suggestions ? this.Suggestions.itemSelectionAnnounce : "";
      }
      get iconsCount() {
        const slottedIconsCount = this.icon ? this.icon.length : 0;
        const clearIconCount = Number(this._effectiveShowClearIcon) ?? 0;
        return slottedIconsCount + clearIconCount;
      }
      get classes() {
        return {
          popover: {
            "ui5-suggestions-popover": this.showSuggestions,
            "ui5-popover-with-value-state-header-phone": this._isPhone && this.showSuggestions && this.hasValueStateMessage,
            "ui5-popover-with-value-state-header": !this._isPhone && this.showSuggestions && this.hasValueStateMessage
          },
          popoverValueState: {
            "ui5-valuestatemessage-root": true,
            "ui5-valuestatemessage-header": true,
            "ui5-valuestatemessage--success": this.valueState === ValueState$1.Positive,
            "ui5-valuestatemessage--error": this.valueState === ValueState$1.Negative,
            "ui5-valuestatemessage--warning": this.valueState === ValueState$1.Critical,
            "ui5-valuestatemessage--information": this.valueState === ValueState$1.Information
          }
        };
      }
      get styles() {
        const remSizeIxPx = parseInt(getComputedStyle(document.documentElement).fontSize);
        const stylesObject = {
          popoverHeader: {
            "max-width": this._inputWidth ? `${this._inputWidth}px` : ""
          },
          suggestionPopoverHeader: {
            "display": this._listWidth === 0 ? "none" : "inline-block",
            "width": this._listWidth ? `${this._listWidth}px` : ""
          },
          suggestionsPopover: {
            "min-width": this._inputWidth ? `${this._inputWidth}px` : "",
            "max-width": this._inputWidth && this._inputWidth / remSizeIxPx > 40 ? `${this._inputWidth}px` : "40rem"
          },
          innerInput: {
            "padding": ""
          }
        };
        return stylesObject;
      }
      get suggestionSeparators() {
        return "None";
      }
      get shouldDisplayOnlyValueStateMessage() {
        return this.hasValueStateMessage && !this.readonly && !this.open && this.focused;
      }
      get shouldDisplayDefaultValueStateMessage() {
        return !this.valueStateMessage.length && this.hasValueStateMessage;
      }
      get hasValueState() {
        return this.valueState !== ValueState$1.None;
      }
      get hasValueStateMessage() {
        return this.hasValueState && this.valueState !== ValueState$1.Positive && (!this._inputIconFocused || !!(this._isPhone && this.Suggestions));
      }
      get valueStateText() {
        return this.valueState !== ValueState$1.None ? this.valueStateTextMappings()[this.valueState] : undefined;
      }
      get suggestionsText() {
        return Input_1.i18nBundle.getText(Button.INPUT_SUGGESTIONS);
      }
      get availableSuggestionsCount() {
        if (this.showSuggestions && (this.value || this.Suggestions?.isOpened())) {
          const nonGroupItems = this._selectableItems;
          switch (nonGroupItems.length) {
            case 0:
              return Input_1.i18nBundle.getText(Button.INPUT_SUGGESTIONS_NO_HIT);
            case 1:
              return Input_1.i18nBundle.getText(Button.INPUT_SUGGESTIONS_ONE_HIT);
            default:
              return Input_1.i18nBundle.getText(Button.INPUT_SUGGESTIONS_MORE_HITS, nonGroupItems.length);
          }
        }
        return undefined;
      }
      get step() {
        return this.isTypeNumber ? "any" : undefined;
      }
      get _isPhone() {
        return Boot.isPhone();
      }
      get _isSuggestionsFocused() {
        return !this.focused && this.Suggestions?.isOpened();
      }
      get _placeholder() {
        return this.placeholder;
      }
      get _valueStateInputIcon() {
        const iconPerValueState = {
          Negative: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>`,
          Critical: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>`,
          Positive: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>`,
          Information: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>`
        };
        if (this.valueState !== ValueState$1.None) {
          return `
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${iconPerValueState[this.valueState]};
			</svg>
			`;
        }
        return "";
      }
      get _valueStatePopoverHorizontalAlign() {
        return this.effectiveDir !== "rtl" ? "Start" : "End";
      }
      get _valueStateMessageInputIcon() {
        const iconPerValueState = {
          Negative: "error",
          Critical: "alert",
          Positive: "sys-enter-2",
          Information: "information"
        };
        return this.valueState !== ValueState$1.None ? iconPerValueState[this.valueState] : "";
      }
      getCaretPosition() {
        return getCaretPosition(this.nativeInput);
      }
      setCaretPosition(pos) {
        setCaretPosition(this.nativeInput, pos);
      }
      removeFractionalPart(value) {
        if (value.includes(".")) {
          return value.slice(0, value.indexOf("."));
        }
        if (value.includes(",")) {
          return value.slice(0, value.indexOf(","));
        }
        return value;
      }
    };
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "disabled", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "highlight", void 0);
    __decorate([Button.property()], Input.prototype, "placeholder", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "readonly", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "required", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "noTypeahead", void 0);
    __decorate([Button.property()], Input.prototype, "type", void 0);
    __decorate([Button.property()], Input.prototype, "value", void 0);
    __decorate([Button.property({
      noAttribute: true
    })], Input.prototype, "_innerValue", void 0);
    __decorate([Button.property()], Input.prototype, "valueState", void 0);
    __decorate([Button.property()], Input.prototype, "name", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "showSuggestions", void 0);
    __decorate([Button.property({
      type: Number
    })], Input.prototype, "maxlength", void 0);
    __decorate([Button.property()], Input.prototype, "accessibleName", void 0);
    __decorate([Button.property()], Input.prototype, "accessibleNameRef", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "showClearIcon", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "open", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "_effectiveShowClearIcon", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "focused", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "valueStateOpen", void 0);
    __decorate([Button.property({
      type: Boolean
    })], Input.prototype, "_isValueStateFocused", void 0);
    __decorate([Button.property({
      type: Object
    })], Input.prototype, "_inputAccInfo", void 0);
    __decorate([Button.property({
      type: Object
    })], Input.prototype, "_nativeInputAttributes", void 0);
    __decorate([Button.property({
      type: Number
    })], Input.prototype, "_inputWidth", void 0);
    __decorate([Button.property({
      type: Number
    })], Input.prototype, "_listWidth", void 0);
    __decorate([Button.property({
      type: Boolean,
      noAttribute: true
    })], Input.prototype, "_inputIconFocused", void 0);
    __decorate([Button.property({
      noAttribute: true
    })], Input.prototype, "_associatedLabelsTexts", void 0);
    __decorate([Button.property({
      noAttribute: true
    })], Input.prototype, "_accessibleLabelsRefTexts", void 0);
    __decorate([Button.slot({
      type: HTMLElement,
      "default": true
    })], Input.prototype, "suggestionItems", void 0);
    __decorate([Button.slot()], Input.prototype, "icon", void 0);
    __decorate([Button.slot({
      type: HTMLElement,
      invalidateOnChildChange: true
    })], Input.prototype, "valueStateMessage", void 0);
    __decorate([Button.i18n("@ui5/webcomponents")], Input, "i18nBundle", void 0);
    Input = Input_1 = __decorate([Button.customElement({
      tag: "ui5-input",
      languageAware: true,
      formAssociated: true,
      renderer: Button.litRender,
      template: block0$2,
      styles: [styleData$5, styleData$4, styleData$3, styleData$2],
      features: ["InputSuggestions"],
      get dependencies() {
        const Suggestions = Boot.getComponentFeature("InputSuggestions");
        return [Popover$1, ResponsivePopover$1, Button.Icon].concat(Suggestions ? Suggestions.dependencies : []);
      }
    }), Button.event("change"), Button.event("input"), Button.event("select"), Button.event("selection-change", {
      detail: {
        item: {
          type: HTMLElement
        }
      }
    }), Button.event("type-ahead"), Button.event("suggestion-scroll", {
      detail: {
        scrollTop: {
          type: Number
        },
        scrollContainer: {
          type: HTMLElement
        }
      }
    }), Button.event("open"), Button.event("close")], Input);
    Input.define();

    const WrapperClass = WebComponentBaseClass.extend("@ui5/webcomponents.Input", {
      metadata: {
      "namespace": "@ui5/webcomponents",
      "tag": "ui5-input-6e0d5ba1",
      "interfaces": [
        "sap.ui.core.IFormContent"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "defaultValue": "true",
          "mapping": {
            "type": "property",
            "to": "disabled",
            "formatter": "_mapEnabled"
          }
        },
        "placeholder": {
          "type": "string",
          "mapping": "property"
        },
        "readonly": {
          "type": "boolean",
          "mapping": "property",
          "defaultValue": false
        },
        "required": {
          "type": "boolean",
          "mapping": "property",
          "defaultValue": false
        },
        "noTypeahead": {
          "type": "boolean",
          "mapping": "property",
          "defaultValue": false
        },
        "type": {
          "type": "@ui5/webcomponents.InputType",
          "mapping": "property",
          "defaultValue": "Text"
        },
        "value": {
          "type": "string",
          "mapping": "property",
          "defaultValue": ""
        },
        "valueState": {
          "type": "@ui5/webcomponents-base.ValueState",
          "mapping": "property",
          "defaultValue": "None"
        },
        "name": {
          "type": "string",
          "mapping": "property"
        },
        "showSuggestions": {
          "type": "boolean",
          "mapping": "property",
          "defaultValue": false
        },
        "maxlength": {
          "type": "float",
          "mapping": "property"
        },
        "accessibleName": {
          "type": "string",
          "mapping": "property"
        },
        "showClearIcon": {
          "type": "boolean",
          "mapping": "property",
          "defaultValue": false
        },
        "open": {
          "type": "boolean",
          "mapping": "property",
          "defaultValue": false
        },
        "text": {
          "type": "string",
          "mapping": "textContent"
        },
        "width": {
          "type": "sap.ui.core.CSSSize",
          "mapping": "style"
        },
        "height": {
          "type": "sap.ui.core.CSSSize",
          "mapping": "style"
        }
      },
      "aggregations": {
        "suggestionItems": {
          "type": "@ui5/webcomponents.IInputSuggestionItem",
          "multiple": true
        },
        "icon": {
          "type": "@ui5/webcomponents.IIcon",
          "multiple": true,
          "slot": "icon"
        },
        "valueStateMessage": {
          "type": "sap.ui.core.Control",
          "multiple": true,
          "slot": "valueStateMessage"
        }
      },
      "associations": {
        "ariaLabelledBy": {
          "type": "sap.ui.core.Control",
          "multiple": true,
          "mapping": {
            "type": "property",
            "to": "accessibleNameRef",
            "formatter": "_getAriaLabelledByForRendering"
          }
        }
      },
      "events": {
        "change": {},
        "input": {},
        "select": {},
        "selectionChange": {},
        "open": {},
        "close": {}
      },
      "getters": [],
      "methods": [],
      "defaultAggregation": "suggestionItems",
      "library": "@ui5/webcomponents.library",
      "designtime": "@ui5/webcomponents/designtime/Input.designtime"
    },
      // TODO: Quick solution to fix a conversion between "number" and "core.CSSSize".
      //       WebC attribute is a number and is written back to the Control wrapper via core.WebComponent base class.
      //       The control property is defined as a "sap.ui.core.CSSSize".
    	setProperty: function(sPropName, v, bSupressInvalidate) {
        if (sPropName === "width" || sPropName === "height") {
          if (!isNaN(v)) {
            v += "px";
          }
        }
        return WebComponentBaseClass.prototype.setProperty.apply(this, [sPropName, v, bSupressInvalidate]);
      }
    });

    return WrapperClass;

}));
