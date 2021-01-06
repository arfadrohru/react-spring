package com.example.reactspring.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	 
	 @GetMapping("/user")
	    public Map<String, Object> user() {
		 Map<String, Object> result = new HashMap<>();
		 List<String> listUser = new ArrayList<>();
		 listUser.add("Eizan");
		 listUser.add("Imm");
		 listUser.add("Reighn");
		 listUser.add("Malkist");
		 result.put("user", listUser);
	        return result;
	    }
}
