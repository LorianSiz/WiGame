package com.architecture.wigame.favoris;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavorisService {

    private final FavorisRepository repository;
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
        Favoris savedFavoris = repository.save(favoris);
        return mapper.toDTO(savedFavoris);
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
}
