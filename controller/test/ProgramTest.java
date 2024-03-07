import static org.junit.Assert.assertEquals;
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

	@Test
	public void testByOrder() throws SQLException {
		createTest();
		readTest();
		listAllTest();
		updateTeste();
		deleteTest();

	}

	@Before
	public void init() throws SQLException {

		image.setName("Imagem-LinkedIn");
		image.setDescription("imagem fictícia");
		image.setQtdDownloads(10);

	}

	public void createTest() throws SQLException {
		imageDao.create(image);
		assertNotNull(image);
	}

	public void readTest() throws SQLException {
		assertNotNull(image);
		image.setId(1);
		Image returnedImage = imageDao.read(image.getId());
		assertNotNull(returnedImage);
		assertEquals(image.getName(), returnedImage.getName());
		System.out.println("Nome da imagem criada: " + returnedImage.getName());
	}

	public void listAllTest() {

	}

	public void updateTeste() throws SQLException {
		image.setId(1);
		image.setName("novo nome");
		image.setDescription("nova descrição");
		image.setQtdDownloads(10);
		imageDao.update(image);
		Image updatedImage = imageDao.read(image.getId());
		assertNotNull(updatedImage);
		assertEquals(image.getName(), updatedImage.getName());
		System.out.println("Nome da imagem atualizada: " + updatedImage.getName());
	}

	public void deleteTest() throws SQLException {

	}

	public void deleteAllTest() throws SQLException {

	}

}
