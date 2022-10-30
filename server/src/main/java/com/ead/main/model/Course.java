package com.ead.main.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

    @Id
    @Column(unique=true)
    @NotNull
    private int Id;

    @Column(unique=true)
    private String courseTitle;

}
