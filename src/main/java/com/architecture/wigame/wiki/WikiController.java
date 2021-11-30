package com.architecture.wigame.wiki;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("wiki")
@RequiredArgsConstructor
public class WikiController {

    private final WikiService wikiService;

    @GetMapping("{id}")
    public WikiDTO getWikiById(@PathVariable Long id) {
        return wikiService.getWikiById(id);
    }
}
