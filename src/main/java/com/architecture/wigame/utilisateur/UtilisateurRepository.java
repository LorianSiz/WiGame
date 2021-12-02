package com.architecture.wigame.utilisateur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
    Utilisateur getByPseudo(String pseudo);
    Optional<Utilisateur> findByPseudo(String pseudo);
}
