import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa{

    private _idCliente: number = 0;
    
    constructor(cpf:number, 
                nome: String, 
                dtNascimento:Date, 
                email:String){
        super(cpf,nome,dtNascimento,email);
    }

    set idCliente(idCliente:number){
        this._idCliente=idCliente;
    }
    get idCliente():number{
        return this._idCliente;
    }
}