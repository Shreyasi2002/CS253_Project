package com.clubzen.models;

import javax.validation.constraints.NotBlank;

public class ForumCommentModel {

	public ForumCommentModel(int id, @NotBlank String username, @NotBlank ForumContentModel comment, String date,
			String time) {
		super();
		this.id = id;
		this.username = username;
		this.comment = comment;
		this.date = date;
		this.time = time;
	}
	
	public ForumCommentModel() {
		super();
	}
	
	private int id;
	@NotBlank
	private String username;
	@NotBlank
	private ForumContentModel comment;
	private String date;
	private String time;
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public ForumContentModel getComment() {
		return comment;
	}
	public void setComment(ForumContentModel comment) {
		this.comment = comment;
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
	@Override
	public String toString() {
		return "CommentModel [id=" + id + ", username=" + username + ", comment=" + comment + ", date=" + date
				+ ", time=" + time + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int i) {
		this.id = i;
	}

}
