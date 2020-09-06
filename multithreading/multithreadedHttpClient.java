



import org.apache.commons.httpclient.HostConfiguration;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpHost;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.params.HostParams;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.apache.commons.httpclient.params.HttpConnectionParams;

public class MultiThreadHttpEfficient
{
	static HttpClient httpClient = null;
	
	public static void main(String[] args)
	{
		MultiThreadedHttpConnectionManager httpConnectionManager = new MultiThreadedHttpConnectionManager();
		HttpConnectionManagerParams params = new HttpConnectionManagerParams();
			params.setDefaultMaxConnectionsPerHost(5);
			params.setMaxTotalConnections(50);
			params.setConnectionTimeout(5000);
			params.setSoTimeout(5000);
			
		HostConfiguration amazonHostConfig = new HostConfiguration();
			amazonHostConfig.setHost(new HttpHost("www.amazon.com", 80));
			HostParams hostParams = new HostParams();
			hostParams.setIntParameter(HttpConnectionParams.CONNECTION_TIMEOUT, 2000);
			hostParams.setIntParameter(HttpConnectionParams.SO_TIMEOUT, 2000);
			amazonHostConfig.setParams(hostParams);
		
		params.setMaxConnectionsPerHost(amazonHostConfig, 20);
		httpConnectionManager.setParams(params);
		httpClient = new HttpClient(httpConnectionManager);
		httpClient.getHostConfiguration().setProxy("proxyHostName", 80);
		
		for(int i = 0; i < 2; i++)  
        {  
            WorkerThread workerThread = new WorkerThread();  
            workerThread.start();  
        }
	
		
	}
}
