"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Produto_1 = __importDefault(require("./Produto"));
let feijao;
feijao = new Produto_1.default('Feijão preto', 5, 10);
let arroz = new Produto_1.default('Arroz', 14.90, 25);
let it1 = new Item_1.default(feijao, feijao.valorUnitario, 2);
let it2 = new Item_1.default(arroz, arroz.valorUnitario, 3);
let carrinho = [it1, it2];
carrinho.push(new Item_1.default(feijao, feijao.valorUnitario, 3));
console.log(carrinho);
