import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service';
import { ArticulosService } from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public is: InformacionService, public as: ArticulosService) { }

}
