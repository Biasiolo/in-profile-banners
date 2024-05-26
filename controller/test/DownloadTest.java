
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.sql.SQLException;

import org.junit.Before;
import org.junit.Test;

import dao.DownloadCounterDao;
import domain.DownloadCounter;

public class DownloadTest {

	DownloadCounter dCount;
	DownloadCounterDao dCountDao;
	DownloadCounter dCountFromDatabase;

	@Before
	public void setUp() throws SQLException {
		dCount = new DownloadCounter(1, 1, 0);
		dCountDao = new DownloadCounterDao();
		dCountFromDatabase = dCountDao.getCounterByImageId(1);
	}

	@Test
	public void getCounterByImageIdTest() throws SQLException {
		assertNotNull(dCount);
		System.out.println(dCount.toString());
		dCount = dCountDao.getCounterByImageId(1);
		assertNotNull(dCount);
		System.out.println(dCount.toString());
	}

	@Test
	public void increaseQuantityTest() throws SQLException {
		assertNotNull(dCount);
		assertNotNull(dCountFromDatabase);
		assertEquals(0, dCount.getQuantity());
		dCountDao.increaseQuantity(1);
		System.out.println(dCountFromDatabase.toString());
	}

}
