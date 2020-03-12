$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SSwain5/Documents/Others/CucumberBDDFramework/CucumberSeleniumFramework/src/main/java/Features/login.feature");
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
  "duration": 3703170056,
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
  "duration": 678796831,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 12131451772,
  "error_message": "java.lang.AssertionError: The user login failed!no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email1\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLB-332V0X2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\SSwain5\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:64957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7671b83b3d055d956be1a13b6dd5657a\n*** Element info: {Using\u003dname, value\u003demail1}\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat stepDefinitions.LoginStepDefinition.userEntersUsernameAndPassword(LoginStepDefinition.java:88)\r\n\tat ✽.Then user enters username and password(C:/Users/SSwain5/Documents/Others/CucumberBDDFramework/CucumberSeleniumFramework/src/main/java/Features/login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1033293574,
  "status": "passed"
});
formatter.before({
  "duration": 2891473052,
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
  "duration": 113030732,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 51351,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 27941,
  "status": "passed"
});
formatter.after({
  "duration": 805385738,
  "status": "passed"
});
formatter.before({
  "duration": 2956467565,
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
  "duration": 187118147,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 14056558977,
  "error_message": "java.lang.AssertionError: The user login failed!no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email1\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLB-332V0X2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\SSwain5\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:65032}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1258a500c182fcc082ec8d18c104c10d\n*** Element info: {Using\u003dname, value\u003demail1}\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat stepDefinitions.LoginStepDefinition.userEntersUsernameAndPassword(LoginStepDefinition.java:88)\r\n\tat ✽.Then user enters username and password(C:/Users/SSwain5/Documents/Others/CucumberBDDFramework/CucumberSeleniumFramework/src/main/java/Features/login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1035233962,
  "status": "passed"
});
});