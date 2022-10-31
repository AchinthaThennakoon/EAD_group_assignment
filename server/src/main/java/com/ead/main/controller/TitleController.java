package com.ead.main.controller;

import com.ead.main.model.Title;
import com.ead.main.repository.TitleRepository;
import com.ead.main.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/title")
@CrossOrigin
public class TitleController {
    @Autowired
    private TitleService titleService;

    @Autowired
    private TitleRepository titleRepository;

    @GetMapping("/")
    public List<Title> getTitles(){
        return  titleRepository.findAll();
    }
}
