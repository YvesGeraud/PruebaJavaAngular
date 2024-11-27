import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: any[] = []; // Lista de productos
  productoSeleccionado: any = {}; // Producto seleccionado para editar

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  prepararEdicion(producto: any): void {
    this.productoSeleccionado = { ...producto };
  }

  guardarCambios(): void {
    this.productosService.actualizarProducto(this.productoSeleccionado).subscribe(
      (response) => {
        alert('Producto actualizado con éxito');
        this.cargarProductos(); // Actualiza la lista de productos
      },
      (error) => {
        console.error('Error al actualizar el producto:', error);
        alert('Ocurrió un error al guardar los cambios.');
      }
    );
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productosService.eliminarProducto(id).subscribe(
        () => {
          alert('Producto eliminado con éxito');
          this.cargarProductos();
        },
        (error) => {
          console.error('Error al eliminar producto:', error);
        }
      );
    }
  }
}
