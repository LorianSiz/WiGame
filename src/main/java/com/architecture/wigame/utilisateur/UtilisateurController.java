package com.architecture.wigame.utilisateur;

import com.architecture.wigame.wiki.WikiDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
                passwordEncoder.encode("123")
        );
        return this.utilisateurService.connexion(userDto);
    }

}
