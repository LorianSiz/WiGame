package com.architecture.wigame.decodex;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@Service
@RequiredArgsConstructor
public class DecodexTemplate {

    private RestTemplate restTemplate = new RestTemplate();

    public int CallDecodex (String url) {
        String urlDecodex = "https://api.decodexwatcher.communiquons.org/site/"+ url +"/infos";

        //Faire une demande à envoyer à l'API
        try {
            ResponseEntity<DecodexEntity> request = this.restTemplate.getForEntity(urlDecodex, DecodexEntity.class);
            if (request.getStatusCode() == HttpStatus.OK) {
                return request.getBody().getTrustLevel();
            } else {
                return -1;
            }
        }
        catch (final HttpClientErrorException e) {
            return -1;
        }
    }
}