import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from "@angular/common/http"



const httpOption={
  headers:new HttpHeaders({ 'Content-Type': 'application/json'  })
};


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  API_URL='http://localhost:8080/trabajos/api/empresa/';

  constructor(
    private http:HttpClient) { }


    listarOfertas() {
      return this.http.get(this.API_URL); 
     
     }

     getOnee(id){
      return this.http.get(`${this.API_URL}/${id}`)

    }

}
