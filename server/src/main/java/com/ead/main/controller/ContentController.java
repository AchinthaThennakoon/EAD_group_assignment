package com.ead.main.controller;

import com.ead.main.model.Title;
import com.ead.main.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/content")
@CrossOrigin
public class ContentController {
    @Autowired
    ContentService contentService;

    @GetMapping("/")
    public List<Title> getTitles(){
        return contentService.getContent();
    }

    @PostMapping("/addTitle")
    public String addTitle(@RequestBody Title title){
        return contentService.saveContent(content);
    }

    @PutMapping("/editContent")
    public String editTitle(@RequestBody Title title){
        return contentService.updateContent(content);
    }

    @DeleteMapping("/deleteContent/{id}")
    public String deleteTitle(@PathVariable Integer id){
        return contentService.deleteContent(id);
    }
}
