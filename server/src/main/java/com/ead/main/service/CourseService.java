package com.ead.main.service;

import com.ead.main.dto.CourseDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public interface CourseService {
     CourseDTO updateCourse(CourseDTO courseDTO);
}
