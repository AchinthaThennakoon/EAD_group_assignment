package com.ead.main.controller;

import com.ead.main.model.Course;
import com.ead.main.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/course")
@CrossOrigin
public class CourseController {
    @Autowired
     CourseService courseService;

@PutMapping("/updateCourse")
    private Course update(@RequestBody Course course)
{
    courseService.saveOrUpdate(course);
    return course;
}

@DeleteMapping("/course/{id}")
    private void deleteCourse(@PathVariable("id") int id)
{
    courseService.delete(id);
}

}
