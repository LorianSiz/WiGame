package com.architecture.wigame.utilisateur;

import com.architecture.wigame.utilisateur.Utilisateur;
import com.architecture.wigame.utilisateur.UtilisateurDTO;
import com.architecture.wigame.utilisateur.UtilisateurDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Optional;

@RestController
@RequestMapping("utilisateurs")
@RequiredArgsConstructor
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    @GetMapping("{id}")
    //@Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public UtilisateurDTO getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id);
    }

    @PostMapping
    //@Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public UtilisateurDTO createUtilisateur(@RequestBody UtilisateurDTO orga) {
        return this.utilisateurService.createUtilisateur(orga);
    }

    @PutMapping
    //@Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public UtilisateurDTO updateUtilisateur(@RequestBody UtilisateurDTO orga) {
        return this.utilisateurService.updateUtilisateur(orga);
    }
    
}
