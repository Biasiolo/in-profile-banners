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
			throw new SQLException("Erro ao cadastrar imagem" + e.getMessage());
		} finally {
			closeInstancies();
		}
	}

	@Override
	public Image read(int id) throws SQLException {
		Image image = null;
		try {
			conn = getConnection();
			stm = conn.prepareStatement("SELECT * FROM TB_IMAGE WHERE ID = ?");
			stm.setInt(1, id);
			rs = stm.executeQuery();
			if (rs.next()) {
				image = new Image();
				image.setId(rs.getInt("ID"));
				image.setName(rs.getString("NAME"));
				image.setDescription(rs.getString("DESCRIPTION"));
				image.setQtdDownloads(rs.getInt("QTTDOWNLOAD"));
			} else {
				System.out.println("Nenhuma imagem encontrada para o ID: " + id);
			}
		} catch (Exception e) {
			throw new SQLException("Erro ao buscar imagem: " + e.getMessage());
		} finally {
			closeInstancies();
		}
		return image;
	}

	@Override
	public List<Image> listAll() throws SQLException {

		return null;
	}

	@Override
	public void update(Image image) throws SQLException {

		try {
			conn = getConnection();
			stm = conn.prepareStatement("UPDATE TB_IMAGE SET NAME = ?, DESCRIPTION = ? WHERE ID = ?");
			stm.setString(1, image.getName());
			stm.setString(2, image.getDescription());
			stm.setInt(3, image.getId());
			stm.executeUpdate();
		} catch (Exception e) {
			throw new SQLException("Erro ao atualizar informações da imagem: " + e.getMessage());
		} finally {
			closeInstancies();
		}
	}

	@Override
	public void delete() throws SQLException {

	}

	@Override
	public void deleteAll() throws SQLException {

	}

	public Connection getConnection() throws SQLException {
		try {
			return ConnectionFactory.getConnection();
		} catch (SQLException e) {
			throw new SQLException(e.getMessage());
		}
	}

}
