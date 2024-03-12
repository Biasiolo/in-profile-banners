package dao;

import java.sql.SQLException;
import java.util.List;

import domain.Image;

public interface IImagemDao {

	public void create(Image image) throws SQLException;

	public Image read(int id) throws SQLException;

	public List<Image> listAll() throws SQLException;

	public void update(Image image) throws SQLException;

	public void delete(int id) throws SQLException;

	public void deleteAll() throws SQLException;
}
