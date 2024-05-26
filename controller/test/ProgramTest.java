import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.sql.SQLException;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import dao.IImagemDao;
import dao.ImageDao;
import domain.Image;

public class ProgramTest {

	private IImagemDao imageDao;
	public Image image1 = new Image();
	public Image image2 = new Image();

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
		deleteAllTest();
	}

	@Before
	public void init() throws SQLException {

		image1.setName("Imagem-LinkedIn-1");
		image1.setDescription("imagem fictícia 1");
		image1.setQtdDownloads(10);

		image2.setName("Imagem-LinkedIn-2");
		image2.setDescription("imagem fictícia 2");
		image2.setQtdDownloads(20);

	}

	public void createTest() throws SQLException {
		System.out.println("--Teste de criação--");
		imageDao.create(image1);
		assertNotNull(image1);
		System.out.println("imagem criada: " + image1.getName());
	}

	public void readTest() throws SQLException {
		System.out.println("\n--Teste de leitura--");
		assertNotNull(image1);
		image1.setId(1);
		Image returnedImage = imageDao.read(image1.getId());
		assertNotNull(returnedImage);
		assertEquals(image1.getName(), returnedImage.getName());
		System.out.println("imagem retornada :" + returnedImage.getName());
	}

	public void listAllTest() throws SQLException {
		System.out.println("\n--Teste de listagem--");
		imageDao.create(image2);
		assertNotNull(image2);
		List<Image> images = imageDao.listAll();
		assertEquals(image1.getName(), images.get(0).getName());
		assertEquals(image2.getName(), images.get(1).getName());
		System.out.print("Imagens no banco de dados: ");
		for (Image img : images) {
			System.out.print("[" + img.getName() + "]");
		}
		System.out.println();
	}

	public void updateTeste() throws SQLException {
		System.out.println("\n--Teste de atualização--");
		image1.setId(1);
		image1.setName("nome atualizado");
		image1.setDescription("nova descrição");
		image1.setQtdDownloads(10);
		imageDao.update(image1);
		Image updatedImage = imageDao.read(image1.getId());
		assertNotNull(updatedImage);
		assertEquals(image1.getName(), updatedImage.getName());
		System.out.println("Nome da imagem atualizada: " + updatedImage.getName());
	}

	public void deleteTest() throws SQLException {
		System.out.println("\n--Teste para apagar uma--");
		assertNotNull(image1);
		imageDao.delete(image1.getId());
		image1 = imageDao.read(image1.getId());
		assertNull(image1);
		assertNotNull(image2);

	}

	public void deleteAllTest() throws SQLException {
		System.out.println("\n--Teste para apagar todas--");
		assertNotNull(image2);
		imageDao.deleteAll();
		Image returnedImage = imageDao.read(image2.getId());
		assertNull(returnedImage);
		imageDao.listAll();

	}

}
