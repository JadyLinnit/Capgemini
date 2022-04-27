"use strict";
class Produto {
    constructor(id, descricao, preco, estoque) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }
}
class ModelProduto {
    salvar(obj) {
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback) {
        fetch('http://localhost:3000/produtos')
            .then(x => x.json())
            .then(data => callback(data));
    }
    /** 1)callback  2)async/await => promisse */
    consultarPorId(id, callback) {
        fetch(`http://localhost:3000/produtos/${id}`)
            .then(x => x.json())
            .then(data => callback(data));
    }
}
/**Controller item */
class Item {
    constructor(produto, precoItem, qtde) {
        this.produto = produto;
        this.precoItem = precoItem;
        this.qtde = qtde;
    }
}
/**Modelo Item */
class ModelItem {
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback) {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id, callback) {
        throw new Error("Method not implemented.");
    }
    salvar(it) {
        fetch("http://localhost:3000/itens", {
            method: 'POST',
            body: JSON.stringify(it),
            headers: {
                'Content-type': 'Application/json'
            }
        })
            .then(x => x.json())
            .then(data => console.log(data));
    }
}
/**Carrinho de compras */
class Carrinho {
    constructor(data, cliente) {
        this.itens = [];
        this.data = data;
        this.cliente = cliente;
        this.finalizado = false;
    }
    add(it) {
        this.itens.push(it);
    }
}
class ModelCarrinho {
    salvar(obj) {
        fetch("http://localhost:3000/carrinho", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback) {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id, callback) {
        throw new Error("Method not implemented.");
    }
}
