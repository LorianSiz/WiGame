package com.architecture.wigame.fiche;
import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Data;

@Data
public class FicheDTO {

    private Long id;

    private String titre;
    private String categorie;
    private String contenu;
    private double note;
    private int fiabilite;
    private Utilisateur redacteur;
}
