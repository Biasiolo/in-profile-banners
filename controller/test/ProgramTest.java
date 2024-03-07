import static org.junit.Assert.assertEquals;
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

	@Test
	public void testByOrder() throws SQLException {
		createTest();
		readTest();
		listAllTest();
		updateTeste();
		deleteTest();

	}

	public void createTest() throws SQLException {

		image.setName("Imagem-LinkedIn");
		image.setDescription("imagem fictícia");
		image.setQtdDownloads(10);
		imageDao.create(image);
		assertNotNull(image);
	}

	public void readTest() throws SQLException {
		image.setId(1);
		Image returnedImage = imageDao.read(image.getId());
		assertNotNull(returnedImage);
		assertEquals("Imagem-LinkedIn", returnedImage.getName());

	}

	public void listAllTest() {

	}

	public void updateTeste() throws SQLException {

	}

	public void deleteTest() throws SQLException {

	}

	public void deleteAllTest() throws SQLException {

	}

}
