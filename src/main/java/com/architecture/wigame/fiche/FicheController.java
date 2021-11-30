package com.architecture.wigame.fiche;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("fiche")
@RequiredArgsConstructor
public class FicheController {

    private final FicheService ficheService;

    @GetMapping("{id}")
    public FicheDTO getFicheById(Long id) throws Exception {
        return ficheService.getFicheById(id);
    }

    @PostMapping
    public FicheDTO createFiche(FicheDTO ficheDTO){
        return ficheService.createFiche(ficheDTO);
    }
}
