package stepDefinitions;

import ObjectRepository.OR_1;
import commonLib.*;
import cucumber.api.java.*;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.junit.AssumptionViolatedException;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.testng.asserts.SoftAssert;
import org.junit.Assume;

import java.util.Map;
import java.util.concurrent.TimeUnit;


public class LoginStepDefinition {

    WebDriver driver;
    TestDataHandler testDataHandler;
    SoftAssert softassertion;
    Logger log = LoggerHelper.getLogger(LoggerHelper.class);
    OR_1 objectRepo;
    Map<String, String> testDataInMap;

    public void logStatusResult(String result) {
        ExcelHandler.UpdateTestResultsToExcel(TestConfig.testDataDir + TestConfig.testDataFile, TestConfig.sheetName, result, testDataHandler.getTestCaseName(), testDataHandler.getIteration());
    }

    @Before
    public void setUp() {
        testDataHandler = new TestDataHandler();
        softassertion = new SoftAssert();

        TestConfig.SetCommonEnv();
    }

    @Given("^user is already on Login Page for \"(.*)\" with \"(.*)\"$")
    public void userIsAlreadyOnLoginPageForTestCaseNameWithIteration(String testCase, String iteration) {
        try {
            testDataInMap = ExcelHandler.getTestDataInMap(TestConfig.testDataDir + TestConfig.testDataFile, TestConfig.sheetName, testCase, iteration);
            if (testDataInMap.size() > 0) {
                TestConfig.setBrowser(testDataInMap.get("Browser"));
                driver = BrowserHelper.LaunchBrowser(driver);
                objectRepo = new OR_1(driver);
                log.info("Browser Launched!");
                driver.get((TestConfig.appURL));
                log.info("Application opened!");
                driver.manage().window().maximize();
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
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
            logStatusResult("FAIL");
            Assert.fail("The user login failed!" + e.getMessage());
        }


    }


    @Then("^user enters username and password$")
    public void userEntersUsernameAndPassword() {
        try {
            testDataInMap = testDataHandler.getTestDataInMap();
            Assume.assumeTrue(testDataInMap.size() > 0);
            objectRepo.login(testDataInMap);
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            BrowserHelper.SaveScreenshot(true, testDataHandler.getTestCaseName(), driver);
            logStatusResult("FAIL");
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
            logStatusResult("PASS");
        } catch (AssumptionViolatedException e) {
            //Assume.assumeNoException(e);
        } catch (Exception e) {
            BrowserHelper.SaveScreenshot(true, testDataHandler.getTestCaseName(), driver);
            logStatusResult("FAIL");
            log.info(e.getMessage());
            Assert.fail("The login submit failed!" + e.getMessage());
        }

    }

    @After
    public void tearDown() {
        if(driver != null) {
            driver.quit();
        }
        log.info("Browser closed!");
    }

}
