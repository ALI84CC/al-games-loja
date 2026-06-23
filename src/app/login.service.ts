import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 //metodo de verificação de existência do usuário
  mostraMenu = new Subject<boolean>()


  constructor() { }

  login(usuario:string, senha:string):void{
    if(usuario=="aluno" && senha == '1234'){
      localStorage.setItem('token','qwer1234')
      //menu fica escondido enquanto não estiver logado
      this.mostraMenu.next(true)
    }else{
      this.mostraMenu.next(false)  
    }
  }

  setMostraMenu(valor:boolean){
    this.mostraMenu.next(valor)
  }

  getMostraMenu(){
    //retorna o valor que aparece no momento do acesso, false ou true
    return this.mostraMenu.asObservable()
  }
}
