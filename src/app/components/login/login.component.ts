import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../Servicios/auth.service'
import {TokenStorageService} from '../../Servicios/token-storage.service'
import {FormBuilder,FormGroup, Validators,FormGroupName} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  iniciar:FormGroup

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
 private   builder:FormBuilder,
    private tokenStorage:TokenStorageService,
    private authService:AuthService

  ) {

   }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

    }

    this.iniciar=this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
     

    }


    )




  }
  onSubmit() {
    this.authService.login(this.iniciar).subscribe(
      data => {
        this.tokenStorage.saveToke(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    ); }

    reloadPage() {
      window.location.reload();
    }
}
