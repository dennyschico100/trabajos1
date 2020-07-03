import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {MenuAdminComponent} from './components/menu-admin/menu-admin.component';
import { MenuNoderadorComponent} from './components/menu-noderador/menu-noderador.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import {RegistroCandidatosComponent} from './components/registro-candidatos/registro-candidatos.component';
import {RegistroOpcionesComponent} from './components/registro-opciones/registro-opciones.component';

import { NavegacionComponent} from './components/navegacion/navegacion.component';
import {PostOfertaComponent} from './components/post-oferta/post-oferta.component';
import {ListarTrabajosComponent} from "./components/listar-trabajos/listar-trabajos.component"
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavegacionComponent},
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  {path:'registro-candidato',component:RegistroCandidatosComponent },
  { path: 'profile', component: PerfilComponent },
  { path: 'user', component: MenuUsuarioComponent },
  { path: 'mod', component: MenuNoderadorComponent},
  { path: 'admin', component: MenuAdminComponent },
  { path:'post-oferta',component:PostOfertaComponent },
  {path:'listar-trabajos',component :ListarTrabajosComponent},
  { path:'registro-opciones',component: RegistroOpcionesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
