package com.architecture.wigame.Decodex;

public class DecodexService {

    private static DecodexTemplate template;

    public static int DecodexServices(String url) {
        int test = template.DecodexTemplateTest(url);
        if (test!=0) {
            return -1;
        }
        else return test;
    }
}
