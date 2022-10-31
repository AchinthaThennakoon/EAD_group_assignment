package com.ead.main.service.impl;

import com.ead.main.dto.CourseDTO;
import com.ead.main.model.Course;
import com.ead.main.repository.CourseRepository;
import com.ead.main.service.CourseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ModelMapper modelMapper;

    public CourseDTO updateCourse(CourseDTO courseDTO){
    courseRepository.save(modelMapper.map(courseDTO, Course.class));
    return courseDTO;
    }
}
