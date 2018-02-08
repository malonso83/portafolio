import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticulosService {

  public articulos: any[] = [];
  public articulos_idx: any[] = [];
  public articulos_filtrados: any[] = [];
  public articulo_seleccionado: any = null;
  public cargado_articulos: boolean = false;
  public cargado_articulos_idx: boolean = false;

  constructor(public http: HttpClient) {
    this.cargaArticulosIdx();
    this.cargaArticulos();
  }

  private cargaArticulosIdx(): Promise<any> {
    const promesa = new Promise( (resolve, reject) => {
      this.http.get('https://paginaweb-73e4a.firebaseio.com/productos_idx.json').subscribe((data: any[]) => {
        this.articulos_idx = data;
        this.cargado_articulos_idx = true;
        resolve();
      });
    });

    return promesa;
  }

  private cargaArticulos(): Promise<any>  {
    const promesa = new Promise( (resolve, reject) => {
      this.http.get('https://paginaweb-73e4a.firebaseio.com/productos.json').subscribe((data: any[]) => {
        this.articulos = data;
        this.cargado_articulos = true;
        resolve();
      });
    });

    return promesa;
  }

  public cargarArticulo(cod: string): Observable<any> {
    return this.http.get(`https://paginaweb-73e4a.firebaseio.com/productos/${cod}.json`);
  }

  public seleccionarArticulo(cod: string): void {
    if (this.articulos.length === 0) {
      this.cargaArticulos().then( () => {
        this.articulo_seleccionado = this.articulos[cod];
      });
    }
    else {
      this.articulo_seleccionado = this.articulos[cod];
    }
  }

  public buscarArticulo( termino: string ) {

    if (this.articulos_idx.length === 0) {
      this.cargaArticulosIdx().then( () => {
        this.filtrarArticulos(termino);
      });
    }
    else {
      this.filtrarArticulos(termino);
    }
  }

  private filtrarArticulos( termino: string ) {
    this.articulos_filtrados = [];

    this.articulos_idx.forEach(articulo => {
      if ( ( articulo.titulo.toUpperCase().indexOf(termino.toUpperCase()) >= 0 )
           ||
           ( articulo.categoria.toUpperCase().indexOf(termino.toUpperCase()) >= 0 ) ) {

            this.articulos_filtrados.push(articulo);

      }
    });
  }
}
