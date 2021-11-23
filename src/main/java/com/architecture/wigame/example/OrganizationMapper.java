package com.architecture.wigame.example;

//import org.mapstruct.Mapper;

//@Mapper(componentModel = "spring")
public interface OrganizationMapper {

        Organization toEntity(OrganizationDTO organizationDTO);

        OrganizationDTO toDTO(Organization organization);

}
