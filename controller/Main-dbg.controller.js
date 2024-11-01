sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("ui5boot.splash.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
