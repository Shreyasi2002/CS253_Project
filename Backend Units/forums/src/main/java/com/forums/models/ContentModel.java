package com.forums.models;

public class ContentModel {

	public ContentModel() {
	}
	public ContentModel(String content, String picture) {
		this.content = content;
		this.picture = picture;
	}
	
	
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
