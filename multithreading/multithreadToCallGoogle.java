package ramkb.bhattarai;

import java.io.IOException;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HostParams;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.apache.commons.httpclient.params.HttpConnectionParams;

public class DFPHttpClient extends HttpClient{
	
	private  static volatile DFPHttpClient  httpClient = null;  

    private DFPHttpClient(){
    	
    }

   private DFPHttpClient(MultiThreadedHttpConnectionManager httpConnectionManager){

			super(httpConnectionManager);

	}

   public static DFPHttpClient getHttpClientInstance()  

    {  

		if(httpClient == null){

			synchronized(DFPHttpClient.class){

				if(httpClient == null){
       					 MultiThreadedHttpConnectionManager httpConnectionManager = new MultiThreadedHttpConnectionManager();  
       					 HttpConnectionManagerParams params = new HttpConnectionManagerParams();  
         				  params.setDefaultMaxConnectionsPerHost(5);  
        					    params.setMaxTotalConnections(50);  
     					      params.setConnectionTimeout(5000);  
    					       params.setSoTimeout(5000);  
    					       
     					      HostParams hostParams = new HostParams();  
      					      hostParams.setIntParameter(HttpConnectionParams.CONNECTION_TIMEOUT, 2000);  
        					    hostParams.setIntParameter(HttpConnectionParams.SO_TIMEOUT, 2000);  
        					    
              				   httpConnectionManager.setParams(params);  

      					  httpClient = new DFPHttpClient(httpConnectionManager);  

     				  }

   			 } 

		}
		

	 	  return httpClient;

	  }
   
   public static void main(String[] args) {
	   DFPHttpClient httpClient  = DFPHttpClient.getHttpClientInstance();
	   
		String url ="www.google.com";
		GetMethod x = new GetMethod(url);
		String response = "";
		try {
			httpClient.executeMethod(x);
			response +=  x.getResponseBodyAsString();
		} catch (HttpException e1) {
			
			e1.printStackTrace();
		} catch (IOException e1) {
			
			e1.printStackTrace();
		}
		int code = x.getStatusCode();
		System.out.println(code);
		
		
		
		System.out.println(response);
	
}

}
