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
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import {ReactiveFormsModule } from '@angular/forms';
import { RegistroCandidatosComponent } from './components/registro-candidatos/registro-candidatos.component'
//MODEUL DE ANGULAR MTERIAL
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule } from '@angular/material/icon';

import { AuthInterceptor } from '../app/_helpers/AuthInterceptor';


import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepper,MatStepLabel,MatStepperModule,MatHorizontalStepper} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NavegacionComponent} from './components/navegacion/navegacion.component';


//import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PerfilComponent,
    MenuAdminComponent,
    MenuNoderadorComponent,
    MenuUsuarioComponent,
    RegistroCandidatosComponent,
    NavegacionComponent

  
  ],exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    CKEditorModule,
    FroalaEditorModule.forRoot(),
     FroalaViewModule.forRoot()
    
  ],
  providers: [ {
     provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
