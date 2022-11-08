package com.ead.main.controller;

import com.ead.main.model.Content;
import com.ead.main.model.Course;
import com.ead.main.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/content")
@CrossOrigin
public class ContentController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/getAll")
    public List<Content> getContent(){
        return contentService.getContents();
    }

    @GetMapping("/content/{contentId}")
    public Content getContent(@PathVariable("contentId") int contentId)
    {
        return contentService.getContentById(contentId);
    }

    @PostMapping("/addContent")
    public String addContent(@RequestBody Content content){
        return contentService.saveContent(content);
    }

    @PutMapping("/editContent")
    public String editContent(@RequestBody Content content){
        return contentService.updateContent(content);
    }

    @DeleteMapping("/deleteContent/{id}")
    public String deleteContent(@PathVariable Integer id){
        return contentService.deleteContent(id);
    }

    @GetMapping("/getContentByTitleId/{id}")
    public List<Content> getContentByTitleId(@PathVariable int id){
        return contentService.getContentByTitleId(id);
    }
}
