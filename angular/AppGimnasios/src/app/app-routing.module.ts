import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { LoginComponent } from './usuarios/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/lista' },
  { path: 'lista', component: ListaClientesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
