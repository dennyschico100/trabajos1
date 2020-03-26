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
  cargando:any;
  overlay:any
  mensaje:string;
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

    setTimeout(()=>{ 
      this.cargando.style.display = "none"; },2000);
      this.cargando = document.getElementById('carga')
      this.overlay=document.getElementById('ocultar')
      this.cargando.className = 'loader'
      this.overlay.className = 'overlay'
      this.authService.login(this.iniciar.value).subscribe(
  
        data => {
        this.mensaje=data.message;
            if(this.mensaje="Unauthorized"){
  
          this.isLoginFailed = true;
          
          //this.errorMessage = err.error.message;
          this.errorMessage = 'Usuario  y/o contraseña incorrecta';
          
            }else{
          this.tokenStorage.saveToke(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          console.log(data);
            }
              this.iniciar.reset()
              this.reloadPage()
  
  
        },
        err => {
          this.isLoginFailed = true;
          
          this.errorMessage = err.error.message;
          
        }
      );  
      

   }

    reloadPage() {
      window.location.reload();
    }
}
