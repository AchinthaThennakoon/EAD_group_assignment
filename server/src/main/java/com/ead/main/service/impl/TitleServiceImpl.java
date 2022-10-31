package com.ead.main.service.impl;

import com.ead.main.dto.TitleDTO;
import com.ead.main.model.Title;
import com.ead.main.repository.TitleRepository;
import com.ead.main.service.TitleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class TitleServiceImpl implements TitleService {
    @Autowired
    private TitleRepository titleRepository;

    @Autowired
    private ModelMapper modelMapper;

    public TitleDTO updateTitle(TitleDTO titleDTO)
    {
        titleRepository.save(modelMapper.map(titleDTO, Title.class));
      return titleDTO;
    }



}
