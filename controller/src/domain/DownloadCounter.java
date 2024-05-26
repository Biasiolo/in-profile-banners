package domain;

public class DownloadCounter {

	private int id;
	private int imageId;
	private int quantity;

	public DownloadCounter(int id, int imageId, int quantity) {
		this.id = id;
		this.imageId = imageId;
		this.quantity = quantity;
	}

	public int getImageId() {
		return imageId;
	}

	public void setImageId(int imageId) {
		this.imageId = imageId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "DownloadCounter [id=" + id + ", imageId=" + imageId + ", quantity=" + quantity + "]";
	}
	

}
