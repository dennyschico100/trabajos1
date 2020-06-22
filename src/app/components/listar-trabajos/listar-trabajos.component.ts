import { Component, OnInit } from '@angular/core';
import {OfertaEmpleoService} from '../../Servicios/oferta-empleo.service'

import {EmpresaService} from '../../Servicios/empresa.service';
@Component({
  selector: 'app-listar-trabajos',
  templateUrl: './listar-trabajos.component.html',
  styleUrls: ['./listar-trabajos.component.css', './estilos.css' ]
})
export class ListarTrabajosComponent implements OnInit {

  constructor(private ofertaS: OfertaEmpleoService,
    private empresaS:EmpresaService
    ) { }
  ofertas:any=[];
  empresas:any=[];
  arreglo:any=[];
  

  num_registros=0;

  ngOnInit() {
    //this.listarEmpresas();

    this.listarTrabajos();

  }
  /*
  CREATE PROCEDURE `new_procedure` ()
BEGIN

END

  */
  listarEmpresas(){
    this.empresaS.listarOfertas().subscribe(
      res=>{
        this.empresas=res;
        console.log(res)
        alert(this.empresas[0]["logo"])
      },err=>{
        alert(err)
      }
    )
  }
  listarTrabajos(){
    this.ofertaS.listarOfertas().subscribe(
      res=>{
        this.ofertas=res;
        
        this.empresas = this.ofertas
        console.error(res[0]["id_empresa"])

        this.num_registros=this.ofertas.length;
        //alert(this.num_registros)
        //this.ofertas=this.empresa.id_empresa;
        let  j =this.ofertas.length;
        //alert("afuere del if : "+this.ofertas.length);
        let i=0;
        for(i=0 ; i <= j ;i++  ){
         //let id= this.ofertas[i]["id_empresa"];

          //this.listarEmpresas();

          //alert(this.empresas[id]["logo"] );
        }

      },err=>{
        //alert(err);

      }

    );
      
 
  }
}
