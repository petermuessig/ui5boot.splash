sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"./model/models",
	],
	(UIComponent, models) => {
		"use strict";

		return UIComponent.extend("ui5boot.splash.Component", {
			metadata: {
				manifest: "json",
			},

			init() {
				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				// enable routing
				this.getRouter().initialize();

				// set the device model
				this.setModel(models.createDeviceModel(), "device");
			},
		});
	}
);
