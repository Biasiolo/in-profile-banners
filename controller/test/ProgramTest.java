import static org.junit.Assert.assertNotNull;

import java.sql.SQLException;

import org.junit.Test;

import dao.IImagemDao;
import dao.ImageDao;
import domain.Image;

public class ProgramTest {

	private IImagemDao imageDao;
	public Image image = new Image();

	public ProgramTest() {

		imageDao = new ImageDao();
	}

	public void testByOrder() throws SQLException {
		createTest();
	//	readTest();
		listAllTest();
		updateTeste();
		deleteTest();

	}

	@Test
	public void createTest() throws SQLException {

		image.setName("Imagem-LinkedIn");
		image.setDescription("imagem fictícia");
		image.setQtdDownloads(10);
		imageDao.create(image);
		assertNotNull(image);
	}

	@Test
	public void readTest() throws SQLException {
		Image returnedImage = imageDao.read(image.getId());
	}

	@Test
	public void listAllTest() {

	}

	@Test
	public void updateTeste() throws SQLException {

	}

	@Test
	public void deleteTest() throws SQLException {

	}

	@Test
	public void deleteAllTest() throws SQLException {

	}

}
