package commonLib;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

//Method1 : For choosing the browser type
public class BrowserHelper
{
	public static WebDriver LaunchBrowser(WebDriver driver)
	{
		if (driver == null)
			if ("chrome32".equals(TestConfig.browserEnv)) {
				System.setProperty("webdriver.chrome.driver", TestConfig.driverPath);
				driver = new ChromeDriver();
			} else if ("firefox32".equals(TestConfig.browserEnv) || "firefox64".equals(TestConfig.browserEnv)) {
				System.setProperty("webdriver.gecko.driver", TestConfig.driverPath);
				driver = new FirefoxDriver();
			} else if ("ie32".equals(TestConfig.browserEnv) || "ie64".equals(TestConfig.browserEnv)) {
				System.setProperty("webdriver.ie.driver", TestConfig.driverPath);
				driver = new InternetExplorerDriver();
			} else {
				System.out.println("Invalid browser Env");
			}
		return driver;
	}
	
	//Method 2 : Screenshot saving method
	public static void SaveScreenshot(boolean flag, String tcName, WebDriver driver)
	{
		try
		{
			if(flag) {
				Files.createDirectories(Paths.get(TestConfig.testRunDir + tcName));
				String ssFileName = TestConfig.testRunDir + tcName + "/" + new SimpleDateFormat("yyyyMMdd_HHmmssSSS").format(new Date()) + ".jpg";
				File ss = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(ss, new File(ssFileName));
			}
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	

}
