package com.clubzen.models;

import javax.validation.constraints.NotBlank;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "porholdersdirectory")
public class porHolderModel {
	
	public porHolderModel(String id, @NotBlank String councilFestName, @NotBlank String clubSectionName,
			@NotBlank String positionName, @NotBlank String username) {
		super();
		this.id = id;
		this.councilFestName = councilFestName;
		this.clubSectionName = clubSectionName;
		this.positionName = positionName;
		this.username = username;
	}
	public void porHoldersModel() {

	}
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	@NotBlank
	private String councilFestName;
	@NotBlank
	private String clubSectionName;
	@NotBlank
	private String positionName;
	@NotBlank
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
