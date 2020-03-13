package stepDefinitions;
import ObjectRepository.OR_SignUp;
import commonLib.*;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.junit.Assume;
import org.junit.AssumptionViolatedException;
import org.openqa.selenium.WebDriver;
import java.util.Map;

public class SignUpStepDefination {
    WebDriver driver;
    TestDataHandler testDataHandler;
    OR_SignUp objectRepo;
    Logger log = LoggerHelper.getLogger(LoggerHelper.class);
    Map<String, String> testDataInMap;
    TestConfig testConfig = new TestConfig();

    @Before
    public void setUp() {
        testDataHandler = new TestDataHandler();
        TestConfig.SetCommonEnv();
    }

    @Given("^user is in the home page \"(.*)\" with \"(.*)\"$")
    public void userIsOnSignUpPageForTestCaseNameWithIteration(String testCase, String iteration) {
        try {
            testDataInMap = ExcelHandler.getTestDataInMap(TestConfig.testDataDir + TestConfig.testDataFile, TestConfig.sheetName, testCase, iteration);
            if (testDataInMap.size() > 0) {
                driver = testConfig.openApplication(testDataInMap);

                objectRepo = new OR_SignUp(driver);
                objectRepo.verifyHomePage(testDataInMap);

                //storing these variables values
                testDataHandler.setTestDataInMap(testDataInMap);
                testDataHandler.setTestCaseName(testCase);
                testDataHandler.setIteration(iteration);
            } else {
                log.info("Test Data Found is: " + testDataInMap);
                Assume.assumeFalse(true);
            }
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            e.printStackTrace();
            testConfig.logStatusResult(testDataHandler, "FAIL");
            Assert.fail("The user home screen navigation failed!" + e.getMessage());
        }

    }

    @Then("^user enters email and phoneNumber$")
    public void userEntersEmailAndPhoneNumber() {
        try {
            testDataInMap = testDataHandler.getTestDataInMap();
            Assume.assumeTrue(testDataInMap.size() > 0);
            objectRepo.SignUp(testDataInMap);
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            BrowserHelper.SaveScreenshot(true, testDataHandler.getTestCaseName(), driver);
            testConfig.logStatusResult(testDataHandler, "FAIL");
            log.info(e.getMessage());
            Assert.fail("The user Signup details entering failed!" + e.getMessage());
        }
    }

    @Then("^user clicks on SignUp$")
    public void userClicksOnSignUp() {
        try {
            testDataInMap = testDataHandler.getTestDataInMap();
            Assume.assumeTrue(testDataInMap.size() > 0);
            objectRepo.submitSignUp();
            //log result PASS in Datasheet when last method is executed successfully!
            testConfig.logStatusResult(testDataHandler, "PASS");
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            BrowserHelper.SaveScreenshot(true, testDataHandler.getTestCaseName(), driver);
            testConfig.logStatusResult(testDataHandler, "FAIL");
            log.info(e.getMessage());
            Assert.fail("The user signup click failed!" + e.getMessage());
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