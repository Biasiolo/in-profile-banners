package dao;

import java.sql.SQLException;
import java.util.List;

import domain.Image;

public interface IImagemDao {

	public void create(Image image) throws SQLException;

	public Image read();

	public List<Image> listAll();

	public void update();

	public void delete();

	public void deleteAll();
}
