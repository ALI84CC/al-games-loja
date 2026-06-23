import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-menu-registro',
  templateUrl: './menu-registro.component.html',
  styleUrls: ['./menu-registro.component.css']
})
export class MenuRegistroComponent {
     constructor( private _router: Router,
     private _loginService:LoginService){}

      logOut(){
        localStorage.clear()
        this._loginService.setMostraMenu(true)
        this._router.navigate(['/login'])
      }
    
}
