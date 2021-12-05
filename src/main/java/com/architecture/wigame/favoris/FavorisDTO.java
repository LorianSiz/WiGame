package com.architecture.wigame.favoris;

import com.architecture.wigame.fiche.Fiche;
import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Data;


@Data
public class FavorisDTO {


    private Long id;
    private Fiche fich_conserne;
    private Utilisateur util_conserne;
}
