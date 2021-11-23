package com.architecture.wigame.example;

//import com.cronos.trainingatcronos.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrganizationService {

    /*private final OrganizationRepository repository;
    private final OrganizationMapper mapper;

    public List<OrganizationDTO> findAll() {
        return repository.findAll().stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    public OrganizationDTO getOrganizationById(Long id) {
        Optional<Organization> organization = repository.findById(id);
        if (organization.isPresent()) {
            return mapper.toDTO(organization.get());
        } else {
            throw new ResourceNotFoundException("Organization with id " + id + " not found");
        }
    }

    public OrganizationDTO createOrganization(OrganizationDTO organizationDTO){
        Organization organization = mapper.toEntity(organizationDTO);
        Organization savedOrganization = repository.save(organization);
        return mapper.toDTO(savedOrganization);
    }

    @Transactional
    public OrganizationDTO updateOrganization(OrganizationDTO organizationDTO){
        Optional<Organization> organizationOpt = repository.findById(organizationDTO.getId());
        if(organizationOpt.isPresent()){
            Organization organization = mapper.toEntity(organizationDTO);
            return mapper.toDTO(repository.save(organization));
        } else {
            throw new ResourceNotFoundException("organization " + organizationDTO.getName() + " does not exist when trying to update");
        }
    }*/
}
