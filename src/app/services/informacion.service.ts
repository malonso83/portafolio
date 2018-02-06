import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformacionService {

  public info: any = {};
  public cargado: boolean = false;

  constructor(public http: HttpClient) {

    this.http.get('/assets/data/info.pagina.json').subscribe(data => { this.info = data; this.cargado = true; });

  }

}
