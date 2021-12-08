package com.architecture.wigame.decodex;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class DecodexTemplate {

    RestTemplate restTemplate;

    private RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();

        public int CallDecodex (String url) {

            String urlDecodex = "https://api.decodexwatcher.communiquons.org/site/"+ url +"/infos";
            DecodexEntity decodex = new DecodexEntity();

            //Faire une demande à envoyer à l'API
            RequestEntity<DecodexEntity> request = null;
            try {
                request = RequestEntity
                        .post(new URI(urlDecodex))
                        .accept(MediaType.APPLICATION_JSON)
                        .body(decodex);
                //La réponse est renvoyée par l'API
                ResponseEntity<DecodexEntity> response = restTemplate
                        .exchange(request, DecodexEntity.class);
                return decodex.getTrustLevel();
            } catch (URISyntaxException e) {
                e.printStackTrace();
            }
            return -1;
        }
    }
