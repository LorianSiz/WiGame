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
        return favorisService.getFavorisById(id);
    }

    @PostMapping
    public FavorisDTO createFavoris(@RequestBody FavorisDTO favorisDTO){
        return favorisService.createFavoris(favorisDTO);
    }

    @PutMapping
    public FavorisDTO updateFavoris(@RequestBody FavorisDTO favorisDTO) { return favorisService.updateFavoris(favorisDTO); }

    @DeleteMapping("{id}")
    public void deleteFavoris(@PathVariable Long id) {
        favorisService.deleteFavoris(id);
    }

    @GetMapping("trouveruser/{id}")
    public List<FavorisDTO> findByUserId(@PathVariable("id") Long id) {
        return favorisService.findByUserId(id);
    }

    @GetMapping("trouveruserfiche/{id_fich}/{id_util}")
    public List<FavorisDTO> findByFichAndUtil(@PathVariable("id_fich") Long id_fiche, @PathVariable("id_util") Long id_util) {
        return favorisService.findByFichAndUtil(id_fiche, id_util);
    }


    @GetMapping("existe/{id_fich}/{id_util}")
    public boolean existsFavorisByFichAndUtil(@PathVariable("id_fich") Long id_fiche, @PathVariable("id_util") Long id_util) {
        return favorisService.existsFavorisByFichAndUtil(id_fiche, id_util);
    }
}
