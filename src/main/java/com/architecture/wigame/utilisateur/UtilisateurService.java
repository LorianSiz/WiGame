package com.architecture.wigame.utilisateur;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UtilisateurDTO getUtilisateurById(Long id) {
        Optional<Utilisateur> utilisateur = repository.findById(id);
        if (utilisateur.isPresent()) {
            return mapper.toDTO(utilisateur.get());
        } else {
            //throw new Exception("Utilisateur with id " + id + " not found");
            return new UtilisateurDTO();
        }
    }

    public UtilisateurDTO connexion(UtilisateurDTO utilisateurDto) {
        Optional<Utilisateur> utilisateurOpt = repository.findByPseudo(utilisateurDto.getPseudo());
        if (utilisateurOpt.isPresent()) {
            Utilisateur utilisateur = utilisateurOpt.get();
            if (!passwordEncoder.matches(utilisateurDto.getMdp(), utilisateur.getMdp())) {
                return null;
            }
            return mapper.toDTO(utilisateur);
        } else {
            return null;
        }
    }

    /*public UtilisateurDTO createUtilisateur(UtilisateurDTO UtilisateurDTO){
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
