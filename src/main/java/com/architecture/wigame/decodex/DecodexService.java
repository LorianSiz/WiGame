package com.architecture.wigame.decodex;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DecodexService {

    @Autowired
    private final DecodexTemplate template;

    public int DecodexServices(String url) {
        int fiabilite = template.CallDecodex(url);
        if (fiabilite==0) {
            return -1;
        }
        else return fiabilite;
    }
}
