sap.ui.define(['ui5boot/splash/thirdparty/Button2', 'ui5boot/splash/thirdparty/@ui5/webcomponents', 'sap/ui/core/webc/WebComponent', 'ui5boot/splash/thirdparty/Boot', 'ui5boot/splash/thirdparty/i18n', 'ui5boot/splash/thirdparty/webcomponents-base', 'sap/base/strings/hyphenate', 'sap/ui/core/webc/WebComponentRenderer', 'sap/ui/base/DataType'], (function (Button, _ui5_webcomponents, WebComponentBaseClass, Boot, i18n, _ui5_webcomponentsBase, hyphenate, WebComponentRenderer, DataType) { 'use strict';

  const WrapperClass = WebComponentBaseClass.extend("@ui5/webcomponents.Button", {
    metadata: {
    "namespace": "@ui5/webcomponents",
    "tag": "ui5-button-6e0d5ba1",
    "interfaces": [
      "@ui5/webcomponents.IButton"
    ],
    "properties": {
      "design": {
        "type": "@ui5/webcomponents.ButtonDesign",
        "mapping": "property",
        "defaultValue": "Default"
      },
      "enabled": {
        "type": "boolean",
        "defaultValue": "true",
        "mapping": {
          "type": "property",
          "to": "disabled",
          "formatter": "_mapEnabled"
        }
      },
      "icon": {
        "type": "string",
        "mapping": "property"
      },
      "endIcon": {
        "type": "string",
        "mapping": "property"
      },
      "submits": {
        "type": "boolean",
        "mapping": "property",
        "defaultValue": false
      },
      "tooltip": {
        "type": "string",
        "mapping": "property"
      },
      "accessibleName": {
        "type": "string",
        "mapping": "property"
      },
      "accessibilityAttributes": {
        "type": "object",
        "mapping": "property",
        "defaultValue": {}
      },
      "type": {
        "type": "@ui5/webcomponents.ButtonType",
        "mapping": "property",
        "defaultValue": "Button"
      },
      "accessibleRole": {
        "type": "@ui5/webcomponents.ButtonAccessibleRole",
        "mapping": "property",
        "defaultValue": "Button"
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
    "aggregations": {},
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
      "click": {}
    },
    "getters": [],
    "methods": [],
    "library": "@ui5/webcomponents.library",
    "designtime": "@ui5/webcomponents/designtime/Button.designtime"
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
