export class Pessoa{

    protected _cpf:number;
    protected _nome: String; 
    protected _dtNascimento:Date; 
    protected _email:String;
    
    constructor(cpf:number, nome:String, dtNascimento:Date,email:String){
        this._cpf = cpf;
        this._nome = nome;
        this._dtNascimento = dtNascimento;
        this._email=email;
    }

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