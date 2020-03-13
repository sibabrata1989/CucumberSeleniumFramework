package stepDefinitions;

import ObjectRepository.OR_Login;
import commonLib.*;
import cucumber.api.java.*;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.junit.AssumptionViolatedException;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assume;
import java.util.Map;


public class LoginStepDefinition {
    WebDriver driver;
    TestDataHandler testDataHandler;
    OR_Login objectRepo;
    Logger log = LoggerHelper.getLogger(LoggerHelper.class);
    Map<String, String> testDataInMap;
    TestConfig testConfig = new TestConfig();

    @Before
    public void setUp() {
        testDataHandler = new TestDataHandler();
        TestConfig.SetCommonEnv();

    }

    @Given("^user is already on Login Page for \"(.*)\" with \"(.*)\"$")
    public void userIsAlreadyOnLoginPageForTestCaseNameWithIteration(String testCase, String iteration) {
        try {
            //fetch test data rows from excel
            testDataInMap = ExcelHandler.getTestDataInMap(TestConfig.testDataDir + TestConfig.testDataFile, TestConfig.sheetName, testCase, iteration);
            if (testDataInMap.size() > 0) {
                driver = testConfig.openApplication(testDataInMap);

                //passing driver instance to the OR class
                objectRepo = new OR_Login(driver);
                objectRepo.verifyHomePage(testDataInMap);

                //storing data table and it's variables values for further use in the scenario steps
                testDataHandler.setTestDataInMap(testDataInMap);
                testDataHandler.setTestCaseName(testCase);
                testDataHandler.setIteration(iteration);
            } else {
                log.info("Test Data Found is: " + testDataInMap);
                //if "Run=No" the data fetched from the excel is null and execution is skipped using AssumeFalse(true).
                // Execution skipped and test Status is not updated in excel and execution passed
            }
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            e.printStackTrace();
            // update TestStatus FAIL if Test failed and execution goes inside catch
            testConfig.logStatusResult(testDataHandler, "FAIL");
            Assert.fail("The user home page navigation failed!" + e.getMessage());
        }

    }

    @Then("^user enters username and password$")
    public void userEntersUsernameAndPassword() {
        try {
            testDataInMap = testDataHandler.getTestDataInMap();
            //validate if test data is fetched
            Assume.assumeTrue(testDataInMap.size() > 0);
            objectRepo.login(testDataInMap);
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            BrowserHelper.SaveScreenshot(true, testDataHandler.getTestCaseName(), driver);
            testConfig.logStatusResult(testDataHandler, "FAIL");
            log.info(e.getMessage());
            Assert.fail("The user login failed!" + e.getMessage());
        }
    }

    @Then("^user clicks on login$")
    public void userClicksOnLogin() {
        try {
            testDataInMap = testDataHandler.getTestDataInMap();
            Assume.assumeTrue(testDataInMap.size() > 0);
            objectRepo.submitLogin();

            //log result PASS in Datasheet when last method is executed successfully!
            testConfig.logStatusResult(testDataHandler, "PASS");
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            BrowserHelper.SaveScreenshot(true, testDataHandler.getTestCaseName(), driver);
            testConfig.logStatusResult(testDataHandler, "FAIL");
            log.info(e.getMessage());
            Assert.fail("The login submit failed!" + e.getMessage());
        }

    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
        log.info("Browser closed!");
    }

}
