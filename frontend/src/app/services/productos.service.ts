import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/api/productos'; // URL del backend

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
