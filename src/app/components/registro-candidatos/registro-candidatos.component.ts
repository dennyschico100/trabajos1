import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { AuthService } from '../../Servicios/auth.service'
import { HostListener, Directive, HostBinding, Input } from '@angular/core';
import { MatVerticalStepper } from '@angular/material/stepper';



@Component({
  selector: 'app-registro-candidatos',
  templateUrl: './registro-candidatos.component.html',
  styleUrls: ['./registro-candidatos.component.css']
})
export class RegistroCandidatosComponent implements OnInit {

  //usuarios:Usuarios;
  //CREANDO LOS OBJETOS de forms para validacoines
  registrarForm1: FormGroup
  registrarForm2: FormGroup

  cuenta: FormGroup

  loading = false;

  cargando = false
  enviado = false
  habilitar = false

  usuarios: Usuarios = {
    id_usuario: 0,
    nombres: '',
    apellidos: '',
    email: '',
    contraseña: '',
    contraseña2: '',
    nacionalidad: '',
    genero: 0,
    edad: 0,
    fecha_nacimiento: new Date('YYYY-MM-dd'),
    telefono: 0,
    estado: 0,
    roles: 'user'
  }



  //private authenticationService: AuthenticationService,
  //private userS:UsuariosService;
  //private alertService: AlertService
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  sent = false
  spinner: HTMLElement;




  constructor(
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activedRoute: ActivatedRoute

  ) {

    this.routeEvent(this.router);
  }

  isVertical = false;
  public innerWidth: any;
  proceder = false
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  hand() {

    //alert("entramos")
    if (this.registrarForm1.invalid) {
      //alert("EST EN EL IF")

      this.proceder = true;
      //let p1=document.getElementsByTagName("mat-step")[0];

      //p1.setAttribute("completed","true");


    } else {


    }


  }
  validar() {

  }


  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        //console.error(e.url)
      }
    });
  }


  ngOnInit() {
    let parametro = this.activedRoute.snapshot.params;
    for (let index = 0; index < 10; index++) {
      console.log(parametro.user)
      
    }
    if (parametro.id) {
        console.log(parametro.id)
    }

    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 728) {
      this.isVertical = true;
    }

    /* this.registrarForm=new FormGroup({
       
 
     }
 
     
     
     )*/


    this.resetForm();
    this.registrarForm1 = new FormGroup({

      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      nacionalidad: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('2020-01-01'),
      telefono: new FormControl('', Validators.required),
      estado: new FormControl('1'),
      roles: new FormControl('user'),
    }
    );


    this.validar()
    //,
    this.registrarForm2 = this.formBuilder2.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      contraseña2: ['', [Validators.required, Validators.minLength(6)]],

    }, {
      validator: this.MustMatch('contraseña', 'contraseña2')
    }

    )

  }




  x(): void {
    var today = new Date();


    var inputValue = (<HTMLInputElement>document.getElementById("fech")).value = "s";

  }

  //this.testForm.removeControl('code')
  MustMatch(controlName: string, matchingControlName: string, status?: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      const valor = formGroup.controls[status]
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        //console.log(valor.value)


      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  //
  onSubmit() {
    this.sent = true
    let atras = document.getElementById('atras')
    atras.setAttribute('disabled', 'true')

    this.habilitar = false

    this.loading = true;
    
    function myFunction() {

    }

    if (!this.registrarForm2.errors) {
      this.spinner = document.getElementById('spin')

      setTimeout(() => {
        this.spinner.style.opacity = "0"
        this.spinner.remove
        atras.setAttribute('disabled', 'false')

      }, 1480);

    } else {

      this.spinner = document.getElementById('spin')

      setTimeout(() => {
        this.spinner.style.opacity = "0"
        this.spinner.remove
      }, 1480);


    }


    this.authService.register(this.registrarForm1.value, this.registrarForm2.value).subscribe(
      data => {
        this.loading = true;
        //lds-spinner



        this.isSuccessful = true;
        this.isSignUpFailed = false;
        for (var name in this.registrarForm1.controls) {
          this.registrarForm1.controls[name].setValue('')


          this.registrarForm1.controls[name].setErrors(null);
        }
        for (var name in this.registrarForm2.controls) {
          this.registrarForm2.controls[name].setValue('')


          this.registrarForm2.controls[name].setErrors(null);
        }


        //this.router.navigate(['/login'])


        this.sent = false
      },
      err => {
        console.warn(this.registrarForm1.value)
        console.warn(this.registrarForm2.value)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.loading = !false;

        this.sent = false

      }
    );

    this.registrarForm2.reset()
    /*this.enviado = true;

    if (this.registrarForm.invalid) {
      return;

    }
    this.cargando = true;
    this.userS.registrarUsuario(this.registrarForm.value)
    .subscribe(
      res=>{
        //this.router.navigate(['/games'])
        alert("guardaddo")
      },err=>{
        console.log(err);
      })*/



  }

  resetForm(form?: NgForm) {

    if (form != null) {
      //form.reset();
    }



  }

}
