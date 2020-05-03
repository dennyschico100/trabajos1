import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-opciones',
  templateUrl: './registro-opciones.component.html',
  styleUrls: ['./registro-opciones.component.css']
})
export class RegistroOpcionesComponent implements OnInit {

  constructor() { }
  roles:any=[ 'user','moderator' ];

  rols:any={
    uno:'user',
    dos:'moderator'
  }
  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      console.log(this.roles[1] )  
      
    }
  }

}
