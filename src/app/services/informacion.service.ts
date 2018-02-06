import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InformacionService {
  public equipo: any[] = [];
  public info: any = {};
  public cargado_info: boolean = false;
  public cargado_equipo: boolean = false;

  constructor(public http: HttpClient) {

    this.cargainfo();
    this.cargaEquipo();

  }

  private cargainfo() {
    this.http.get('/assets/data/info.pagina.json').subscribe(data => {
      this.info = data;
      this.cargado_info = true;
    });
  }

  private cargaEquipo() {
    this.http.get('https://paginaweb-73e4a.firebaseio.com/equipo.json').subscribe((data: any[]) => {
      this.equipo = data;
      this.cargado_equipo = true;
    });
  }
}
