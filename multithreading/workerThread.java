package ramkb.bhattarai;


	import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;


	public class WorkerThread extends Thread
	{
		String url = "http://www.google.com";
		
		public void run()
		{
			GetMethod getMethod = new GetMethod(url);
			MultiThreadedHttpConnectionManager httpConnectionManager = new MultiThreadedHttpConnectionManager();
			HttpClient httpClient = new HttpClient(httpConnectionManager);
			try
			{
				httpClient.executeMethod(getMethod);
				System.out.println(this.getName() + " : " + getMethod.getResponseBodyAsString().substring(0, 25));
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
			finally
			{
				getMethod.releaseConnection();
			}
		}
	}



