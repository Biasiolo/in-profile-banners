package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import domain.DownloadCounter;

public class DownloadCounterDao {

	public void increaseQuantity(int imageId) throws SQLException {
		Connection conn = null;
		PreparedStatement stm = null;
		ResultSet rs = null;
		String updateSQL = "UPDATE counter SET quantity = quantity + 1 WHERE imagemid = ?";

		try {
			conn = DatabaseConnection.getConnection();
			stm = conn.prepareStatement(updateSQL);
			stm.setInt(1, imageId);

			int rowsAffect = stm.executeUpdate();
			System.out.println("Linhas afetadas: " + rowsAffect);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			closeResources(conn, stm, rs);
		}
	}

	public DownloadCounter getCounterByImageId(int imageId) throws SQLException {
		Connection conn = null;
		PreparedStatement stm = null;
		ResultSet rs = null;
		DownloadCounter dCount = null;
		String getSQL = "SELECT * FROM COUNTER WHERE ID = ?";
		try {
			conn = DatabaseConnection.getConnection();
			stm = conn.prepareStatement(getSQL);
			stm.setLong(1, imageId);
			rs = stm.executeQuery();

			if (rs.next()) {
				dCount = new DownloadCounter((rs.getInt("id")), (rs.getInt("imagemid")), (rs.getInt("quantity")));

			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			closeResources(conn, stm, rs);
		}
		return dCount;
	}

	private void closeResources(Connection conn, PreparedStatement stm, ResultSet rs) throws SQLException {
		try {
			if (conn != null) {
				conn.close();
			}
			if (stm != null) {
				stm.close();
			}
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			System.err.println("Erro ao fechar recursos: " + e.getMessage());
		}
	}

}
