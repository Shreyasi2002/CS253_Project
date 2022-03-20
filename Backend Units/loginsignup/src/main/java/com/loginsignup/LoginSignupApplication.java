package com.loginsignup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

@SpringBootApplication
public class LoginSignupApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginSignupApplication.class, args);
	}

}
