import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public is: InformacionService, private router: Router) { }

  public buscarArticulo(valor: string) {

    if ( (valor.length > 0) &&  (valor !== '') ) {
      this.router.navigate(['buscar', valor]);
    }
  }
}
