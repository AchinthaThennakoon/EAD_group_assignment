package com.ead.main.controller;

import com.ead.main.model.Course;
import com.ead.main.model.Title;
import com.ead.main.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/course")
@CrossOrigin
public class CourseController {
    @Autowired
     CourseService courseService;

    @PostMapping("/addCourse")
    public Course add(@RequestBody Course course)
    {
        courseService.add(course);
        return course;
    }
    @GetMapping("/viewCourse")
    public List<Course> getAllCourse()
    {
        return courseService.getAllCourse();
    }

    @GetMapping("/course/{id}")
    public Course getCourse(@PathVariable("id") int id)
    {
        return courseService.getCourseById(id);
    }

    @PutMapping("/updateCourse")
    public Course update(@RequestBody Course course)
    {
    courseService.saveOrUpdate(course);
    return course;
    }

    @DeleteMapping("/course/{id}")
    public void deleteCourse(@PathVariable("id") int id)
    {
    courseService.delete(id);
    }

    }
