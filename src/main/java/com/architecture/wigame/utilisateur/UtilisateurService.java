package com.architecture.wigame.utilisateur;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository repository;
    private final UtilisateurMapper mapper;

    /*
    public UtilisateurDTO getUtilisateurById(Long id) {
        Optional<Utilisateur> utilisateur = repository.findById(id);
        if (utilisateur.isPresent()) {
            return mapper.toDTO(utilisateur.get());
        } else {
            //throw new Exception("Utilisateur with id " + id + " not found");
        }
    }

    public UtilisateurDTO createUtilisateur(UtilisateurDTO UtilisateurDTO){
        Utilisateur utilisateur = mapper.toEntity(UtilisateurDTO);
        Utilisateur savedUtilisateur = repository.save(utilisateur);
        return mapper.toDTO(savedUtilisateur);
    }

    //@Transactional
    public UtilisateurDTO updateUtilisateur(UtilisateurDTO UtilisateurDTO){
        Optional<Utilisateur> utilisateurOpt = repository.findById(UtilisateurDTO.getId());
        if(UtilisateurOpt.isPresent()){
            Utilisateur utilisateur = mapper.toEntity(UtilisateurDTO);
            return mapper.toDTO(repository.save(utilisateur));
        } else {
            //throw new ResourceNotFoundException("utilisateur " + UtilisateurDTO.getName() + " does not exist when trying to update");
        }
    }*/

}
