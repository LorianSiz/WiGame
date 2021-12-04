package com.architecture.wigame.utilisateur;

import com.architecture.wigame.wiki.WikiDTO;
import com.architecture.wigame.utilisateur.Utilisateur;
import com.architecture.wigame.utilisateur.UtilisateurDTO;
import com.architecture.wigame.utilisateur.UtilisateurDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Optional;

@RestController
@RequestMapping("utilisateur")
@RequiredArgsConstructor
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("{id}")
    public UtilisateurDTO getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id);
    }

    @PostMapping("connexion")
    public UtilisateurDTO connexion(@RequestBody UtilisateurDTO userDto) {
        System.out.println(
                passwordEncoder.encode("123")// ENLEVER SVP
        );
        return this.utilisateurService.connexion(userDto);
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
