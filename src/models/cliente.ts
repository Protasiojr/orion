import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa{

    constructor(cpf:number, 
                nome: String, 
                dtNascimento:Date, 
                email:String){
        super(cpf,nome,dtNascimento,email);
    }
}