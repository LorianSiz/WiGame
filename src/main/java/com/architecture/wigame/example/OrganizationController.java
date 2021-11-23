package com.architecture.wigame.example;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("organizations")
@RequiredArgsConstructor
public class OrganizationController {

    private final OrganizationService organizationService;

    /*@GetMapping
    public List<OrganizationDTO> getAllOrganization() {
        return this.organizationService.findAll();
    }

    @GetMapping("{id}")
    @Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public OrganizationDTO getOrganizationById(@PathVariable Long id) {
        return organizationService.getOrganizationById(id);
    }

    @PostMapping
    @Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public OrganizationDTO createOrganization(@RequestBody OrganizationDTO orga) {
        return this.organizationService.createOrganization(orga);
    }

    @PutMapping
    @Secured({"ROLE_TOP_MANAGER", "ROLE_HUMAN_RESOURCE"})
    public OrganizationDTO updateOrganization(@RequestBody OrganizationDTO orga) {
        return this.organizationService.updateOrganization(orga);
    }*/
}
