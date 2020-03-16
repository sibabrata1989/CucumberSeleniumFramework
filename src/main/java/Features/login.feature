Feature: Free CRM Login Feature

    Scenario Outline: Free CRM Login Test Scenario with datatable
    Given user is already on Login Page for "<testCaseName>" with "<iteration>"
    Then user enters username and password
    Then user clicks on login
      Examples:
        |testCaseName  | iteration |
        | TestCase_1   |  1        |
        | TestCase_1   |  2        |
        | TestCase_1   |  3        |

    Scenario Outline: Free CRM Login Test Scenario with datatable
      Given user is already on Login Page for "<testCaseName>" with "<iteration>"
      Then user enters username and password
      Then user clicks on login
      Examples:
        |testCaseName  | iteration |
        | TestCase_2   |  1        |
        | TestCase_2   |  2        |
        | TestCase_2   |  3        |