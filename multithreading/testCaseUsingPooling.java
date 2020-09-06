package ramkb.bhattarai;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.apache.http.HttpEntity;
//import org.apache.commons.httpclient.HttpClient;
//import org.apache.commons.httpclient.HttpException;
//import org.apache.commons.httpclient.HttpMethod;
//import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
//import org.apache.commons.httpclient.methods.GetMethod;
//import org.apache.commons.httpclient.params.HostParams;
//import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
//import org.apache.commons.httpclient.params.HttpConnectionParams;
import org.apache.http.HttpHost;
import org.apache.http.HttpRequest;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.SocketConfig;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;

public class TestingzMain  {

	private static volatile TestingzMain httpClient = null;

	private TestingzMain() {

	}


	public static CloseableHttpClient getHttpClientInstance()

	{
		CloseableHttpClient closeableHttptClient = null;

		if (httpClient == null) {

			synchronized (DFPHttpClient.class) {

				if (httpClient == null) {
					PoolingHttpClientConnectionManager httpConnectionManager = new PoolingHttpClientConnectionManager();  
   				  httpConnectionManager.setDefaultMaxPerRoute(5);  
  				 httpConnectionManager.setMaxTotal(50);  
  				httpConnectionManager.setDefaultSocketConfig(SocketConfig.custom().setSoTimeout(5000).build());
  				RequestConfig reqCon = RequestConfig.custom().setConnectTimeout(5000).setSocketTimeout(5000).build();
  				 closeableHttptClient = HttpClients.custom().setConnectionManager(httpConnectionManager).setDefaultRequestConfig(reqCon).build();
				

				}

			}

		}

		return closeableHttptClient;

	}


	public static void main(String[] args) {

		final HttpContext context = HttpClientContext.create();
		final HttpGet httpget = new HttpGet("http://www.google.com");
		CloseableHttpClient httpClient = TestingzMain.getHttpClientInstance();
		System.out.println(httpClient.toString());
		System.out.println("starting of try");

		try {
			System.out.println("inside of try1");
			CloseableHttpResponse response = httpClient.execute(httpget, context);
			System.out.println(response.toString());
				
			try {
				System.out.println("inside of try2");
				HttpEntity entity = response.getEntity();
				System.out.println(entity);
			} finally {
				System.out.println("starting of finally");
				 System.out.println(response.getStatusLine().getStatusCode());
				 
				response.close();
			}
		} catch (ClientProtocolException ex) {
			ex.printStackTrace();
		} catch (IOException ex) {
			ex.printStackTrace();
		}
		System.out.println("end of try");

	}

}
