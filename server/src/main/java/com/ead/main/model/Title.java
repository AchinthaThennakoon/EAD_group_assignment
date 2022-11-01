package com.ead.main.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.IdentityHashMap;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Title {

    // add sequence genarator
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @ManyToOne
    @JoinColumn(
            name = "courseTitle",
           nullable=false
    )
    private Course course;
}
