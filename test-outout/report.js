$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Dsouza",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38690715,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2340247,
  "status": "passed"
});
formatter.before({
  "duration": 390041,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"David\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 470844,
  "status": "passed"
});
formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 585250,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 290360,
  "status": "passed"
});
formatter.uri("dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 552401,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 264685,
  "status": "passed"
});
formatter.uri("hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 432330,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 404767,
  "status": "passed"
});
formatter.before({
  "duration": 456118,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 376826,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "\r\n\r\n//Scenario Outline: Free CRM Login Test Scenario\r\n  //Given user is already on Login Page\r\n  //Then user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"\r\n // Then user clicks on login button\r\n\r\n // Examples:\r\n  //  | username | password |\r\n  //  | naveenk  | test@123 |",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on Login Page for \"\u003ctestCaseName\u003e\" with \"\u003citeration\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "iteration"
      ],
      "line": 18,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;1"
    },
    {
      "cells": [
        "TestCase_1",
        "1"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;2"
    },
    {
      "cells": [
        "TestCase_1",
        "2"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;3"
    },
    {
      "cells": [
        "TestCase_1",
        "3"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 385133,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on Login Page for \"TestCase_1\" with \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TestCase_1",
      "offset": 35
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.userIsAlreadyOnLoginPageForTestCaseNameWithIteration(String,String)"
});
formatter.result({
  "duration": 4591240727,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 2562663516,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 123549382,
  "status": "passed"
});
formatter.after({
  "duration": 987139595,
  "status": "passed"
});
formatter.before({
  "duration": 402501,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on Login Page for \"TestCase_1\" with \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TestCase_1",
      "offset": 35
    },
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.userIsAlreadyOnLoginPageForTestCaseNameWithIteration(String,String)"
});
formatter.result({
  "duration": 101566621,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 28319,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 20389,
  "status": "passed"
});
formatter.after({
  "duration": 301310,
  "status": "passed"
});
formatter.before({
  "duration": 365875,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on Login Page for \"TestCase_1\" with \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TestCase_1",
      "offset": 35
    },
    {
      "val": "3",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.userIsAlreadyOnLoginPageForTestCaseNameWithIteration(String,String)"
});
formatter.result({
  "duration": 4233333673,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 15834985816,
  "error_message": "java.lang.AssertionError: The user login failed!Unable to find element with name \u003d\u003d email (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLB-332V0X2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserName: internet explorer, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.enableFullPageScreenshot: true, ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ie.forceShellWindowsApi: false, ie.useLegacyFileUploadDialogHandling: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:25905/, nativeEvents: true, requireWindowFocus: false}, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 3621f251-bc5f-4704-9e12-0d66659a7f1c\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat stepDefinitions.LoginStepDefinition.userEntersUsernameAndPassword(LoginStepDefinition.java:88)\r\n\tat ✽.Then user enters username and password(login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 559876214,
  "status": "passed"
});
formatter.uri("taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 460271,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "This is First test",
  "description": "",
  "id": "test-tagged-hooks;this-is-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 746100,
  "status": "passed"
});
formatter.before({
  "duration": 380602,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 261663,
  "status": "passed"
});
formatter.before({
  "duration": 348507,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "This is Third test",
  "description": "",
  "id": "test-tagged-hooks;this-is-third-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 216731,
  "status": "passed"
});
formatter.uri("tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 487079,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 246938,
  "status": "passed"
});
formatter.before({
  "duration": 318301,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with incorrect username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-incorrect-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 458383,
  "status": "passed"
});
formatter.before({
  "duration": 496141,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "This is a contact test case",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 344731,
  "status": "passed"
});
formatter.before({
  "duration": 828790,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create a deal",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "This is a deal test case",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 421002,
  "status": "passed"
});
formatter.before({
  "duration": 356436,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create a tasks",
  "description": "",
  "id": "free-crm-application-testing;create-a-tasks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "This is a tasks test case",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 207292,
  "status": "passed"
});
formatter.before({
  "duration": 311126,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create a case",
  "description": "",
  "id": "free-crm-application-testing;create-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "This is a case test case",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 209180,
  "status": "passed"
});
formatter.before({
  "duration": 393439,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify left panel links",
  "description": "",
  "id": "free-crm-application-testing;verify-left-panel-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@SmokeTest"
    },
    {
      "line": 28,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "clicking on left panel links",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 334159,
  "status": "passed"
});
formatter.before({
  "duration": 341711,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "This is a search deal test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 353416,
  "status": "passed"
});
formatter.before({
  "duration": 508602,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search a contact",
  "description": "",
  "id": "free-crm-application-testing;search-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "This is a search contact test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 237498,
  "status": "passed"
});
formatter.before({
  "duration": 414961,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search a case",
  "description": "",
  "id": "free-crm-application-testing;search-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@SmokeTest"
    },
    {
      "line": 40,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "This is a search case test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 239386,
  "status": "passed"
});
formatter.before({
  "duration": 372295,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search a task",
  "description": "",
  "id": "free-crm-application-testing;search-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    },
    {
      "line": 44,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "This is a search task test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 285451,
  "status": "passed"
});
formatter.before({
  "duration": 342465,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search a call",
  "description": "",
  "id": "free-crm-application-testing;search-a-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@SmokeTest"
    },
    {
      "line": 48,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "This is a search call test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 306974,
  "status": "passed"
});
formatter.before({
  "duration": 345486,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Search an email",
  "description": "",
  "id": "free-crm-application-testing;search-an-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@SmokeTest"
    },
    {
      "line": 52,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "This is a search email test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 215221,
  "status": "passed"
});
formatter.before({
  "duration": 382489,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Search a docs",
  "description": "",
  "id": "free-crm-application-testing;search-a-docs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@SmokeTest"
    },
    {
      "line": 56,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "This is a search docs test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 204271,
  "status": "passed"
});
formatter.before({
  "duration": 312259,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Search a forms",
  "description": "",
  "id": "free-crm-application-testing;search-a-forms",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@SmokeTest"
    },
    {
      "line": 60,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "This is a search forms test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 181616,
  "status": "passed"
});
formatter.before({
  "duration": 291115,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "validate a report",
  "description": "",
  "id": "free-crm-application-testing;validate-a-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "This is a report test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 299799,
  "status": "passed"
});
formatter.before({
  "duration": 345864,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Application Logout",
  "description": "",
  "id": "free-crm-application-testing;application-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "This is a logout test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 235611,
  "status": "passed"
});
formatter.before({
  "duration": 330761,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "browser closed",
  "description": "",
  "id": "free-crm-application-testing;browser-closed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "This is a close broswer test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 185769,
  "status": "passed"
});
});