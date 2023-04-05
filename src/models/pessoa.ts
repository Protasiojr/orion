export class Pessoa{
    
    constructor(protected _cpf:number, 
                protected _nome: String, 
                protected _dtNascimento:Date, 
                protected _email:String){}

    set cpf(cpf:number){
        this._cpf = cpf;
    }
    get cpf():number{
        return this._cpf;
    }
    set nome(nome:String){
        this._nome=nome;
    }
    get nome():String{
        return this._nome;
    }
    set dtNascimento(dtNascimento:Date){
        this._dtNascimento=dtNascimento;
    }
    get dtNascimento():Date{
        return this._dtNascimento;
    }
    set email(email:String){
        this._email = email;
    }
    get email():String{
        return this._email;
    }

}