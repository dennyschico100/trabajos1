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

  publicarForm: FormGroup
  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    
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
      expiracion : ['', [Validators.required]],
      editor: ['', [Validators.required]]
        
    }
    )
  }

}
