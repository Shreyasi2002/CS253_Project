package com.newsandevents.controllers;

import org.springframework.http.MediaType;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.newsandevents.exceptions.ResourceNotFoundException;
import com.newsandevents.models.Newsandevents;
import com.newsandevents.repositories.NewsandeventsRepository;

@RestController
public class NewsandeventsController {

	@Autowired
	private NewsandeventsRepository newsandeventsrepository;
	
	@GetMapping("/allnewsevents")
	public List<Newsandevents> getallnewsandevents(){
		List<Newsandevents> list = newsandeventsrepository.findAll();
		
		return list;
	}
	
	@GetMapping("/newseventsbyid")
	public Newsandevents getallnewsandevents(@RequestBody String id){
		Newsandevents list = newsandeventsrepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
		return list;
	}
	
	@PostMapping(path = "/addnewsevent", consumes = {MediaType.APPLICATION_JSON_VALUE,
												 MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<Newsandevents> createnewsandevent(@RequestPart("newsandevents") Newsandevents newsandevents, @RequestParam("file") MultipartFile file) throws IOException{
		newsandevents.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
		newsandeventsrepository.save(newsandevents);
		
		return new ResponseEntity<>(newsandevents, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deletenewsevent")
	public ResponseEntity<Newsandevents> deletenewsandevents(@RequestBody String id){
		Newsandevents newsandeventsDeleted = newsandeventsrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No News or Event id :" + id));
		
		newsandeventsrepository.delete(newsandeventsDeleted);
		
	    return new ResponseEntity<>(newsandeventsDeleted, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deleteallnewsevents")
	public ResponseEntity<Newsandevents> deletenewsandevents(){
		newsandeventsrepository.deleteAll();
		
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
