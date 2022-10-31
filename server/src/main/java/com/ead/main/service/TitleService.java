package com.ead.main.service;

import com.ead.main.dto.TitleDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public interface TitleService {
    TitleDTO updateTitle(TitleDTO titleDTO);
}
