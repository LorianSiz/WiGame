package com.architecture.wigame.wiki;

import com.architecture.wigame.fiche.Fiche;
import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "wiki")
public class Wiki {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wiki_id")
    private Long id;

    @Column(name = "titre")
    private String titre;
    @Column(name = "categorie")
    private String categorie; //WIP
    @OneToOne
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur createur;
    @OneToMany(cascade = {CascadeType.ALL}, orphanRemoval = true)
    @JoinColumn(name = "wiki_id")
    private List<Fiche> listeFiche;

    public Wiki() {
        super();
    }
}
