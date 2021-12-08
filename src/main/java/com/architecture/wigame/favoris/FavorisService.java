package com.architecture.wigame.favoris;

import com.architecture.wigame.utilisateur.Utilisateur;
import com.architecture.wigame.utilisateur.UtilisateurRepository;
import com.architecture.wigame.utilisateur.UtilisateurService;
import com.architecture.wigame.wiki.Wiki;
import com.architecture.wigame.wiki.WikiDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavorisService {

    private final FavorisRepository repository;
    private final UtilisateurRepository userRepository;
    private final FavorisMapper mapper;


    public FavorisDTO getFavorisById(Long id) {
        Optional<Favoris> favoris = repository.findById(id);
        if (favoris.isPresent()) {
            return mapper.toDTO(favoris.get());
        } else {
            return new FavorisDTO();
            // throw new Exception("favoris with id " + id + " not found");
        }
    }

    public FavorisDTO createFavoris(FavorisDTO favorisDTO){
        Favoris favoris = mapper.toEntity(favorisDTO);
        if (!existsFavorisByFichAndUtil(favoris.getFich_conserne().getId(), favoris.getUtil_conserne().getId())){
            Favoris savedFavoris = repository.save(favoris);
            return mapper.toDTO(savedFavoris);
        } else return new FavorisDTO();
    }

    public void deleteFavoris(Long id) {
        Optional<Favoris> favorisOpt = repository.findById(id);
        if(favorisOpt.isPresent()) {
            Favoris favoris = repository.getById(id);
            repository.delete(favoris);
        } else {
            // error
        }
    }

    @Transactional
    public FavorisDTO updateFavoris(FavorisDTO favorisDTO){
        Optional<Favoris> favorisOpt = repository.findById(favorisDTO.getId());
        if(favorisOpt.isPresent()){
            Favoris favoris = mapper.toEntity(favorisDTO);
            return mapper.toDTO(repository.save(favoris));
        } else {
            return favorisDTO;
            // throw new ResourceNotFoundException("favoris " + favorisDTO.getTitre() + " does not exist when trying to update");
        }
    }

    public List<FavorisDTO> findByUserId(Long id) {
        List<Favoris> listeFavoris = repository.findByUtil_conserne(id);
        List<FavorisDTO> listeFavorisDTO = new ArrayList<>();
        for (Favoris favoris : listeFavoris) {
            listeFavorisDTO.add(mapper.toDTO(favoris));
        }
        return listeFavorisDTO;
    }

    public List<FavorisDTO> findByFichAndUtil(Long id_fiche, Long id_util) {
        List<Favoris> listeFavoris = repository.findByFich_conserneAndUtil_conserne(id_fiche, id_util);
        List<FavorisDTO> listeFavorisDTO = new ArrayList<>();
        for (Favoris favoris : listeFavoris) {
            listeFavorisDTO.add(mapper.toDTO(favoris));
        }
        return listeFavorisDTO;
    }

    public boolean existsFavorisByFichAndUtil(Long id_fiche, Long id_util) {
        int res = repository.existsFavorisByFich_conserneAndUtil_conserne(id_fiche, id_util);
        if (res >= 1) return true;
        else return false;
    }


}
