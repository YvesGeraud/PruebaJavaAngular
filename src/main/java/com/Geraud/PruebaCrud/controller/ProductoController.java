package com.Geraud.PruebaCrud.controller;

import com.Geraud.PruebaCrud.dto.ProductoDTO;
import com.Geraud.PruebaCrud.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<ProductoDTO> listarTodos() {
        return productoService.listarTodos();
    }
}