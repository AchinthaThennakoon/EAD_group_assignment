package com.ead.main.controller;

import com.ead.main.dto.CourseDTO;
import com.ead.main.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/course")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PutMapping("/updateCourse")
    public CourseDTO updateCourse(@RequestBody CourseDTO courseDTO){
        return courseService.updateCourse(courseDTO);
    }

}
