class Pessoa {
    id: number;
    nome: string;
    fone: string;
    email: string;

    constructor(id:number,nome:string,fone:string,email:string){

        this.id = id;
        this.nome= nome;
        this.fone= fone;
        this.email= email;
    }
    display(): void{
        console.log(`
            Id: ${this.id} 
            Nome: ${this.nome} 
            Fone: ${this.fone} 
            Email: ${this.email}`)

    }
}
    let ps = new Pessoa(10, 'Ana','84343434','ana@email.com')
    ps.display()