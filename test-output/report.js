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
  "duration": 48744185,
  "status": "passed"
});
formatter.before({
  "duration": 380979,
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
  "duration": 4240836961,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 1739586979,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 135742224,
  "status": "passed"
});
formatter.after({
  "duration": 1104802489,
  "status": "passed"
});
formatter.after({
  "duration": 368896,
  "status": "passed"
});
formatter.before({
  "duration": 467445,
  "status": "passed"
});
formatter.before({
  "duration": 385888,
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
  "duration": 136674093,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 146501,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 39268,
  "status": "passed"
});
formatter.after({
  "duration": 448944,
  "status": "passed"
});
formatter.after({
  "duration": 394195,
  "status": "passed"
});
formatter.before({
  "duration": 522572,
  "status": "passed"
});
formatter.before({
  "duration": 447056,
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
  "duration": 5548756456,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 2378179751,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.userClicksOnLogin()"
});
formatter.result({
  "duration": 103729026,
  "status": "passed"
});
formatter.after({
  "duration": 2154391700,
  "status": "passed"
});
formatter.after({
  "duration": 308861,
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
  "duration": 496142,
  "status": "passed"
});
formatter.before({
  "duration": 372294,
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
  "duration": 2968882047,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 1458944306,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 809314090,
  "status": "passed"
});
formatter.after({
  "duration": 317546,
  "status": "passed"
});
formatter.after({
  "duration": 941169497,
  "status": "passed"
});
formatter.before({
  "duration": 467068,
  "status": "passed"
});
formatter.before({
  "duration": 384755,
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
  "duration": 89237471,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 26808,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 26053,
  "status": "passed"
});
formatter.after({
  "duration": 258643,
  "status": "passed"
});
formatter.after({
  "duration": 203516,
  "status": "passed"
});
formatter.before({
  "duration": 455741,
  "status": "passed"
});
formatter.before({
  "duration": 318301,
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
  "duration": 5662788910,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userEntersEmailAndPhoneNumber()"
});
formatter.result({
  "duration": 2246194456,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefination.userClicksOnSignUp()"
});
formatter.result({
  "duration": 775313307,
  "status": "passed"
});
formatter.after({
  "duration": 222018,
  "status": "passed"
});
formatter.after({
  "duration": 1994349880,
  "status": "passed"
});
});