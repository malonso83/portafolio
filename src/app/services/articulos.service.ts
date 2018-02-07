import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticulosService {

  public productos: any[] = [];
  public productos_idx: any[] = [];
  public cargado_productos: boolean = false;
  public cargado_productos_idx: boolean = false;

  constructor(public http: HttpClient) {
    console.log('Cargando Productos...');
    this.cargaProductosIdx();
    this.cargaProductos();
  }

  private cargaProductosIdx(): void {
    this.http.get('https://paginaweb-73e4a.firebaseio.com/productos_idx.json').subscribe((data: any[]) => {
      this.productos_idx = data;
      this.cargado_productos_idx = true;
    });
  }

  private cargaProductos(): void {
    this.http.get('https://paginaweb-73e4a.firebaseio.com/productos.json').subscribe((data: any[]) => {
      this.productos = data;
      this.cargado_productos = true;
    });
  }

}
