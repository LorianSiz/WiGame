package com.architecture.wigame.fiche;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FicheService {

    private final FicheRepository repository;
    private final FicheMapper mapper;

    /*
    public FicheDTO getFicheById(Long id) {
        Optional<Fiche> fiche = repository.findById(id);
        if (fiche.isPresent()) {
            return mapper.toDTO(fiche.get());
        } else {
            //throw new Exception("Fiche with id " + id + " not found");
        }
    }

    public FicheDTO createFiche(FicheDTO FicheDTO){
        Fiche fiche = mapper.toEntity(FicheDTO);
        Fiche savedFiche = repository.save(fiche);
        return mapper.toDTO(savedFiche);
    }

    //@Transactional
    public FicheDTO updateFiche(FicheDTO FicheDTO){
        Optional<Fiche> ficheOpt = repository.findById(FicheDTO.getId());
        if(ficheOpt.isPresent()){
            Fiche fiche = mapper.toEntity(FicheDTO);
            return mapper.toDTO(repository.save(fiche));
        } else {
            //throw new ResourceNotFoundException("fiche " + FicheDTO.getName() + " does not exist when trying to update");
        }
    }*/

}
