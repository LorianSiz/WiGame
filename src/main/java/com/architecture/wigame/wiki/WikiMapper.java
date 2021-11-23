package com.architecture.wigame.wiki;

//import org.mapstruct.Mapper;

//@Mapper(componentModel = "spring")
public interface WikiMapper {

    Wiki toEntity(WikiDTO wikiDTO);

    WikiDTO toDTO(Wiki wiki);
}
