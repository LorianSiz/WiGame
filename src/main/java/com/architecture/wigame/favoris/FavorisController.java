package com.architecture.wigame.favoris;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("favoris")
@RequiredArgsConstructor
public class FavorisController {

    private final FavorisService favorisService;

    @GetMapping("recuperer/{id}")
    public FavorisDTO getFavorisById(@PathVariable("id") Long id) {
        return favorisService.getFavorisById(id); }

    @PostMapping
    public FavorisDTO createFavoris(@RequestBody FavorisDTO favorisDTO){
        return favorisService.createFavoris(favorisDTO);
    }

    @PutMapping
    public FavorisDTO updateFavoris(@RequestBody FavorisDTO favorisDTO) { return favorisService.updateFavoris(favorisDTO); }
}
