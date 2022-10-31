package com.ead.main.service.impl;

import com.ead.main.model.Title;
import com.ead.main.repository.TitleRepository;
import com.ead.main.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TitleServiceImpl implements TitleService {
    @Autowired
    private TitleRepository titleRepository;

    @Override
    public List<Title> getTitles(){
        System.out.println(titleRepository.findAll());
        return titleRepository.findAll();
    }
}
