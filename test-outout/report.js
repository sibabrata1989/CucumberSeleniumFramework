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
  "duration": 106856,
  "status": "passed"
});
formatter.before({
  "duration": 48330,
  "status": "passed"
});
formatter.before({
  "duration": 4736118521,
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
  "duration": 166701593,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 2566132352,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 22882158,
  "status": "passed"
});
formatter.after({
  "duration": 975231070,
  "status": "passed"
});
formatter.after({
  "duration": 33605,
  "status": "passed"
});
formatter.after({
  "duration": 35492,
  "status": "passed"
});
formatter.before({
  "duration": 50974,
  "status": "passed"
});
formatter.before({
  "duration": 57393,
  "status": "passed"
});
formatter.before({
  "duration": 3783470188,
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
  "duration": 19138065,
  "error_message": "java.lang.Exception: Test data cannot find . . .\r\n\tat commonLib.ExcelHandler.getTestDataInMap(ExcelHandler.java:38)\r\n\tat stepDefinitions.LoginStepDefinition.userIsAlreadyOnLoginPageForTestCaseNameWithIteration(LoginStepDefinition.java:80)\r\n\tat ✽.Given user is already on Login Page for \"TestCase_1\" with \"2\"(C:/Users/SSwain5/Documents/Others/CucumberBDDFramework/CucumberSeleniumFramework/src/main/java/Features/login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 779621127,
  "status": "passed"
});
formatter.after({
  "duration": 32472,
  "status": "passed"
});
formatter.after({
  "duration": 14348,
  "status": "passed"
});
formatter.before({
  "duration": 21522,
  "status": "passed"
});
formatter.before({
  "duration": 18124,
  "status": "passed"
});
formatter.before({
  "duration": 3052672537,
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
  "duration": 27412751,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 2483168009,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 21032767,
  "status": "passed"
});
formatter.after({
  "duration": 957985439,
  "status": "passed"
});
formatter.after({
  "duration": 89109,
  "status": "passed"
});
formatter.after({
  "duration": 90997,
  "status": "passed"
});
});