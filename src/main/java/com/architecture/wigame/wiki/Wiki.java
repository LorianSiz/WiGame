package com.architecture.wigame.wiki;

import com.architecture.wigame.fiche.Fiche;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

//import javax.persistence.*;

//@Entity
//@Table(name = "organization")
@Setter
@Getter
public class Wiki {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "id")
    private Long id;

    //@Column(name = "name")
    private String name;
    //@Column(name = "categorie")
    private String categorie; // TODO: WIP catwiki
    //@Column(name = "createur")
    private Utilisateur createur; // TODO: verif lien Utilisateur
    //@Column(name = "listFiche")
    private Collection<Fiche> listFiche;

    public Wiki() {
        super();
    }
}
