import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { miServiceComics } from './services/service.comics';
import { ClientesComponent } from './components/clientes-component/clientes-component';
import { miServiceClientes } from './services/service.clientes';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { provideHttpClient } from '@angular/common/http';
import { miServicePersonas } from './services/service.personas';
import { FormsModule } from '@angular/forms';
import { HospitalesApiComponent } from './components/hospitales-api-component/hospitales-api-component';
import { miServiceHospitales } from './services/service.hospitales';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    ComicsComponent,
    ClientesComponent,
    PersonasApiComponent,
    HospitalesApiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    miServiceComics,
    miServiceClientes,
    miServicePersonas,
    miServiceHospitales
  ],
  bootstrap: [App],
})
export class AppModule {}
