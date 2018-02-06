import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  public equipo: any[] = [];

  constructor(public is: InformacionService) {
    this.is.getEquipo().subscribe(equipo => this.equipo = equipo );
  }

}
