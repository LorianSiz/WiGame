package com.architecture.wigame.fiche;

import com.architecture.wigame.decodex.DecodexService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FicheService {

    private final FicheRepository repository;
    private final FicheMapper mapper;
    private final DecodexService decodexService;

    public FicheDTO getFicheById(Long id) {
        Optional<Fiche> fiche = repository.findById(id);
        if (fiche.isPresent()) {
            return mapper.toDTO(fiche.get());
        } else {
            return new FicheDTO();
            // throw new Exception("Fiche with id " + id + " not found");
        }
    }

    public FicheDTO createFiche(FicheDTO FicheDTO) {
        Fiche fiche = mapper.toEntity(FicheDTO);
        fiche.setFiabilite(NoteDecodex(fiche.getUrl()));
        Fiche savedFiche = repository.save(fiche);
        return mapper.toDTO(savedFiche);
    }

    @Transactional
    public FicheDTO updateFiche(FicheDTO FicheDTO){
        Optional<Fiche> ficheOpt = repository.findById(FicheDTO.getId());
        if(ficheOpt.isPresent()){
            Fiche fiche = mapper.toEntity(FicheDTO);
            fiche.setFiabilite(NoteDecodex(fiche.getUrl())); //WIP
            return mapper.toDTO(repository.save(fiche));
        } else {
            return FicheDTO;
            // throw new ResourceNotFoundException("fiche " + FicheDTO.getTitre() + " does not exist when trying to update");
        }
    }

    public int NoteDecodex(String url) {
        return decodexService.DecodexServices(url);
    }
}