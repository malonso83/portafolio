import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  public codigo: string = '';
  public articulo: any = null;

  constructor(public is: InformacionService, public articuloService: ArticulosService, private _route: ActivatedRoute) {

    this._route.params.subscribe(params => {
      this.codigo = params['cod'];
      this.articuloService.seleccionarArticulo(params['cod']);
      // this.articuloService.cargarArticulo(this.codigo).subscribe(articulo => { this.articulo = articulo; console.log(this.articulo); });
    });

  }

}
