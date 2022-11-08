package com.ead.main.service;

import com.ead.main.model.Content;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface ContentService {
    public List<Content> getContents();
    String saveContent(Content content);
    String updateContent(Content content);
    String deleteContent(Integer id);
    public Content getContentById(int contentId);

    List<Content> getContentByTitleId(int id);
}
