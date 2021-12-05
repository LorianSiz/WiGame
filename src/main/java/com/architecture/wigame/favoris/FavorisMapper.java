package com.architecture.wigame.favoris;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FavorisMapper {

    Favoris toEntity(FavorisDTO favorisDTO);

    FavorisDTO toDTO(Favoris favoris);

}
