package stepDefinitions;

import commonLib.*;
import cucumber.api.java.*;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

import org.testng.asserts.SoftAssert;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.assertEquals;

public class LoginStepDefinition {

    WebDriver driver = null;
    ExcelHelper objExcel = null;
    TestDataHandler testDataHandler;
    String tcName = null;
    SoftAssert softassertion;
    Logger log = LoggerHelper.getLogger(LoggerHelper.class);

    @Before
    public void setUp() {

        objExcel = new ExcelHelper();
        testDataHandler = new TestDataHandler();
        TestConfig.SetCommonEnv();
        objExcel.SetListHeader(TestConfig.testDataDir + "TestData.xlsx", 0);
        driver = BrowserHelper.LaunchBrowser(driver);
        log.info("Browser Launched!");
        driver.get((TestConfig.appURL));
        log.info("Application opened!");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        softassertion = new SoftAssert();

    }

   /* @Given("^user is already on Login Page$")
    public void user_already_on_login_page() {
        String title = driver.getTitle();
        System.out.println(title);
        assertEquals("Free CRM #1 cloud software for any business large or small", title);
    }

    //Reg Exp:
    //1. \"([^\"]*)\"
    //2. \"(.*)\"

    @Then("^user enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_username_and_password(String username, String password) {
        driver.findElement(By.xpath("//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")).click();
        driver.findElement(By.name("email")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() {
        WebElement loginBtn =
                driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);
    }*/
    //With test Data
    @Given("^user is already on Login Page for \"(.*)\" with \"(.*)\"$")
    public void userIsAlreadyOnLoginPageForTestCaseNameWithIteration(String testCase, String iteration) throws Exception {
        Map<String,String> TestDataInMap= ExcelHandler.getTestDataInMap(TestConfig.testDataDir + "TestData.xlsx", "Sheet1", testCase, iteration );
        if(TestDataInMap!=null) {
            String title = driver.getTitle();
            assertEquals(TestDataInMap.get("PageTitle"), title);
            log.info("Home page title verified!");
            testDataHandler.setTestDataInMap(TestDataInMap);
        }
        else
        {
            driver.quit();
        }
    }

    @Then("^user enters username and password$")
    public void userEntersUsernameAndPassword() {
        Map<String,String> testDataInMap=testDataHandler.getTestDataInMap();
        driver.findElement(By.xpath("//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")).click();
        driver.findElement(By.name("email")).sendKeys(testDataInMap.get("UserName"));
        driver.findElement(By.name("password")).sendKeys(testDataInMap.get("Password"));
        log.info("User details entered!");
    }

    @Then("^user clicks on login$")
    public void userClicksOnLogin() {
        WebElement loginBtn =
                driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);
        log.info("User logged in!");
    }
    @After
    public void tearDown() {
        objExcel.ClearDataList();
        driver.quit();
        log.info("Browser closed!");
    }

}
