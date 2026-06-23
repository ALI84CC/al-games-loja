import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'AL Games';
  //carrega a página mostrando o menu, mesmo não logado
  mostrarMenu:boolean = true;

  constructor(private _loginService: LoginService){}

  ngOnInit(): void {
    //responsavel pela verificação se está logado ou não
    this._loginService.getMostraMenu().subscribe(
      res => {
        this.mostrarMenu = res
      }
    )
  }

  ngOnDestroy(){
    localStorage.clear()
  }
}
