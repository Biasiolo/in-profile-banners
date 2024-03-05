import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

import java.sql.SQLException;

import org.junit.Before;
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
		readTest();
		listAllTest();
		updateTeste();
		deleteTest();

	}

	@Test
	public void createTest() throws SQLException {

		image.setId(1);
		image.setName("Imagem-LinkedIn");
		image.setDescription("imagem fictícia");
		image.setQtdDownloads(10);
		imageDao.create(image);
		assertNotNull(image);
	}

	@Test
	public void readTest() throws SQLException {

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
