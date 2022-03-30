package com.clubzen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import com.clubzen.controllers.clubzenController;

@SpringBootApplication
//@ComponentScan(basePackageClasses = clubzenController.class)
public class ClubzenApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubzenApplication.class, args);
	}

}
