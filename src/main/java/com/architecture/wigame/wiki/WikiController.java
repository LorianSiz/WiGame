package com.architecture.wigame.wiki;

import com.architecture.wigame.example.OrganizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("wiki")
@RequiredArgsConstructor
public class WikiController {

    private final WikiService wikiService;
}
