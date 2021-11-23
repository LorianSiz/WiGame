package com.architecture.wigame.wiki;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WikiService {

    private final WikiRepository repository;
    private final WikiMapper mapper;
    /*
    public WikiDTO getWikiById(Long id) {
        Optional<Wiki> wiki = repository.findById(id);
        if (wiki.isPresent()) {
            return mapper.toDTO(wiki.get());
        } else {
            //throw new Exception("Wiki with id " + id + " not found");
        }
    }

    public WikiDTO createWiki(WikiDTO WikiDTO){
        Wiki wiki = mapper.toEntity(WikiDTO);
        Wiki savedWiki = repository.save(wiki);
        return mapper.toDTO(savedWiki);
    }

    //@Transactional
    public WikiDTO updateWiki(WikiDTO WikiDTO){
        Optional<Wiki> wikiOpt = repository.findById(WikiDTO.getId());
        if(WikiOpt.isPresent()){
            Wiki wiki = mapper.toEntity(WikiDTO);
            return mapper.toDTO(repository.save(wiki));
        } else {
            //throw new ResourceNotFoundException("wiki " + WikiDTO.getName() + " does not exist when trying to update");
        }
    }*/

}
