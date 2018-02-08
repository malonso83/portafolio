// En este caso, el home lo dejamos en blanco, de forma que la pagina principal será el dominio por defecto.

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, PortafolioItemComponent, BuscarComponent } from './components/index.paginas';

const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'articulo/:cod', component: PortafolioItemComponent },
    { path: 'about', component: AboutComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
