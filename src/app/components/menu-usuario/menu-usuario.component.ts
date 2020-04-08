import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Servicios/user.service'

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  me:string;
  constructor(
    private m:UserService) { }

  ngOnInit() {
    this.m.getUserBoard().subscribe(
      data=>{
        alert(data)
      },err=>{
        alert(err)

      }
    )

  }

}
