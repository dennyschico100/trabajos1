import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuNoderadorComponent } from './components/menu-noderador/menu-noderador.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';

import {FormsModule } from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'

import {ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PerfilComponent,
    MenuAdminComponent,
    MenuNoderadorComponent,
    MenuUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
