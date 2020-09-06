package ramkb.bhattarai;


import org.apache.http.HttpHost;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.SocketConfig;
import org.apache.http.conn.routing.HttpRoute;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;

public class TestFile {
	
static CloseableHttpClient httpClient = null;
	
	public static void main(String[] args)
	{
		PoolingHttpClientConnectionManager httpConnectionManager = new PoolingHttpClientConnectionManager();

		  httpConnectionManager.setDefaultMaxPerRoute(5);  
		 httpConnectionManager.setMaxTotal(50); 
		 httpConnectionManager.setDefaultSocketConfig(SocketConfig.custom().setSoTimeout(5000).build());
		 RequestConfig reqCon = RequestConfig.custom().setConnectTimeout(5000).build();
		 HttpHost localhost = new HttpHost("www.amazon.com", 80);
		 httpConnectionManager.setMaxPerRoute(new HttpRoute(localhost), 50);

		 
		 
		  httpClient = HttpClients.custom().setConnectionManager(httpConnectionManager).setDefaultRequestConfig(reqCon).build();
		
		for(int i = 0; i < 2; i++)  
        {  
            WorkerThread workerThread = new WorkerThread();  
            workerThread.start();  
        }
	
		
	}
	
}
