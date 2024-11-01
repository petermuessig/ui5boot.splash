sap.ui.loader.config({
	paths: {
		"": "https://sdk.openui5.org/1.120.21/resources"
	}
});

window["sap-ui-config"] = {
	async: true,
	libs: "sap.ui.core",
	compatVersion: "edge",
	frameOptions: "trusted",
};

// determine the proper theme for UI5 from current color scheme
window["sap-ui-config"]["theme"] = (function () {
	"use strict";
	try {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "sap_horizon_dark" : "sap_horizon";
	} catch (err) {
		console.warn("window.matchMedia not supported - keep default theme");
		return "sap_horizon";
	}
})();

/* eslint-disable max-nested-callbacks */
sap.ui.define([
	"sap/ui/core/Core"
], function (Core) {
	"use strict";

	// Create a login UI5 Component (bundling the page)
	Core.ready().then(function () {

		sap.ui.require([
			"@ui5/webcomponents/dist/Assets", // relevant to include all themes
		], function() {

			sap.ui.require([
				"@ui5/webcomponents/Input", "@ui5/webcomponents/Button",
			], function(Input, Button) {

				document.body.classList.remove("loading");

				// Create a new instance of the Input component
				const inputU = new Input({
					placeholder: "Username"
				});

				// Append the Input component to the body
				inputU.placeAt("login");

				// Create a new instance of the Input component
				const inputP = new Input({
					placeholder: "Password"
				});

				inputP.placeAt("login");

				// Create a new instance of the Input component
				const buttonS = new Button({
					text: "Login",
					enabled: false,
					click: function() {
						// let the framework include the Component
						sap.ui.require(["sap/ui/core/ComponentSupport"], function() {
							document.querySelectorAll("#login")[0].style.display = "none";
							document.querySelectorAll("[data-name]")[0].style.display = "";
						});
					}
				});

				buttonS.placeAt("login");

				// Load the component delayed
				setTimeout(() => {

					sap.ui.require([
						"sap/ui/core/Component"
					], function(Component) {
						Component.load({
							name: "ui5boot.splash"
						}).then(function() {
							buttonS.setEnabled(true);
						})
					});

				}, 2000);

			});

		});

	});

	Core.boot();

});
