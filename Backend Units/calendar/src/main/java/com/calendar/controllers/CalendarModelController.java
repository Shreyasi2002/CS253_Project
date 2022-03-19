package com.calendar.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.calendar.models.CalendarModel;
import com.calendar.repositories.CalendarModelRepository;
import com.calendar.exceptions.ResourceNotFoundException;

@RestController
public class CalendarModelController {

	@Autowired
	private CalendarModelRepository calendarrepository;
	
	@GetMapping("/allcalendarevents")
	public List<CalendarModel> getallcalendarevents(){
		List<CalendarModel> list = calendarrepository.findAll();
		
		return list;
	}
	
	@GetMapping("/calendareventbyid")
	public CalendarModel getallcalendarevents(@RequestBody String id){
		CalendarModel ans = calendarrepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
		return ans;
	}
	
	@PostMapping("/addcalendarevent")
	public ResponseEntity<CalendarModel> createcalendarevent(@RequestBody CalendarModel calendarmodel){
		CalendarModel calendarModel = calendarrepository.save(calendarmodel);
		
		return new ResponseEntity<>(calendarModel, HttpStatus.CREATED);
	}
	
	@PostMapping("/addallcalendarevents")
	public ResponseEntity<List<CalendarModel>> createallcalendarevents(@RequestBody List<CalendarModel> calendarmodel){
		for(CalendarModel c: calendarmodel) {
			calendarrepository.save(c);
		}
		
		return new ResponseEntity<>(calendarmodel, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deletecalendarevent")
	public ResponseEntity<CalendarModel> deletecalendareventsbyid(@RequestBody String id){
		CalendarModel calendareventdeleted = calendarrepository.findById(id)
		.orElseThrow(() -> new ResourceNotFoundException("No Calendar Event with id :" + id));
		calendarrepository.delete(calendareventdeleted);
		
		return new ResponseEntity<>(calendareventdeleted, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deleteallcalendarevents")
	public ResponseEntity<CalendarModel> deleteallcalendarevents(){
		calendarrepository.deleteAll();
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

}
