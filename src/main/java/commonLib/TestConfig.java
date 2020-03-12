package commonLib;

import java.io.FileInputStream;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

public class TestConfig
{
	public static String baseDir, testDataDir, testConfigDir, testResultDir, testResourcesDir,testRunDir;
	public static  String browserEnv, driverPath;
	public static  String appURL;
	public static  String testDataFile;
	public static  String sheetName;
	static Properties props = new Properties();

	
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
}
