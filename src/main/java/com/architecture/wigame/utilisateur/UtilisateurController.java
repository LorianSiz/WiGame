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

    @GetMapping("{id}")
    public UtilisateurDTO getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id);
    }

    @PostMapping("connexion")
    public UtilisateurDTO connexion(@RequestBody UtilisateurDTO utilisateurDTO) {
        return this.utilisateurService.connexion(utilisateurDTO);
    }

    @PostMapping("creer")
    public UtilisateurDTO createUtilisateur(@RequestBody UtilisateurDTO utilisateurDTO) {
        return this.utilisateurService.createUtilisateur(utilisateurDTO);
    }

    @PutMapping("modifier")
    public UtilisateurDTO updateUtilisateur(@RequestBody UtilisateurDTO utilisateurDTO) {
        return this.utilisateurService.updateUtilisateur(utilisateurDTO);
    }

    @GetMapping("verifier/{pseudo}")
    public boolean isExistsByPseudo(@PathVariable String pseudo) {
        return utilisateurService.isExistsByPseudo(pseudo);
    }

    @GetMapping("recuperer/{pseudo}")
    public UtilisateurDTO findByPseudo(@PathVariable String pseudo) {
        return utilisateurService.findByPseudo(pseudo);
    }

}
