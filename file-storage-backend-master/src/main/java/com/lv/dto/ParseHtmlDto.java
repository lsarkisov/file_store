package com.lv.dto;

public class ParseHtmlDto {
    private String title;
    private String h1;
    private String p;

    public ParseHtmlDto() { }

    public ParseHtmlDto(String title, String h1, String p) {
        this.title = title;
        this.h1 = h1;
        this.p = p;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getH1() {
        return h1;
    }

    public void setH1(String h1) {
        this.h1 = h1;
    }

    public String getP() {
        return p;
    }

    public void setP(String p) {
        this.p = p;
    }
}
