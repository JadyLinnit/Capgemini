"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaFisica extends Pessoa_1.default {
    constructor(id, nome, contato, cpf) {
        super(id, nome, contato);
        this.cpf = cpf;
    }
    display() {
        let p = super.display();
        return `${p} cpf: ${this.cpf}`;
    }
    salvar() {
        console.log("salvando");
        return true;
    }
}
let pf = new PessoaFisica(2, 'amazon', 'amazon@email.com', '10585235868');
console.log(pf.display());
