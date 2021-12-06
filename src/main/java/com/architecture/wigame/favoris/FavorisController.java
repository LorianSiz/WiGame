package com.architecture.wigame.favoris;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @RequestMapping(value="{favoris}", method=RequestMethod.DELETE)
    public void deleteFavoris(@PathVariable("favoris") FavorisDTO favorisDTO) {
        favorisService.deleteFavoris(favorisDTO);
    }

    @GetMapping("trouver/{name}")
    public List<FavorisDTO> findByUserName(@PathVariable("name") String name) {
        return favorisService.findByUserName(name);
    }
}
