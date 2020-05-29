import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-post-oferta',
  templateUrl: './post-oferta.component.html',
  styleUrls: ['./post-oferta.component.css']
})
export class PostOfertaComponent implements OnInit {
  content: string;
  public Editor = ClassicEditor;
  
  valor='';
  //FUNCION DE EJEMPLO NADA MAS
  //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  //myHero = this.heroes[0];
  
  
  onKey(event:KeyboardEvent){
    //  this.valor+=(event.target as HTMLInputElement).value + ' /';
  //console.log(typeof this.valor);
  //console.error(this.myHero)

  }

  

  
  public model = {
    editorData: '<h5>PUEDES BORRAR ESTE TEXTO Y EMPEZAR A ESCRIBIR ! </h5>   ' +
      '<h4>Descipcion de tu oferta </h4> <br><br><br><br><br><br> <h4> Requisitos </h4> '
  };

  publicarForm: FormGroup
  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    const editorData = '<p>Hello, world!</p>';


    //
    this.publicarForm = this.builder.group({
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
  enviarOferta(){
    
  }
}
