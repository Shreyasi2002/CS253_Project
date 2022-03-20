package com.loginsignup.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Role {
	@Id
	private String id;
	private Erole name;
	public Role() {
	}
	public Role(Erole name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id ) {
		this.id = id;
	}
	public Erole getName() {
		return name;
	}
	public void setName(Erole name) {
		this.name = name;
	}
}