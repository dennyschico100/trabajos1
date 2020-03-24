import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Servicios/auth.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  loading=false;

        
  onSubmit() {
    this.loading=true;
  //MINUTO 42 :15 SPINER EFECTO CARGANDO
    this.authService.register(this.form,this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
