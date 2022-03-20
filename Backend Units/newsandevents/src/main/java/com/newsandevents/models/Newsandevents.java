package com.newsandevents.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection="newsandevents")
public class Newsandevents {

	public Newsandevents(String id, String heading, String sub_heading, String date, String time, String details,
			String image) {
		super();
		this.id = id;
		this.heading = heading;
		this.sub_heading = sub_heading;
		this.date = date;
		this.time = time;
		this.details = details;
		this.image = image;
	}
	public Newsandevents() {
	}
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	private String heading;
	private String sub_heading;
	private String date;
	private String time;
	private String details;
	private String image;
	
	@Override
	public String toString() {
		return "Newsandevents [id=" + id + ", heading=" + heading + ", sub_heading=" + sub_heading + ", date=" + date
				+ ", time=" + time + ", details=" + details + ", image=" + image + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getSub_heading() {
		return sub_heading;
	}
	public void setSub_heading(String sub_heading) {
		this.sub_heading = sub_heading;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String bs) {
		this.image = bs;
	}
	
}
