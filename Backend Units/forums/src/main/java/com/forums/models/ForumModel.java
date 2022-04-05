package com.forums.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "forums")
public class ForumModel {

	public ForumModel() {
		super();
	}
	public ForumModel(String id, String heading, ContentModel content, int likes, List<CommentModel> commentsList,
			String date, String time) {
		super();
		this.id = id;
		this.heading = heading;
		this.content = content;
		this.likes = likes;
		this.commentsList = commentsList;
		this.date = date;
		this.time = time;
	}
	
	
	@MongoId(FieldType.OBJECT_ID)
	private String id;
	private String heading;
	private ContentModel content;
	private int likes;
	private List<CommentModel> commentsList;
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
	public ContentModel getContent() {
		return content;
	}
	public void setContent(ContentModel content) {
		this.content = content;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	public List<CommentModel> getCommentsList() {
		return commentsList;
	}
	public void setCommentsList(List<CommentModel> commentsList) {
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
		return "ForumModel [id=" + id + ", header=" + heading + ", content=" + content + ", likes=" + likes
				+ ", commentsList=" + commentsList + ", date=" + date + ", time=" + time + "]";
	}
}
