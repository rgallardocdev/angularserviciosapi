import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ClientesComponent } from './components/clientes-component/clientes-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { HospitalesApiComponent } from './components/hospitales-api-component/hospitales-api-component';
import { CustomersApiComponent } from './components/customers-api-component/customers-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"comics", component: ComicsComponent},
  {path:"clientes", component: ClientesComponent},
  {path:"personas", component: PersonasApiComponent},
  {path:"hospitales", component: HospitalesApiComponent},
  {path:"customers", component: CustomersApiComponent},
  {path: "coches", component: CochesApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
