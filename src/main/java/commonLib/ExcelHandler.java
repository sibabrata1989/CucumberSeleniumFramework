package commonLib;

import java.util.Map;
import java.util.TreeMap;

import com.codoid.products.exception.FilloException;
import com.codoid.products.fillo.Connection;
import com.codoid.products.fillo.Fillo;
import com.codoid.products.fillo.Recordset;

public class ExcelHandler {
    public static Map<String, String> getTestDataInMap(String testDataFile, String sheetName, String testCaseId, String iteration) {
        Map<String, String> TestDataInMap = new TreeMap<String, String>();
        String query = null;
        Recordset recordset = null;
        query = String.format("SELECT * FROM %s WHERE Run='Yes' and TestCaseId='%s' and Iteration='%s'",
                sheetName, testCaseId, iteration);
        Fillo fillo = new Fillo();
        Connection conn = null;
        //Cleaning the TestCaseStatus column values as precondition
        String query1 = String.format("UPDATE %s SET TestCaseStatus='' where TestCaseID='%s' and Iteration ='%s'", sheetName, testCaseId, iteration);
        try {
            conn = fillo.getConnection(testDataFile);
            conn.executeUpdate(query1);
            recordset = conn.executeQuery(query);

            while (recordset.next()) {
                for (String field : recordset.getFieldNames()) {
                    TestDataInMap.put(field, recordset.getField(field));
                }

            }
        } catch (FilloException e) {
            ;
        }


        conn.close();
        return TestDataInMap;
    }
    //Update Status to The TestCaseStatus column
    public static void UpdateTestResultsToExcel(String testDataFilePath, String sheetName, String tcStatus, String testCaseId, String iteration) {
        Connection conn = null;
        Fillo fillo = new Fillo();
        try {
            conn = fillo.getConnection(testDataFilePath);
            String query2 = String.format("UPDATE %s SET TestCaseStatus='%s' where TestCaseID='%s' and Iteration ='%s'", sheetName, tcStatus, testCaseId, iteration);
            conn.executeUpdate(query2);
            conn.close();
        } catch (FilloException e) {
            e.printStackTrace();
        }
    }

}