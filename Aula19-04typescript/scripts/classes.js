"use strict";
class Pessoa {
    constructor(id, nome, fone, email) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }
    display() {
        console.log(`
            Id: ${this.id} 
            Nome: ${this.nome} 
            Fone: ${this.fone} 
            Email: ${this.email}`);
    }
}
let ps = new Pessoa(10, 'Ana', '84343434', 'ana@email.com');
ps.display();
