package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.services.AssemblyService;

import java.io.IOException;

@RestController
@RequestMapping("/api/assembly")
public class AssemblyController {

    @Autowired
    private AssemblyService assemblyService;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<?> saveAssembly(@RequestBody Assembly assembly) {
        return new ResponseEntity<>(assemblyService.saveAssembly(assembly), HttpStatus.CREATED);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/assemblies")
    public ResponseEntity<?> getAssemblies() {
        return new ResponseEntity<>(assemblyService.getAllAssembly(), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/assembly_by_id")
    public ResponseEntity<?> getAssemblyById(@RequestParam Long id) {
        return new ResponseEntity<>(assemblyService.getAssemblyById(id), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/fileSystem")
    public ResponseEntity<?> uploadImageToFileSystem(@RequestParam("image") MultipartFile file) throws IOException {
        String uploadImage = assemblyService.uploadAssemblyToFileSystem(file);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/fileSystem/{filename}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String filename) throws IOException {
        byte[] imageData = assemblyService.downloadAssemblyFromFileSystem(filename);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
}
