package com.ead.main.service;

import com.ead.main.model.Course;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface CourseService {

    public void saveOrUpdate(Course course);
    public void delete(int id);
    public void add(Course course);
    public List<Course> getAllCourse();
    public Course getCourseById(int id);
}
