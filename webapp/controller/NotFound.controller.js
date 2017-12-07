sap.ui.define([
		"au/com/bourne/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("au.com.bourne.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);