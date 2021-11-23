package com.architecture.wigame.utilisateur;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UtilisateurMapper {

        Utilisateur toEntity(UtilisateurDTO utilisateurDTO);

        UtilisateurDTO toDTO(Utilisateur utilisateur);

}
