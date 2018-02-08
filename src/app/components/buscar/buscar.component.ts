import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  private termino: string = '';

  constructor(private _route: ActivatedRoute, public articuloService: ArticulosService)  {

    this._route.params.subscribe(params => {
      this.termino = params['termino'];
      this.articuloService.buscarArticulo(this.termino);
    });

  }

}
