import Pessoa from "./Pessoa";

class PessoaFisica extends Pessoa{
    cpf: string;
    constructor (id:number, nome:string, contato:string, cpf: string){
        super(id, nome, contato)
        this.cpf = cpf
    }

    display(): string {
        let p:string = super.display()
        return `${p} cpf: ${this.cpf}`
    }

    salvar(): boolean {
        console.log("salvando");
        return true
    }
}

let pf = new PessoaFisica(2,'amazon','amazon@email.com','10585235868')
console.log(pf.display())