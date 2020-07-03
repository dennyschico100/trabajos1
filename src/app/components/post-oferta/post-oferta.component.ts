import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import {OfertaEmpleoService} from '../../Servicios/oferta-empleo.service'
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-post-oferta',
  templateUrl: './post-oferta.component.html',
  styleUrls: ['./post-oferta.component.css']
})
export class PostOfertaComponent implements OnInit {
  content: string;
  public Editor = ClassicEditor;
  sent=false;
  isSuccessful=!true;
  ofertFailed=false;
  errorMessage = '';

  contador:number;
      
  cerrarError:HTMLElement;
  valor = '';
  //FUNCION DE EJEMPLO NADA MAS
  //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  //myHero = this.heroes[0];


  onKey(event: KeyboardEvent) {
    //  this.valor+=(event.target as HTMLInputElement).value + ' /';
    //console.log(typeof this.valor);
    //console.error(this.myHero)

  }


  public model = {
    editorData: '<h5>PUEDES BORRAR ESTE TEXTO Y EMPEZAR A ESCRIBIR ! </h5>   ' +
      '<h4>Descipcion de tu oferta </h4> <br><br><br><br><br><br> <h4> Requisitos </h4> '
  };

  publicarForm: FormGroup
  constructor(private oferta:OfertaEmpleoService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
   const editorData = '<p>Hello, world!</p>';
    
    this.cerrarError=document.getElementById('msgError');

    this.publicarForm = this.builder.group( {
      titulo_oferta: ['', [Validators.required, Validators.minLength(6)]],
      cargo_solicitado: ['', [Validators.required, Validators.minLength(6)]],
      puestos_vacantes: ['', [Validators.required]],
      tipo_de_contratacion: ['', [Validators.required]],
      nivel_de_experiencia: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      vehiculo: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      expiracion: ['', [Validators.required]],
      editor: ['', [Validators.required]]
    }
    )

  }
  enviarOferta() {
    this.sent=true;
    this.ofertFailed=!false;
    let p;

    setTimeout(()=>{
      this.sent=false;

    },1780);
      
    if(this.publicarForm.invalid){
      alert("ERRORES")
      

    }else{
      alert(this.publicarForm);
      this.oferta.guardar(this.publicarForm.value).subscribe(
        data=>{
           this.isSuccessful=true;
           this.ofertFailed=false;
           for(let input in this.publicarForm.controls){
            this.publicarForm.controls[input].setValue('');
            this.publicarForm.controls[input].setErrors(null);
            
          }
            
        },err=>{
            console.warn(this.publicarForm.value)
            this.errorMessage=err.error.message;
            this.ofertFailed=true;
            alert(err.error.message);
    
        }
    
       )
      
      

    
    }
 
   

  }

  close(){
    
    this.cerrarError.style.display="none";
    
  }

 
}
