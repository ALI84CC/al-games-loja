export class Produto {
  id: number = 0;
    nome: string = ''; 
    descricao: string = '';
    preco: number = 0;

    constructor(id: number, nome: string, descricao: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}