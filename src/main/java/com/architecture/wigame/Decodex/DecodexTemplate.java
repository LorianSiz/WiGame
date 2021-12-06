package com.architecture.wigame.Decodex;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class DecodexTemplate {

    private RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();

    @Autowired
    RestTemplate restTemplate;

    public int DecodexTemplateTest(String url) {
        String urlDecodex = "http://localhost:8080/activiti-rest/service/runtime/process-instances";
        return -1;
    }
}
