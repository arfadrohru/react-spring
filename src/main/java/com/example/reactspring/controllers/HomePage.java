package com.example.reactspring.controllers;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomePage {
	 @GetMapping("/hello")
	    public String hello() {
	        return "Hello, the time at the server is now " + new Date() + "\n";
	    }
	 
	 @GetMapping("/hai")
	    public String hai() {
	        return "Hai";
	    }
}
