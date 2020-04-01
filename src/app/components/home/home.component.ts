import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/Servicios/user.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;
  public Editor = ClassicEditor;

  publicarForm:FormGroup
  constructor(private builder:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {

this.publicarForm=this.builder.group({
  editor: [ '', [Validators.required ] ] 
  
        
  }
)
    /*
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  }
 
}
