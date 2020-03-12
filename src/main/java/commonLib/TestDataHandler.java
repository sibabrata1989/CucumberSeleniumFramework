package commonLib;

import java.util.HashMap;
import java.util.Map;

public class TestDataHandler
{
    Map<String,String> testDataInMap=new HashMap<String,String>();

    public String getTestCaseName() {
        return testCaseName;
    }

    public void setTestCaseName(String testCaseName) {
        this.testCaseName = testCaseName;
    }

    String testCaseName;

    public String getIteration() {
        return iteration;
    }

    public void setIteration(String iteration) {
        this.iteration = iteration;
    }

    String iteration;

    public Map<String, String> getTestDataInMap() {
        return testDataInMap;
    }

    public void setTestDataInMap(Map<String, String> testDataInMap) {
        this.testDataInMap = testDataInMap;
    }


}