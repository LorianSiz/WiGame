package com.architecture.wigame.favoris;


import com.architecture.wigame.fiche.Fiche;
import com.architecture.wigame.utilisateur.Utilisateur;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "favoris")
public class Favoris {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favoris_id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "fiche_id", nullable = false)
    private Fiche fich_conserne;
    @OneToOne
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur util_conserne;
}
