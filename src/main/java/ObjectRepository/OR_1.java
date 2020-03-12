package ObjectRepository;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Map;

import static org.testng.Assert.assertEquals;

public class OR_1 {
    WebDriver driver;

    public OR_1(WebDriver driver) {
        this.driver = driver;
    }

    By btnLogin = By.xpath("//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']");
    By txtUserName = By.name("email1");
    By txtPassword = By.name("password");
    By btnSubmit = By.xpath("//div[@class='ui fluid large blue submit button']");

    public void verifyHomePage(Map<String,String> testDataInMap)
    {
        String title = driver.getTitle();
        assertEquals(testDataInMap.get("PageTitle"), title);
    }
    public void login(Map<String,String> testDataInMap)
    {
        driver.findElement(btnLogin).click();
        driver.findElement(txtUserName).sendKeys(testDataInMap.get("UserName"));
        driver.findElement(txtPassword).sendKeys(testDataInMap.get("Password"));
    }
    public void submitLogin()
    {
        WebElement loginBtn = driver.findElement(btnSubmit);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);
    }

}
