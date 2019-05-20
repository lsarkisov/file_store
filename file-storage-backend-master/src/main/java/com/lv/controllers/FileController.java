package com.lv.controllers;

import com.lv.exceptions.FileStorageException;
import com.lv.models.ImageInfo;

import com.lv.repository.FileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/file")
@CrossOrigin
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    FileRepository fileRepository;

    @GetMapping("/all/files")
    public List<ImageInfo> fetchAllFiles() {
        return fileRepository.findAll();
    }

    @PostMapping("/upload")
    public List<ImageInfo> uploadFile(@Valid @RequestBody ArrayList<ImageInfo> imageInfo) {
        imageInfo.forEach(image -> {
            fileRepository.save(image);
        });

        return fileRepository.findAll();
    }

    @PutMapping("/update")
    public ImageInfo updateFile(@RequestParam("fileId") String  id, @RequestParam("newName") String  newName) {
        ImageInfo image = fileRepository.findById(id)
                .orElseThrow(() -> new FileStorageException("Note found image with id: " + id));

        image.setImageName(newName);
        return fileRepository.save(image);

    }

    @DeleteMapping("/delete")
    public void deleteFile(@RequestParam("fileId") String id) {
        fileRepository.deleteById(id);
    }

}

