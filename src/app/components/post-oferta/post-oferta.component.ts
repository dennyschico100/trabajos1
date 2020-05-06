import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-post-oferta',
  templateUrl: './post-oferta.component.html',
  styleUrls: ['./post-oferta.component.css']
})
export class PostOfertaComponent implements OnInit {
  content: string;
  public Editor = ClassicEditor;

  publicarForm:FormGroup
  constructor(
    private builder:FormBuilder
  ) { }


  ngOnInit() {
    this.publicarForm=this.builder.group({
      editor: [ '', [Validators.required ] ] 
      
            
      }
    )
  }

}
