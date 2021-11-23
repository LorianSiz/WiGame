package com.architecture.wigame.fiche;

import lombok.Getter;
import lombok.Setter;

//import javax.persistence.*;

//@Entity
//@Table(name = "organization")
@Setter
@Getter
public class Fiche {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "fiche_id")
    private Long id;

    //@Column(name = "titre")
    private String titre;
    //@Column(name = "categorie")
    private String categorie; // WORK IN PROGRESS
    //@Column(name = "contenu")
    private String contenu; // WORK IN PROGRESS
    //@Column(name = "note")
    private double note;
    //@Column(name = "fiabilite")
    private int fiabilite;
    //@Column(name = "redacteur")
    private Utilisateur redacteur;


    public Fiche() {
        super();
    }
}
