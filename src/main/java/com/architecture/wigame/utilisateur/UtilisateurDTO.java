package com.architecture.wigame.utilisateur;
import lombok.Data;

@Data
public class UtilisateurDTO {

    private Long id;
    private String pseudo;
    private String mdp;
    private String mail;
}
