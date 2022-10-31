package com.ead.main.service;

import com.ead.main.model.Course;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public interface CourseService {

    public void saveOrUpdate(Course course);

}
