import { Injectable } from '@angular/core';


import {HttpClient,HttpHeaders} from "@angular/common/http"

import {Observable} from 'rxjs'
//import { HttpClient } from 'selenium-webdriver/http';


const API_URL='http://localhost:8080/trabajos/api/oferta_empleo';

const httpOption={
  headers:new HttpHeaders({ 'Content-Type': 'application/json'  })
};


@Injectable({
  providedIn: 'root'
})
export class OfertaEmpleoService {


  constructor(
    private http:HttpClient
  ) { }

guardar(oferta):Observable<any>{
  return this.http.post(API_URL,{
    titulo_oferta: oferta.titulo_oferta ,
      cargo_solicitado:oferta.cargo_solicitado ,
      puestos_vacantes:oferta.puestos_vacantes,
      tipo_de_contratacion:oferta.tipo_de_contratacion ,
      nivel_de_experiencia: oferta.nivel_de_experiencia,
      genero: oferta.genero,
      edad: oferta.edad,
      vehiculo: oferta.vehiculo,
      pais: oferta.pais,
      departamento: oferta.departamento,
      estado:1,
      expiracion: oferta.expiracion,
      editor: oferta.editor
  
  } ,httpOption);

}
  
}
