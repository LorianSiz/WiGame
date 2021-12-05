package com.architecture.wigame.fiche;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("fiche")
@RequiredArgsConstructor
public class FicheController {

    private final FicheService ficheService;

    @GetMapping("recuperer/{id}")
    public FicheDTO getFicheById(@PathVariable("id") Long id) {
        return ficheService.getFicheById(id); }

    @PostMapping
    public FicheDTO createFiche(@RequestBody FicheDTO ficheDTO){
        return ficheService.createFiche(ficheDTO);
    }

    @PutMapping
    public FicheDTO updateFiche(@RequestBody FicheDTO ficheDTO) { return ficheService.updateFiche(ficheDTO); }
}
