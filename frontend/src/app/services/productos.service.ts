import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/api/productos'; // Cambia esta URL según tu configuración

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  actualizarProducto(producto: any): Observable<any> {
    const url = `${this.apiUrl}/${producto.id}`;
    return this.http.put(url, producto, { responseType: 'text' }); // Indica que la respuesta será texto
  }


  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
