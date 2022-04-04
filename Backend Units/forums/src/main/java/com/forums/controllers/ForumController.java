package com.forums.controllers;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.forums.models.CommentModel;
import com.forums.models.ContentModel;
import com.forums.models.ForumModel;
import com.forums.repositories.ForumRepository;
import com.forums.exceptions.ResourceNotFoundException;

@RestController
public class ForumController {

	@Autowired
	private ForumRepository forumRepository;
	
	@GetMapping("/getallforums")
	public List<ForumModel> getallforums(){
		List<ForumModel> list = forumRepository.findAll();
		return list;
	}
	
	@GetMapping("/getforumbyid")
	public ForumModel getforumbyid(@RequestBody String id){
		ForumModel forum = forumRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		return forum;
	}
	
	@PostMapping(path = "/addnewforum")
	public ResponseEntity<ForumModel> addnewforum(@RequestPart("forummodel") ForumModel forumModel,
									@RequestParam(name = "file", required = false) MultipartFile file) throws IOException{
		
		ContentModel contentModel = new ContentModel();
		contentModel.setContent(forumModel.getContent().getContent());
		if(file!=null)
			contentModel.setPicture(Base64.getEncoder().encodeToString(file.getBytes()));
		
		forumModel.setContent(contentModel);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@PutMapping("/modifyforumbyid")
	public ResponseEntity<ForumModel> modifyforum(@RequestPart("contentmodel") ContentModel contentModel,
			                                      @RequestPart String id){

		if(contentModel.getContent()==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		ForumModel forumModel = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		forumModel.setContent(contentModel);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping("/addcommenttoforumbyid")
	public ResponseEntity<ForumModel> addcommenttoforum(@RequestPart("comment") CommentModel comment,
			                                      @RequestPart("id") String id){

		if(comment==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		ForumModel forumModel = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		Date date = new Date();
	    SimpleDateFormat ft = 
	    	      new SimpleDateFormat ("dd.MM.yyyy 'at' hh:mm:ss a zzz");
	  
	    String datetime = ft.format(date);
	    String _date = datetime.substring(0,10);
	    String _time = datetime.substring(15,29);
	    comment.setDate(_date);
	    comment.setTime(_time);
		
		List<CommentModel> commentsList = forumModel.getCommentsList();
		if(commentsList==null)
			commentsList = new ArrayList<>();
		
		comment.setId(commentsList.size()+1);
		commentsList.add(comment);
		
		forumModel.setCommentsList(commentsList);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping("/modifycommentinforumbyid")
	public ResponseEntity<ForumModel> modifycommentinforum(@RequestPart("comment") CommentModel comment,
			                                      @RequestPart("id") String id){

		if(comment==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		ForumModel forumModel = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		Date date = new Date();
	    SimpleDateFormat ft = 
	    	      new SimpleDateFormat ("dd.MM.yyyy 'at' hh:mm:ss a zzz");
	  
	    String datetime = ft.format(date);
	    String _date = datetime.substring(0,10);
	    String _time = datetime.substring(15,29);
	    CommentModel newcomment = new CommentModel();
	    newcomment.setUsername(comment.getUsername());
	    newcomment.setComment(comment.getComment());
	    newcomment.setId(comment.getId());
	    newcomment.setDate(_date);
	    newcomment.setTime(_time);
		
		List<CommentModel> commentsList = forumModel.getCommentsList();
		int flag=0;
		for(CommentModel cm: commentsList) {
			if(cm.getId() == comment.getId() &&
					cm.getUsername().equals(comment.getUsername())) {
				commentsList.remove(commentsList.indexOf(cm));
				flag=1;
				break;
			}
		}
		if(flag==0) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		commentsList.add(newcomment);
		
		forumModel.setCommentsList(commentsList);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteforumbyid")
	public ResponseEntity<ForumModel> deleteallforums(@RequestBody String id){
		ForumModel forumDeleted = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		forumRepository.delete(forumDeleted);
		
	    return new ResponseEntity<>(forumDeleted, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deleteallforums")
	public ResponseEntity<ForumModel> deleteallforums(){
		forumRepository.deleteAll();
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
