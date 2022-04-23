import Item from "./Item";
import Produto from "./Produto";
import Carrinho from "./Carrinho"

let feijao: Produto;
feijao = new Produto('Feijão preto',5, 10);

let arroz = new Produto('Arroz',14.90, 25);

let it1: Item = new Item(feijao, feijao.valorUnitario, 2);
let it2 = new Item(arroz, arroz.valorUnitario, 3);

let carrinho:Item[] = [it1, it2]

let c1: Carrinho;
c1 = new Carrinho('20/04/2022','João')
c1.add(it1);
c1.add(it2);
console.log(c1)

c1.remove(it1);
console.log(c1)

console.log(c1.itens[0].produto.descricao)