var a;
a = 10;
a = 'Olá';

var b = 10; 

type Contato = {
    id: number;
    nome: string;
    fone: string;
    email: string;
    ativo: boolean;
}

var ct: Contato = {id:0, nome:'', fone:'', email:'', ativo:false};
ct.id = 10;
ct.nome = 'Maria';
ct.fone = '8198746238';
ct.email= "maria@email.com";
ct.ativo= false

console.log(ct)