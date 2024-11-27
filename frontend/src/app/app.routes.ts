import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/productos', pathMatch: 'full' }, // Redirige de raíz (/) a /productos
    { path: 'productos', component: ProductosComponent } // Ruta para productos
];
