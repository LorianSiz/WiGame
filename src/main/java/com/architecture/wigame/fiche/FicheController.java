package com.architecture.wigame.fiche;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Fiche")
@RequiredArgsConstructor
public class FicheController {

    private final FicheService ficheService;
}
