function soma(n1: number,n2: number): (number |  unknown){
    
    try{
       if((n1 == 0) || (n2 == 0)){
         throw "parâmetros não informado"
       } 
       return n1 + n2     
    }
    catch(err){
       console.log("passou")
       return err
    } 
      }

// função anonima
var subtracao = function(n1: number, n2: number): number{
   return n1 - n2
   }
console.log(`Subtração: ${subtracao (20,10)}`);

// arrow funtion
var multiplicação = (n1: number, n2: number):number =>{return n1*n2}
console.log(`Multiplicação: ${multiplicação(20,10)}`);