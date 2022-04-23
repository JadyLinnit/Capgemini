"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(data, cliente) {
        this.data = data;
        this.cliente = cliente;
    }
    salvar() {
        console.log('Venda cadastrada com sucesso');
        return true;
    }
    alterar(objeto) {
        console.log('Venda alterada com sucesso');
        return true;
    }
    excluir(id) {
        console.log('Venda excluida com sucesso');
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorId(id) {
        return 'maria';
    }
}
let v1;
v1 = new Venda('20/04/2022', 'Maria');
v1.salvar();
v1.alterar('maria');
