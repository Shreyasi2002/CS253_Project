package com.clubzen.controllers;

import org.springframework.http.MediaType;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import com.clubzen.exceptions.ResourceNotFoundException;
import com.clubzen.models.NewsandeventsModel;
import com.clubzen.repositories.NewsandeventsRepository;

@RestController
@CrossOrigin(origins = "*")
public class NewsandeventsController {

	@Autowired
	private NewsandeventsRepository newsandeventsrepository;
	
	@GetMapping("/allnewsevents")
	public List<NewsandeventsModel> getallnewsandevents(){
		List<NewsandeventsModel> list = newsandeventsrepository.findAll();
		
		return list;
	}
	
	@GetMapping("/newseventsbyid")
	public NewsandeventsModel getallnewsandevents(@RequestBody String id){
		NewsandeventsModel list = newsandeventsrepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
		return list;
	}
	
	@PostMapping(path = "/addnewsevent", consumes = {MediaType.APPLICATION_JSON_VALUE,
												 MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<NewsandeventsModel> createnewsandevent(@RequestPart("newsandevents") NewsandeventsModel newsandevents, @RequestParam("file") MultipartFile file) throws IOException{
		newsandevents.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
		newsandeventsrepository.save(newsandevents);
		
		return new ResponseEntity<>(newsandevents, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deletenewsevent")
	public ResponseEntity<NewsandeventsModel> deletenewsandevents(@RequestBody String id){
		NewsandeventsModel newsandeventsDeleted = newsandeventsrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No News or Event id :" + id));
		
		newsandeventsrepository.delete(newsandeventsDeleted);
		
	    return new ResponseEntity<>(newsandeventsDeleted, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deleteallnewsevents")
	public ResponseEntity<NewsandeventsModel> deletenewsandevents(){
		newsandeventsrepository.deleteAll();
		
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
