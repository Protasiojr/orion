import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa{

    private _idCliente: number;
    private _idEndereco: number;

    constructor(cpf:number, nome: String,dtNascimento:Date,email:String){
        super(cpf,nome,dtNascimento,email);

        this._idCliente=0;
        this._idEndereco = 0;
    }

    set idCliente(idCliente:number){
        this._idCliente=idCliente;
    }
    get idCliente():number{
        return this._idCliente;
    }
}