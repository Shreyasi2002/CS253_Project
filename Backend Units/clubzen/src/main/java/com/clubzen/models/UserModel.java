package com.clubzen.models;

import java.util.List;

import javax.validation.constraints.NotBlank;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "users")
public class UserModel {
	
	public UserModel(String id, @NotBlank String username, @NotBlank String fullname, @NotBlank String email,
			@NotBlank String password, List<String> role) {
		super();
		this.id = id;
		this.username = username;
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	public UserModel() {
	}
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	@NotBlank
	private String username;
	@NotBlank
	private String fullname;
	@NotBlank
	private String email;
	@NotBlank
	private String password;
	private List<String> role;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public List<String> getRole() {
		return role;
	}
	public void setRole(List<String> role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserModel [id=" + id + ", username=" + username + ", fullname=" + fullname + ", email=" + email
				+ ", password=" + password + ", role=" + role + "]";
	}

	
}