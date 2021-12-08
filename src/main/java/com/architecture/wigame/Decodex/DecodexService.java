package com.architecture.wigame.Decodex;

import java.net.URISyntaxException;

public class DecodexService {

    private static DecodexTemplate template;

    public static int DecodexServices(String url) {
        int test = template.CallDecodex(url);
        if (test==0) {
            return -1;
        }
        else return test;
    }
}
