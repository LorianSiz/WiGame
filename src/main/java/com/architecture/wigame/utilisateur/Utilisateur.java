package com.architecture.wigame.utilisateur;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "utilisateur")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "utilisateur_id")
    private Long id;

    @NotBlank(message = "Pseudo requis")
    @Column(name = "pseudo", unique = true)
    private String pseudo;
    @NotBlank(message = "Mot de passe requis")
    @Column(name = "mdp")
    private String mdp;
    @NotBlank(message = "Mail requis")
    @Column(name = "mail")
    private String mail;

    public Utilisateur()  {
        super();
    }

    public String getRole() {
        return "RoleBase"; //WIP
    }
}
