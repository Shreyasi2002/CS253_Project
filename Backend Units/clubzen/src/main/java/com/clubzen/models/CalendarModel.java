package com.clubzen.models;

import javax.validation.constraints.NotBlank;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;


@Document(collection = "calendar")
public class CalendarModel {

	public CalendarModel(String id, @NotBlank String subject, String location, String startTime, String endTime,
			String categoryColor) {
		super();
		this.id = id;
		this.subject = subject;
		this.location = location;
		this.startTime = startTime;
		this.endTime = endTime;
		this.categoryColor = categoryColor;
	}
	
	public CalendarModel() {
		
	}
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	@NotBlank
	private String subject;
	private String location;
	private String startTime;
	private String endTime;
	private String categoryColor;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getCategoryColor() {
		return categoryColor;
	}
	public void setCategoryColor(String categoryColor) {
		this.categoryColor = categoryColor;
	}
	@Override
	public String toString() {
		return "CalendarModel [id=" + id + ", subject=" + subject + ", location=" + location + ", startTime="
				+ startTime + ", endTime=" + endTime + ", categoryColor=" + categoryColor + "]";
	}

}
