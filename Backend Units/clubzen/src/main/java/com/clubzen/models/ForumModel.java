package com.clubzen.models;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "forums")
public class ForumModel {

	public ForumModel(String id, @NotBlank String userid, @NotBlank String username,
			@NotEmpty @Size(min = 2) String heading, @NotBlank ForumContentModel content, int likes,
			List<ForumCommentModel> commentsList, String date, String time) {
		super();
		this.id = id;
		this.userid = userid;
		this.username = username;
		this.heading = heading;
		this.content = content;
		this.likes = likes;
		this.commentsList = commentsList;
		this.date = date;
		this.time = time;
	}
	public ForumModel() {
		super();
		this.likes = 0;
	}
	
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	@NotBlank
	private String userid;
	@NotBlank
	private String username;
	@NotEmpty
	@Size(min = 1)
	private String heading;
	@NotBlank
	private ForumContentModel content;
	private int likes;
	private List<ForumCommentModel> commentsList;
	private String date;
	private String time;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeader(String heading) {
		this.heading = heading;
	}
	public ForumContentModel getContent() {
		return content;
	}
	public void setContent(ForumContentModel content) {
		this.content = content;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	public List<ForumCommentModel> getCommentsList() {
		return commentsList;
	}
	public void setCommentsList(List<ForumCommentModel> commentsList) {
		this.commentsList = commentsList;
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
		return "ForumModel [id=" + id + ", userid=" + userid + ", username=" + username + ", heading=" + heading
				+ ", content=" + content + ", likes=" + likes + ", commentsList=" + commentsList + ", date=" + date
				+ ", time=" + time + "]";
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
}
