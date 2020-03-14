import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {MenuAdminComponent} from './components/menu-admin/menu-admin.component';
import { MenuNoderadorComponent} from './components/menu-noderador/menu-noderador.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'profile', component: PerfilComponent },
  { path: 'user', component: MenuUsuarioComponent },
  { path: 'mod', component: MenuNoderadorComponent},
  { path: 'admin', component: MenuAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
