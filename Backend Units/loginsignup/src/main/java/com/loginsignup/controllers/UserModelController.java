package com.loginsignup.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.loginsignup.models.*;
import com.loginsignup.repository.UserRepository;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class UserModelController {

	@Autowired
	UserRepository userRepository;

	@GetMapping("/getallusers")
	public List<UserModel> getallusers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody UserModel userModel) {
            List<UserModel> userList = userRepository.findAll();
		
                for(UserModel u: userList){
                    if(u.getUsername().equals(userModel.getUsername()) &&
                            u.getPassword().equals(userModel.getPassword())){
                        return new ResponseEntity<>(u, HttpStatus.OK);
                    }
                }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody UserModel userModel) {
                List<UserModel> userList = userRepository.findAll();
		
                for(UserModel u: userList){
                    if(u.getUsername().equals(userModel.getUsername()) &&
                            u.getEmail().equals(userModel.getEmail()))
                        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
                }
		
		String domainName = "";
		String[] parts = userModel.getEmail().split("@");
		if(parts.length == 2) 
		    domainName = parts[1];
		if (!domainName.equals("iitk.ac.in")) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
                }

		UserModel user = userRepository.save(userModel);

		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
        
        @DeleteMapping("/deleteallusers")
	public ResponseEntity<?> deleteallUsers() {
            userRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.CREATED);
	}
}