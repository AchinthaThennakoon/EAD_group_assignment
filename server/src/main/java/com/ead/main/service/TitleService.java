package com.ead.main.service;

import com.ead.main.controller.TitleController;
import com.ead.main.model.Title;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TitleService {
    List<Title> getTitles();
}
