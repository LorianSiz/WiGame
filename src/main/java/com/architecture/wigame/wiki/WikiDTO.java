package com.architecture.wigame.wiki;
import com.architecture.wigame.fiche.Fiche;
import lombok.Data;

import java.util.Collection;

@Data
public class WikiDTO {

    private Long id;

    private String name;
    private String categorie; // TODO: WIP catwiki
    private Utilisateur createur; // TODO: verif lien Utilisateur
    private Collection<Fiche> listFiche;
}
