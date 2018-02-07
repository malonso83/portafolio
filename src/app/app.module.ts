import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Rutas
import { appRouting } from './app.routes';

// Servicios
import { InformacionService } from './services/informacion.service';
import { ArticulosService } from './services/articulos.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouting
  ],
  providers: [
    InformacionService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
