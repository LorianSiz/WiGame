package com.architecture.wigame.fiche;

//import org.mapstruct.Mapper;

//@Mapper(componentModel = "spring")
public interface FicheMapper {

    Fiche toEntity(FicheDTO organizationDTO);

    FicheDTO toDTO(Fiche organization);

}
