package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

	private static final String RailwayURL = "jdbc:postgresql://viaduct.proxy.rlwy.net:30407/railway";
	private static final String RailwayUSER = "postgres";
	private static final String RailwayPASSWORD = "TognOPNzumdSmvUIXJumVvEBsKVjZXxy";

	public static Connection getConnection() throws SQLException {
		Connection connection = null;
		try {
			connection = DriverManager.getConnection(RailwayURL, RailwayUSER, RailwayPASSWORD);
			System.out.println("Conexão estabelecida com sucesso!");
		} catch (SQLException e) {
			System.err.println("Falha ao conectar ao banco de dados!");
			e.printStackTrace();
			throw e;
		}
		return connection;
	}

	public static void main(String[] args) {
		try {
			Connection connection = DatabaseConnection.getConnection();

			// Use a conexão aqui
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
