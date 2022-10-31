package com.ead.main.service.impl;

import com.ead.main.model.Course;
import com.ead.main.repository.CourseRepository;
import com.ead.main.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public void saveOrUpdate(Course course){
        courseRepository.save(course);
    }

    public void delete(int id)
    {
        courseRepository.deleteById(id);
    }
}
