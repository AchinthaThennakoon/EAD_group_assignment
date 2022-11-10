package com.ead.main.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Content {

    // add sequence genarators
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer contentId;

    private String contentTitle;
    private String content;

   @ManyToOne
   @JoinColumn(
            name = "main_title_id",
            nullable = false
   )

    private Title title;


}
