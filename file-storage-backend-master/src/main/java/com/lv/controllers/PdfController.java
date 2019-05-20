package com.lv.controllers;

import com.itextpdf.text.*;
import com.lv.dto.ParseHtmlDto;
import com.lv.dto.ParseSettings;

import com.lv.services.ParseAndGeneratePdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/v1/pdf")
@CrossOrigin
public class PdfController {

    @Autowired
    private ParseAndGeneratePdfService parseAndGeneratePdfService;

    @PostMapping("/gen")
    public void createParseAndGeneratePdf(@Valid @RequestBody ParseSettings settings) throws URISyntaxException, IOException, DocumentException {
        String url = settings.getUrl();
        if (!this.parseAndGeneratePdfService.isUrlValid(url)) {
            // throw new BadRequestAlertException("A is not valid", ENTITY_NAME, "idexists");
        }
        ParseHtmlDto pdf = this.parseAndGeneratePdfService.parseHtml(url);
        this.parseAndGeneratePdfService.createPdf(pdf);

        parseAndGeneratePdfService.loadAsResource("hello.pdf");
    }
}


