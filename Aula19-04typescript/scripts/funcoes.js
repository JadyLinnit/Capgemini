"use strict";
function soma(n1, n2) {
    try {
        if ((n1 == 0) || (n2 == 0)) {
            throw "parâmetros não informado";
        }
        return n1 + n2;
    }
    catch (err) {
        console.log("passou");
        return err;
    }
}
// função anonima
var subtracao = function (n1, n2) {
    return n1 - n2;
};
console.log(`Subtração: ${subtracao(20, 10)}`);
// arrow funtion
var multiplicação = (n1, n2) => { return n1 * n2; };
console.log(`Multiplicação: ${multiplicação(20, 10)}`);
