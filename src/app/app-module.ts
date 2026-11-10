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

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, ComicsComponent, ClientesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), miServiceComics, miServiceClientes],
  bootstrap: [App],
})
export class AppModule {}
