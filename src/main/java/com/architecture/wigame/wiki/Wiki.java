package com.architecture.wigame.wiki;

import com.architecture.wigame.fiche.Fiche;
import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;
import java.util.List;

//import javax.persistence.*;

//@Entity
//@Table(name = "wiki")
@Setter
@Getter
public class Wiki {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "wiki_id")
    private Long id;

    //@Column(name = "name")
    private String name;
    //@Column(name = "categorie")
    private String categorie; //WIP
    //@Column(name = "createur")
    private Utilisateur createur;
    //@OneToMany(cascade = {CascadeType.ALL}, orphanRemoval = true)
    //@JoinColumn(name = "wiki_id")
    private List<Fiche> listeFiche;

    public Wiki() {
        super();
    }
}
