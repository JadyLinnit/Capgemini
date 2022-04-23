"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carrinho {
    constructor(data, cliente) {
        this.itens = [];
        this.data = data;
        this.cliente = cliente;
        this.finalizado = false;
    }
    add(it) {
        try {
            if (this.finalizado) {
                throw "Carrinho está finalizado";
            }
        }
        catch (err) {
            console.log(err);
        }
        this.itens.push(it);
    }
    remove(it) {
        let posicao = this.itens.indexOf(it);
        if (posicao > -1) {
            this.itens.splice(posicao, 1);
        }
    }
    getTotal() {
        let total = 0;
        for (let it of this.itens) {
            total += (it.preco * it.qtde);
        }
        return total;
    }
    finalizar() {
        this.finalizado = true;
    }
}
exports.default = Carrinho;
