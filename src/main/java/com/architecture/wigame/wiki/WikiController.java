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
    //@Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public WikiDTO getWikiById(@PathVariable Long id) {
        return wikiService.getWikiById(id);
    }

    @PostMapping
    //@Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public WikiDTO createWiki(@RequestBody WikiDTO orga) {
        return this.wikiService.createWiki(orga);
    }

    @PutMapping
    //@Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public WikiDTO updateWiki(@RequestBody WikiDTO orga) {
        return this.wikiService.updateWiki(orga);
    }
}
