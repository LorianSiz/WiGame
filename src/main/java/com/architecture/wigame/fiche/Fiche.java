package com.architecture.wigame.fiche;

import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "fiche")
public class Fiche {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fiche_id")
    private Long id;

    @Column(name = "titre")
    private String titre;
    @Column(name = "categorie")
    private String categorie; // WORK IN PROGRESS
    @Column(name = "contenu")
    private String contenu; // WORK IN PROGRESS
    @Column(name = "note")
    private double note;
    @Column(name = "fiabilite")
    private int fiabilite;
    @OneToOne
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur redacteur;
    @Column(name = "url")
    private String url;


    public Fiche() {
        super();
    }
}
