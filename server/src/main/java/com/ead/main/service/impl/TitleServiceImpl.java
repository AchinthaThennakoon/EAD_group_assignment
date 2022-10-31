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

    @Override
    public String saveTitle(Title title) {
        titleRepository.save(title);
        return "successful";
    }

    @Override
    public String updateTitle(Title title) {
        titleRepository.updateTitle(title.getId(),title.getTitleName());
        return "successfully updated";
    }

    @Override
    public String deleteTitle(Integer id) {
        titleRepository.deleteById(id);
        return "successful";
    }
}
