package com.lv.dto;

public class ParseSettings {
    private String url;

    public ParseSettings() {}

    public ParseSettings(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
