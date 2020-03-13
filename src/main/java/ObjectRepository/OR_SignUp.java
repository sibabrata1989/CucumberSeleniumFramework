package ObjectRepository;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.Map;
import static org.testng.Assert.assertEquals;
public class OR_SignUp {
    WebDriver driver;

    public OR_SignUp(WebDriver driver) {
        this.driver = driver;
    }

    By btnSignUp = By.xpath("//a[@class='btn btn-sm btn-white btn-icon btn-icon-left btn-shadow btn-border btn-rect offset-sm-top-60 offset-top-30']");
    By txtEmail = By.id("email");
    By txtPhone = By.id("phone_number");
    By checkboxTerm = By.id("terms");
    By btnSubmit = By.xpath("//button[@name='action']");

    public void verifyHomePage(Map<String,String> testDataInMap)
    {
        String title = driver.getTitle();
        assertEquals(testDataInMap.get("PageTitle"), title);
    }
    public void SignUp(Map<String,String> testDataInMap)
    {
        driver.findElement(btnSignUp).click();
        driver.findElement(txtEmail).sendKeys(testDataInMap.get("Email"));
        driver.findElement(txtPhone).sendKeys(testDataInMap.get("Phone"));
        driver.findElement(checkboxTerm).click();
    }
    public void submitSignUp()
    {
        WebElement loginBtn = driver.findElement(btnSubmit);
        loginBtn.click();
        /*JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);*/
    }

}
