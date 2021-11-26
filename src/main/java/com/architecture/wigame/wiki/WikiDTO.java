package com.architecture.wigame.wiki;
import com.architecture.wigame.fiche.Fiche;
import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
public class WikiDTO {

    private Long id;
    private String titre;
    private String categorie; //WIP
    private Utilisateur createur;
    private List<Fiche> listFiche = new ArrayList<>();
}
