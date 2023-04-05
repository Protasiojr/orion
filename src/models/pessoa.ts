export class Pessoa{
    
    constructor(protected _cpf:number, 
                protected _nome: String, 
                protected _dtNascimento:Date, 
                protected _email:String){}

    get cpf():number{
        return this._cpf;
    }
    get nome():String{
        return this._nome;
    }
    get dtNascimento():Date{
        return this._dtNascimento;
    }
    get email():String{
        return this._email;
    }

}