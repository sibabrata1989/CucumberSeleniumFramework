package commonLib;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class TestConfig
{
	public static String baseDir, testDataDir, testConfigDir, testResultDir, testResourcesDir,testRunDir;
	public static  String browserEnv, driverPath;
	public static  String appURL;
	public static  String testDataFile;
	public static  String sheetName;
	static Properties props = new Properties();
	static Logger log = LoggerHelper.getLogger(LoggerHelper.class);
	WebDriver driver;

//Set the path of all folder directory and fetch property values
	public static void SetCommonEnv()
	{
		try
		{
		baseDir = System.getProperty("user.dir");
		testDataDir = baseDir + "/TestData/";
		testConfigDir = baseDir + "/TestConfig/";
		testResultDir = baseDir + "/TestResults/";
		testResourcesDir = baseDir + "/TestResources/";
		
		//To create a folder name  like "Run_20170822_183800"
		testRunDir = testResultDir + "Run_" + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()) + "/";
		
		//Read values from property file
		FileInputStream fis = new FileInputStream(testConfigDir + "testConfig.properties");
		props.load(fis);
		fis.close();


		appURL = props.getProperty("CRMUrl");
		testDataFile = props.getProperty("testDataFile");
		sheetName = props.getProperty("sheetName");
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}

		
	}
	//Select browser from datasheet (Default set to chrome32)
	public static void setBrowser(String browser)
	{
		if (browser == "") {
			browserEnv = props.getProperty("browserEnv"); // Load the Browser type as given in the property file
			driverPath = testResourcesDir + props.getProperty("driverPath_" + browserEnv );// picks the driver browser key from the property file.
		}
		else
		{
			browserEnv = browser;
			driverPath = testResourcesDir + props.getProperty("driverPath_" + browserEnv );// picks the driver browser key from the property file.
		}
	}
	//Launch application based on browser selection and return driver instance
	public WebDriver openApplication(Map<String,String> testDataInMap)
	{
		this.setBrowser(testDataInMap.get("Browser"));
		driver = BrowserHelper.LaunchBrowser(driver);
		log.info("Browser Launched!");
		driver.get((this.appURL));
		log.info("Application opened!");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		return driver;
	}
	//update the test execution status PASS/FAIL to the excel sheet
	public void logStatusResult(TestDataHandler testDataHandler,String result) {
		ExcelHandler.UpdateTestResultsToExcel(this.testDataDir + this.testDataFile, this.sheetName, result, testDataHandler.getTestCaseName(), testDataHandler.getIteration());
	}
}
