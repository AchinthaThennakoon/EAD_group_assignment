package com.ead.main.controller;

import com.ead.main.model.Title;
import com.ead.main.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/title")
@CrossOrigin
public class TitleController {
    @Autowired
    private TitleService titleService;

    @GetMapping("/")
    public List<Title> getTitles(){
        return titleService.getTitles();
    }

    @PostMapping("/addTitle")
    public String addTitle(@RequestBody Title title){
        return titleService.saveTitle(title);
    }

    @PutMapping("/editTitle")
    public String editTitle(@RequestBody Title title){
        return titleService.updateTitle(title);
    }

    @DeleteMapping("/deleteTitle/{id}")
    public String deleteTitle(@PathVariable Integer id){
        return titleService.deleteTitle(id);
    }

}
