Feature: Free CRM Signup Feature

  Scenario Outline: Free CRM Sign up Test Scenario with datatable
    Given user is in the home page "<testCaseName>" with "<iteration>"
    Then user enters email and phoneNumber
    Then user clicks on SignUp
    Examples:
      |testCaseName  | iteration |
      | TestCase_2   |  1        |
      | TestCase_2   |  2        |
      | TestCase_2   |  3        |