import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InformacionService {

  public info: any = {};
  public cargado: boolean = false;

  constructor(public http: HttpClient) {

    this.http.get('/assets/data/info.pagina.json').subscribe(data => { this.info = data; this.cargado = true; });

  }

  public getEquipo(): Observable<any> {
    const url: string = 'https://paginaweb-73e4a.firebaseio.com/equipo.json';

    return this.http.get(url).map((data: any[]) => {
      const equipo: any[] = [];
      for ( let elemento of data ) {
        equipo.push(elemento);
      }
      return equipo;
    });
  }

}
