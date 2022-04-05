package com.porholdersdirectories.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "porholdersdirectory")
public class porHolderModel {

	public porHolderModel(String id, String councilFestName, String clubSectionName, String positionName, String username) {
		super();
		this.id = id;
		this.councilFestName = councilFestName;
		this.clubSectionName = clubSectionName;
		this.positionName = positionName;
		this.username = username;
	}
	
	public porHolderModel() {

	}
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	private String councilFestName;
	private String clubSectionName;
	private String positionName;
	private String username;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCouncilFestName() {
		return councilFestName;
	}
	public void setCouncilFestName(String councilFestName) {
		this.councilFestName = councilFestName;
	}
	public String getClubSectionName() {
		return clubSectionName;
	}
	public void setClubSectionName(String clubSectionName) {
		this.clubSectionName = clubSectionName;
	}
	public String getPositionName() {
		return positionName;
	}
	public void setPositionName(String positionName) {
		this.positionName = positionName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "porHolderModel [id=" + id + ", councilFestName=" + councilFestName + ", clubSectionName="
				+ clubSectionName + ", positionName=" + positionName + ", username=" + username + "]";
	}
}
