package com.architecture.wigame.wiki;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("wiki")
@RequiredArgsConstructor
public class WikiController {

    private final WikiService wikiService;

    @GetMapping("recuperer/{id}")
    public WikiDTO getWikiById(@PathVariable Long id) {
        return wikiService.getWikiById(id);
    }

    @PostMapping
    public WikiDTO createWiki(@RequestBody WikiDTO orga) {
        return this.wikiService.createWiki(orga);
    }

    @PutMapping
    public WikiDTO updateWiki(@RequestBody WikiDTO orga) {
        return this.wikiService.updateWiki(orga);
    }

    @GetMapping("recuperer/tout")
    public List<WikiDTO> findAllWiki() {
        return wikiService.findAllWiki();
    }
}
