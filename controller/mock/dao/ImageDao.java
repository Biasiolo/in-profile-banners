package dao;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import domain.Image;

public class ImageDao implements IImagemDao {
	
	Connection conn = null;
	PreparedStatement stm = null;
	ResultSet rs = null;

	public void closeInstancies() throws SQLException {
		if (conn != null) {
			conn.close();
		}
		if (stm != null) {
			stm.close();
		}
		if (rs != null) {
			rs.close();
		}
	}

	@Override
	public void create(Image image) throws SQLException {

		try {
			conn = getConnection();
			stm = conn.prepareStatement("INSERT INTO TB_IMAGE(NAME, DESCRIPTION, QTTDOWNLOAD) VALUES (?, ?, ?)",
					Statement.RETURN_GENERATED_KEYS);
			stm.setString(1, image.getName());
			stm.setString(2, image.getDescription());
			stm.setInt(3, image.getQtdDownloads());
			stm.executeUpdate();
		} catch (Exception e) {
			throw new SQLException(e.getMessage());
		} finally {
			closeInstancies();
		}
	}

	@Override
	public Image read(int id) {

		return null;
	}

	@Override
	public List<Image> listAll() {

		return null;
	}

	@Override
	public void update() {
	}

	@Override
	public void delete() {

	}

	@Override
	public void deleteAll() {

	}

	public Connection getConnection() throws SQLException {
		try {
			return ConnectionFactory.getConnection();
		} catch (SQLException e) {
			throw new SQLException(e.getMessage());
		}
	}

}
