package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.entities.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.dto.ScoreDTO;
import com.devsuperior.dsmovie.service.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public MovieDTO findById(@RequestBody ScoreDTO dto){
		MovieDTO moviedto = service.saveScore(dto); 
		return moviedto;
	}
}
