package com.architecture.wigame.Decodex;

import org.springframework.stereotype.Component;

@Component
public class decodexEntity {
    private int ID;
    private int ID_sitesName;
    private int insertTime;
    private int latest;
    private String[] urls;
    private String comment;
    private int trustLevel;
    private String name;
    private String urlName;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getID_sitesName() {
        return ID_sitesName;
    }

    public void setID_sitesName(int ID_sitesName) {
        this.ID_sitesName = ID_sitesName;
    }

    public int getInsertTime() {
        return insertTime;
    }

    public void setInsertTime(int insertTime) {
        this.insertTime = insertTime;
    }

    public int getLatest() {
        return latest;
    }

    public void setLatest(int latest) {
        this.latest = latest;
    }

    public String[] getUrls() {
        return urls;
    }

    public void setUrls(String[] urls) {
        this.urls = urls;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getTrustLevel() {
        return trustLevel;
    }

    public void setTrustLevel(int trustLevel) {
        this.trustLevel = trustLevel;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrlName() {
        return urlName;
    }

    public void setUrlName(String urlName) {
        this.urlName = urlName;
    }
}
