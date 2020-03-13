$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page for \"\u003ctestCaseName\u003e\" with \"\u003citeration\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "iteration"
      ],
      "line": 8,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;1"
    },
    {
      "cells": [
        "TestCase_1",
        "1"
      ],
      "line": 9,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;2"
    },
    {
      "cells": [
        "TestCase_1",
        "2"
      ],
      "line": 10,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;3"
    },
    {
      "cells": [
        "TestCase_1",
        "3"
      ],
      "line": 11,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 61964425,
  "status": "passed"
});
formatter.before({
  "duration": 567505,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page for \"TestCase_1\" with \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
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
  "duration": 5185108662,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 4924196480,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 189510500,
  "status": "passed"
});
formatter.after({
  "duration": 1262640370,
  "status": "passed"
});
formatter.after({
  "duration": 405900,
  "status": "passed"
});
formatter.before({
  "duration": 559575,
  "status": "passed"
});
formatter.before({
  "duration": 434218,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page for \"TestCase_1\" with \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
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
  "duration": 183285702,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 291115,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 56637,
  "status": "passed"
});
formatter.after({
  "duration": 577699,
  "status": "passed"
});
formatter.after({
  "duration": 569769,
  "status": "passed"
});
formatter.before({
  "duration": 787256,
  "status": "passed"
});
formatter.before({
  "duration": 737416,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Free CRM Login Test Scenario with datatable",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page for \"TestCase_1\" with \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
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
  "duration": 6702443212,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 571609163,
  "error_message": "java.lang.AssertionError: The user login failed!Element \u003ca class\u003d\"btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left\" href\u003d\"https://ui.freecrm.com\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLB-332V0X2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 53416, moz:profile: C:\\Users\\SSwain5\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2e073bcf-d66b-4b39-a873-8c26f3d82513\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat stepDefinitions.LoginStepDefinition.userEntersUsernameAndPassword(LoginStepDefinition.java:76)\r\n\tat ✽.Then user enters username and password(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2849367873,
  "status": "passed"
});
formatter.after({
  "duration": 576566,
  "status": "passed"
});
formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Signup Feature",
  "description": "",
  "id": "free-crm-signup-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Sign up Test Scenario with datatable",
  "description": "",
  "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in the home page \"\u003ctestCaseName\u003e\" with \"\u003citeration\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email and phoneNumber",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on SignUp",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "iteration"
      ],
      "line": 8,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;1"
    },
    {
      "cells": [
        "TestCase_2",
        "1"
      ],
      "line": 9,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;2"
    },
    {
      "cells": [
        "TestCase_2",
        "2"
      ],
      "line": 10,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;3"
    },
    {
      "cells": [
        "TestCase_2",
        "3"
      ],
      "line": 11,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 957168,
  "status": "passed"
});
formatter.before({
  "duration": 760825,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Free CRM Sign up Test Scenario with datatable",
  "description": "",
  "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in the home page \"TestCase_2\" with \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email and phoneNumber",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on SignUp",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TestCase_2",
      "offset": 26
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "SignUpStepDefination.userIsOnSignUpPageForTestCaseNameWithIteration(String,String)"
});
formatter.result({
  "duration": 3152160952,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 1755617932,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 1064833285,
  "status": "passed"
});
formatter.after({
  "duration": 604507,
  "status": "passed"
});
formatter.after({
  "duration": 1089484032,
  "status": "passed"
});
formatter.before({
  "duration": 859752,
  "status": "passed"
});
formatter.before({
  "duration": 802737,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Free CRM Sign up Test Scenario with datatable",
  "description": "",
  "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in the home page \"TestCase_2\" with \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email and phoneNumber",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on SignUp",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TestCase_2",
      "offset": 26
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "SignUpStepDefination.userIsOnSignUpPageForTestCaseNameWithIteration(String,String)"
});
formatter.result({
  "duration": 157279061,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 32472,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 80047,
  "status": "passed"
});
formatter.after({
  "duration": 274502,
  "status": "passed"
});
formatter.after({
  "duration": 282430,
  "status": "passed"
});
formatter.before({
  "duration": 444790,
  "status": "passed"
});
formatter.before({
  "duration": 334914,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Free CRM Sign up Test Scenario with datatable",
  "description": "",
  "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in the home page \"TestCase_2\" with \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters email and phoneNumber",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on SignUp",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TestCase_2",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "SignUpStepDefination.userIsOnSignUpPageForTestCaseNameWithIteration(String,String)"
});
formatter.result({
  "duration": 6883645800,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 3575461244,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 946265706,
  "status": "passed"
});
formatter.after({
  "duration": 513888,
  "status": "passed"
});
formatter.after({
  "duration": 2948662590,
  "status": "passed"
});
});