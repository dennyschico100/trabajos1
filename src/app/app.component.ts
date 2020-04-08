import { Component, OnInit, HostListener } from '@angular/core';
import { TokenStorageService } from './Servicios/token-storage.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  username: string;
  title = 'trabajos-cliente';

  constructor(private tokenStorageService: TokenStorageService
  ) { }
  public innerWidth: any;
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {


    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 728){
      let nav= document.getElementById('menu')
      let classesToAdd = [ 'mt-0', 'navbar' ];
      
    nav.classList.add('navbar');
          
      //nav.classList.add('navbar');
      
        
      let ul =document.querySelector('.list-1')
      ul.classList.add('navbar-nav')
      



      
      

    }


    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard=this.roles.includes('ROLE_USER')
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR')
      this.username = user.email;
      console.error(this.tokenStorageService.getToken())

    }
  }


  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
