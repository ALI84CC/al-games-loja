import { Component } from '@angular/core';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  public produto: Produto = new Produto(0,"","","",0)

  constructor(private _produtoService:ProdutoService, private _router: Router){}

  cadastrar():void{

    const { id, ...dadosParaEnviar } = this.produto;

    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","","",0)
        alert("Cadastrado com sucesso!!")
        this._router.navigate(["/restrito/lista"]);
      },
      err => {
       alert("Erro ao Cadastra")
      }
    )

    this._router.navigate(["/restrito/lista"])
  }

  aoSelecionarFoto(event: any): void {
  const arquivo = event.target.files[0];
  if (arquivo) {
    // Salva apenas o nome da imagem (ex: "jogo4.png") no seu objeto
    this.produto.foto = arquivo.name; 
  }
}

  
}
