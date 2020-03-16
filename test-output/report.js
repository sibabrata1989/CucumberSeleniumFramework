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
  "duration": 59430857,
  "status": "passed"
});
formatter.before({
  "duration": 1076483,
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
  "duration": 8393148191,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 4985236208,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 193776787,
  "status": "passed"
});
formatter.after({
  "duration": 3338097272,
  "status": "passed"
});
formatter.after({
  "duration": 688330,
  "status": "passed"
});
formatter.before({
  "duration": 1659845,
  "status": "passed"
});
formatter.before({
  "duration": 1334371,
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
  "duration": 158068205,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 302064,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.after({
  "duration": 551646,
  "status": "passed"
});
formatter.after({
  "duration": 402501,
  "status": "passed"
});
formatter.before({
  "duration": 916766,
  "status": "passed"
});
formatter.before({
  "duration": 784991,
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
  "duration": 6212697744,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 5260393387,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 172301118,
  "status": "passed"
});
formatter.after({
  "duration": 3207006844,
  "status": "passed"
});
formatter.after({
  "duration": 531634,
  "status": "passed"
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
        "TestCase_2",
        "1"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;2"
    },
    {
      "cells": [
        "TestCase_2",
        "2"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;3"
    },
    {
      "cells": [
        "TestCase_2",
        "3"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-with-datatable;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1594901,
  "status": "passed"
});
formatter.before({
  "duration": 1287551,
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
  "name": "user is already on Login Page for \"TestCase_2\" with \"1\"",
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
      "val": "TestCase_2",
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
  "duration": 6477784084,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 4636475675,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 189621887,
  "status": "passed"
});
formatter.after({
  "duration": 2947664643,
  "status": "passed"
});
formatter.after({
  "duration": 960566,
  "status": "passed"
});
formatter.before({
  "duration": 2409721,
  "status": "passed"
});
formatter.before({
  "duration": 1621710,
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
  "name": "user is already on Login Page for \"TestCase_2\" with \"2\"",
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
      "val": "TestCase_2",
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
  "duration": 147602418,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 58903,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 32094,
  "status": "passed"
});
formatter.after({
  "duration": 390419,
  "status": "passed"
});
formatter.after({
  "duration": 310371,
  "status": "passed"
});
formatter.before({
  "duration": 881274,
  "status": "passed"
});
formatter.before({
  "duration": 805380,
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
  "name": "user is already on Login Page for \"TestCase_2\" with \"3\"",
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
      "val": "TestCase_2",
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
  "duration": 6645389227,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 6744235755,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 168479621,
  "status": "passed"
});
formatter.after({
  "duration": 4205596580,
  "status": "passed"
});
formatter.after({
  "duration": 787633,
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
        "TestCase_3",
        "1"
      ],
      "line": 9,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;2"
    },
    {
      "cells": [
        "TestCase_3",
        "2"
      ],
      "line": 10,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;3"
    },
    {
      "cells": [
        "TestCase_3",
        "3"
      ],
      "line": 11,
      "id": "free-crm-signup-feature;free-crm-sign-up-test-scenario-with-datatable;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1478984,
  "status": "passed"
});
formatter.before({
  "duration": 1431410,
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
  "name": "user is in the home page \"TestCase_3\" with \"1\"",
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
      "val": "TestCase_3",
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
  "duration": 8050971535,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 582623576,
  "error_message": "java.lang.AssertionError: The user Signup details entering failed!Element \u003ca class\u003d\"btn btn-sm btn-white btn-icon btn-icon-left btn-shadow btn-border btn-rect offset-sm-top-60 offset-top-30\" href\u003d\"https://register.freecrm.com/register/\"\u003e is not clickable at point (951,322) because another element \u003cdiv class\u003d\"rd-parallax-layer\"\u003e obscures it\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLB-332V0X2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 14680, moz:profile: C:\\Users\\SSwain5\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f719780f-f2a3-4cd4-8c4f-1729a5385185\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat stepDefinitions.SignUpStepDefination.userEntersEmailAndPhoneNumber(SignUpStepDefination.java:69)\r\n\tat ✽.Then user enters email and phoneNumber(signup.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 326985,
  "status": "passed"
});
formatter.after({
  "duration": 3417251067,
  "status": "passed"
});
formatter.before({
  "duration": 1586972,
  "status": "passed"
});
formatter.before({
  "duration": 1103669,
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
  "name": "user is in the home page \"TestCase_3\" with \"2\"",
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
      "val": "TestCase_3",
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
  "duration": 3658946270,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 1524959798,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 977916426,
  "status": "passed"
});
formatter.after({
  "duration": 336425,
  "status": "passed"
});
formatter.after({
  "duration": 1102483388,
  "status": "passed"
});
formatter.before({
  "duration": 1302655,
  "status": "passed"
});
formatter.before({
  "duration": 640377,
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
  "name": "user is in the home page \"TestCase_3\" with \"3\"",
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
      "val": "TestCase_3",
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
  "duration": 154534426,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 36248,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 28318,
  "status": "passed"
});
formatter.after({
  "duration": 275634,
  "status": "passed"
});
formatter.after({
  "duration": 242030,
  "status": "passed"
});
});