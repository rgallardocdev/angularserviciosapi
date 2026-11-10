import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ClientesComponent } from './components/clientes-component/clientes-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"comics", component: ComicsComponent},
  {path:"clientes", component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
