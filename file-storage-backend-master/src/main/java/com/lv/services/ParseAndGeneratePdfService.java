package com.lv.services;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.lv.config.StorageProperties;
import com.lv.dto.ParseHtmlDto;
import org.jsoup.Jsoup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ParseAndGeneratePdfService {
    private final Path rootLocation;
    private final String UPLOAD_DIR = "src/main/resources/uploads/";

    @Autowired
    public ParseAndGeneratePdfService(StorageProperties properties) {
        this.rootLocation = Paths.get(properties.getLocation());
    }

    public Boolean isUrlValid(String url) {
        try {
            new URL(url).toURI();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ParseHtmlDto parseHtml(String url) throws IOException {
        org.jsoup.nodes.Document doc = Jsoup.connect(url).get();

        String title = doc.title();
        String h1 = doc.select("h1").get(0).text();
        String p = doc.select("p").get(0).text();

        return new ParseHtmlDto(title, h1, p);
    }

    public void createPdf(ParseHtmlDto pdf) throws FileNotFoundException, DocumentException, UnsupportedEncodingException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        com.itextpdf.text.Document document = new com.itextpdf.text.Document();

        PdfWriter.getInstance(document, new FileOutputStream(UPLOAD_DIR + "hello.pdf"));

        document.open();

        Font titleFont = FontFactory.getFont(FontFactory.COURIER, 18, BaseColor.BLUE);
        Font h1Font = FontFactory.getFont(FontFactory.COURIER, 24, BaseColor.RED);
        Font pFont = FontFactory.getFont(FontFactory.COURIER, 15, BaseColor.BLACK);

        Paragraph title = new Paragraph(pdf.getTitle(), titleFont);
        Paragraph h1 = new Paragraph(pdf.getH1(), h1Font);
        Paragraph p = new Paragraph(pdf.getP(), pFont);

        document.add(title);
        document.add(h1);
        document.add(p);

        document.close();
    }

    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            }
        }
        catch (MalformedURLException e) {

        }
        return null;
    }
}
