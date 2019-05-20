package com.lv.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Clob;

@Entity
@Table(name = "image_info")
public class ImageInfo {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Column(nullable = false)
    private String imageName;

    @Column(nullable = false)
    private String imageType;

    @Column(columnDefinition="CLOB NOT NULL")
    @Lob
    private String base;

    @Column(nullable = false)
    private long size;

    public ImageInfo() {}

    public ImageInfo(String id, String imageName, String imageType, String base, long size) {
        this.id = id;
        this.imageName = imageName;
        this.imageType = imageType;
        this.base = base;
        this.size = size;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public String getBase() {
        return base;
    }

    public void setBase(String base) {
        this.base = base;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}