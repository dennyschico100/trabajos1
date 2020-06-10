import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../Servicios/auth.service'
import { TokenStorageService } from '../../Servicios/token-storage.service'
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  iniciar: FormGroup
  cargando: any;
  overlay: any
  ventana1: any
  ventana2: any

  mensaje: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private tokenStorage: TokenStorageService,
    private authService: AuthService

  ) {

  }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

    }

    this.iniciar = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],


    }


    )




  }

  cerrar() {

    this.ventana1 = document.getElementById('popup1')
    this.ventana1.style.display = "none"
    this.reloadPage()

  }

  mostrar() {

    this.ventana1 = document.getElementById('popup1')
    this.ventana1.className = 'overlay2'

    this.ventana2 = document.getElementById('popup2')
    this.ventana2.className = 'popup'


  }
  onSubmit() {
    let  boton =document.getElementById('boton-enviar');
    
    setTimeout(() => {
      this.cargando.style.display = "none";
      
      boton.style.opacity="1.0";

    }, 1500);
    boton.style.opacity="0.3";

    this.ventana1 = document.getElementById('popup1')
    this.ventana1.className = 'overlay2'

    this.cargando = document.getElementById('carga')
    this.overlay = document.getElementById('ocultar')
    this.cargando.className = 'loader'


    this.authService.login(this.iniciar.value).subscribe(

      data => {
        this.mensaje = data.message;


        if (this.mensaje == "Error: Unauthorized") {


          setTimeout(() => {
            this.ventana2 = document.getElementById('popup2')
            this.ventana2.className = 'popup'
            this.ventana2.style.opacity = "0"
          }, 1550);
          this.isLoginFailed = true;

          //this.errorMessage = err.error.message;
          //this.errorMessage = 'Usuario  y/o contraseña incorrecta';
          this.mensaje = ''
        } else {
          alert('else')

          this.tokenStorage.saveToke(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;

          this.router.navigate(['/profile'])
            .then(() => {
              window.location.reload();
              
            });

        }
        this.iniciar.reset()

      },
      err => {
        //alert('else err')

          
        this.ventana1 = document.getElementById('popup1')
        this.ventana1.style.display = "none"
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;

      }
    );


  }

  reloadPage() {
    window.location.reload();

  }
}
