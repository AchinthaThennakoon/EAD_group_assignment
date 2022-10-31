package com.ead.main.controller;

import com.ead.main.dto.TitleDTO;
import com.ead.main.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/Title")
@CrossOrigin
public class TitleController {
    @Autowired
    private TitleService titleService;

    @PutMapping("updateTitle")
    public TitleDTO updateTitle(@RequestBody TitleDTO titleDTO){
        return titleService.updateTitle(titleDTO);
    }

}
