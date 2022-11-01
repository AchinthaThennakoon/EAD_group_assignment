package com.ead.main.repository;

import com.ead.main.model.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ContentRepository extends JpaRepository<Content,Integer> {

    @Modifying
    @Transactional
    @Query(
        nativeQuery = true,
        value = "UPDATE Content  SET content_title =?2,content= ?3 WHERE id = ?1"
    )
    int updateContent(Integer id, String content_title , String content);
}
