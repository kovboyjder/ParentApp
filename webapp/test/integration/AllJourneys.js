jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"au/com/bourne/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"au/com/bourne/test/integration/pages/Worklist",
		"au/com/bourne/test/integration/pages/Object",
		"au/com/bourne/test/integration/pages/NotFound",
		"au/com/bourne/test/integration/pages/Browser",
		"au/com/bourne/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "au.com.bourne.view."
	});

	sap.ui.require([
		"au/com/bourne/test/integration/WorklistJourney",
		"au/com/bourne/test/integration/ObjectJourney",
		"au/com/bourne/test/integration/NavigationJourney",
		"au/com/bourne/test/integration/NotFoundJourney",
		"au/com/bourne/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});