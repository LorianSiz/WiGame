package com.architecture.wigame.wiki;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WikiService {

    private final WikiRepository repository;
    private final WikiMapper mapper;

    public WikiDTO getWikiById(Long id) {
        Optional<Wiki> wiki = repository.findById(id);
        if (wiki.isPresent()) {
            System.out.println(id + "  " + mapper.toDTO(wiki.get()).getListeFiche().toString());
            return mapper.toDTO(wiki.get());
        } else {
            return new WikiDTO();
            //throw new Exception("Wiki with id " + id + " not found");
        }
    }

    public WikiDTO createWiki(WikiDTO WikiDTO){
        Wiki wiki = mapper.toEntity(WikiDTO);
        Wiki savedWiki = repository.save(wiki);
        return mapper.toDTO(savedWiki);
    }

    @Transactional
    public WikiDTO updateWiki(WikiDTO WikiDTO){
        Optional<Wiki> wikiOpt = repository.findById(WikiDTO.getId());
        if(wikiOpt.isPresent()){
            Wiki wiki = mapper.toEntity(WikiDTO);
            return mapper.toDTO(repository.save(wiki));
        } else {
            return new WikiDTO();
            // throw new ResourceNotFoundException("wiki " + WikiDTO.getName() + " does not exist when trying to update");
        }
    }

    public List<WikiDTO> findAllWiki(){
        List<Wiki> listeWiki = repository.findAll();
        List<WikiDTO> listeWikiDTO = new ArrayList<>();
        for (Wiki wiki : listeWiki) {
            listeWikiDTO.add(mapper.toDTO(wiki));
        }
        return listeWikiDTO;
    }

}
