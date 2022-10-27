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
@Builder
public class Content {

    @Id
    private Integer contentId;

    private String contentTitle;
    private String content;

    @ManyToOne(
            fetch = FetchType.LAZY,
            optional = false
    )
    @JoinColumn(
            name = "main_title_id",
            referencedColumnName = "id"
    )
    private Title title;


}
