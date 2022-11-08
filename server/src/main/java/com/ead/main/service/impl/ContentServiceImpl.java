package com.ead.main.service.impl;

import com.ead.main.model.Content;
import com.ead.main.model.Course;
import com.ead.main.repository.ContentRepository;
import com.ead.main.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ContentServiceImpl implements ContentService {

    @Autowired
    private ContentRepository contentRepository;

    @Override
    public List<Content> getContents(){
        System.out.println(contentRepository.findAll());
        return contentRepository.findAll();
    }

    @Override
    public Content getContentById(int contentId)
    {
        return contentRepository.findById(contentId).get();
    }

    @Override
    public List<Content> getContentByTitleId(int id) {
        return contentRepository.getContentByTitleId(id);
    }

    @Override
    public String saveContent(Content content) {
        contentRepository.save(content);
        return "successful";
    }

    @Override
    public String updateContent(Content content) {
        contentRepository.updateContent(content.getContentId(),content.getContentTitle(),content.getContent());
        return "successfully updated";
    }

    @Override
    public String deleteContent(Integer id) {
        contentRepository.deleteById(id);
        return "successful";
    }
}

