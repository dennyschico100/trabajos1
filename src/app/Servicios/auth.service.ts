import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders } from "@angular/common/http"
import {Observable} from "rxjs"
import { Usuarios } from '../modelos/usuarios.model';
import { FormGroup } from '@angular/forms';

const AUTH_API="http://localhost:8080/trabajos/api/auth/"

      const httpOption={
      headers:new HttpHeaders({ 'Content-Type': 'application/json'  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService   {

  constructor(private http :HttpClient ) { 

  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOption);
  }

  registrarForm1: FormGroup;
  registrarFor2: FormGroup;
  

  register(registrarForm1,registrarForm2): Observable<any> {
    console.warn("XXXXXXXXXXXXXXXXXXXXXX")
    console.log(registrarForm1)
    return this.http.post(AUTH_API + 'signup', {
      nombres: registrarForm1.nombres,
      apellidos: registrarForm1.apellidos,
      email: registrarForm2.email,
      contraseña: registrarForm2.contraseña,
      contraseña2: registrarForm2.contraseña2 ,
      nacionalidad:registrarForm1.nacionalidad,
      genero: registrarForm1.genero,
      edad: registrarForm1.edad,
      fecha_nacimiento:registrarForm1.fecha_nacimiento,
      telefono: registrarForm1.telefono,
      estado: registrarForm1.estado,
      roles:registrarForm1.roles
    }, httpOption);
  }

  registrarUsuario(usuarios: Usuarios){
    
    //return this.http.post(`${this.API_URL}/usuarios/registrar`,usuarios);

   }

}
