export class Funcionario {

    id?: any;
    nome: string;
    contribuicao?: any;
    bebida?: any;
    comida?: any;

    constructor(id: any, nome: string, contribuicao: any, bebida: any, comida: any) {
        this.id = id;
        this.nome = nome;
        this.contribuicao = contribuicao;
        this.bebida = bebida;
        this.comida = comida;
    }

}
