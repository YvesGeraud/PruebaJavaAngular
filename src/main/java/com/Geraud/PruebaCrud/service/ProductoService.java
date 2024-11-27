package com.Geraud.PruebaCrud.service;

import com.Geraud.PruebaCrud.model.Producto;
import com.Geraud.PruebaCrud.dto.ProductoDTO;
import com.Geraud.PruebaCrud.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<ProductoDTO> listarTodos() {
        // Convertir entidades Producto a DTOs
        return productoRepository.findAll().stream().map(producto -> new ProductoDTO(
                producto.getId(),
                producto.getNombre(),
                producto.getPrecio(),
                producto.getCategoria().getNombre() // Esto ahora debería funcionar
        )).collect(Collectors.toList());
    }
}
