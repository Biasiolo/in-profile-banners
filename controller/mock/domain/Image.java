package domain;

public class Image {

	private int id;
	private String name;
	private String description;
	private int qtdDownloads;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQtdDownloads() {
		return qtdDownloads;
	}

	public void setQtdDownloads(int qtdDownloads) {
		this.qtdDownloads = qtdDownloads;
	}

}
