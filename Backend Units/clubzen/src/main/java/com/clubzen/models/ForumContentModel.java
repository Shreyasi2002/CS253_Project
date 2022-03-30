package com.clubzen.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ForumContentModel {

	public ForumContentModel(@NotBlank @Size(min = 1) String content, String picture) {
		super();
		this.content = content;
		this.picture = picture;
	}
	public ForumContentModel() {
	}
	
	@NotBlank
	@Size(min = 1)
	private String content;
	private String picture;
	
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	@Override
	public String toString() {
		return "ContentModel [content=" + content + ", picture=" + picture + "]";
	}
	
}
