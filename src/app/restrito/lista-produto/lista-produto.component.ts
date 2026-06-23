import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit{
  public produtos: Produto[] =[]

  constructor(private _produtoService:ProdutoService, private _router: Router){}

  ngOnInit(): void {
    this.listarProdutos()
  }
   listarProdutos():void{
      this._produtoService.getProdutos().subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
           return new Produto(
             item.id,
             item.nome,
             item.descricao,
             item.foto,
             item.preco,
           )
          });
        }
      )
    }

    excluir(id: any): void{
      this._produtoService.removerProduto(id).subscribe(
        ()=>{
          alert("Produto excluído com sucesso!");
          this.listarProdutos();
        },
        err =>{alert('Erro ao excluir')}

    )
     this._router.navigate(["/restrito/lista"])
  }
  }
