package com.architecture.wigame.decodex;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

public class DecodexTemplate {

    private RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();

    @Autowired
    RestTemplate restTemplate;

    public int DecodexTemplateTest(String url) {
        String urlDecodex = "http://localhost:8080/activiti-rest/service/runtime/process-instances";
        return -1;
    }
}
