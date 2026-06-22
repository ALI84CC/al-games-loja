import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public produtos: Produto[] = []
    
    constructor(private _produtosService: ProdutoService) {}

    ngOnInit(): void { 
      this.listarProdutos();
    }

    listarProdutos():void{
      this._produtosService.getProdutos().subscribe(
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
      );
    }
}
