package com.ead.main.service.impl;

import com.ead.main.model.Course;
import com.ead.main.repository.CourseRepository;
import com.ead.main.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    public CourseRepository courseRepository;

    public void saveOrUpdate(Course course){
        courseRepository.save(course);
    }

    public void delete(int id)
    {
        courseRepository.deleteById(id);
    }

    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public void add(Course course){
        courseRepository.save(course);
    }

    @Override
    public Course getCourseById(int id)
    {
        return courseRepository.findById(id).get();
    }

}
