import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Servicios/user.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  content = '';

  constructor(private userService :UserService ) { }

  ngOnInit() {
  
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }


}
