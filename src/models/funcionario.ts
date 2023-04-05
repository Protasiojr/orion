import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa{

    constructor(cpf:number, 
        nome: String, 
        dtNascimento:Date, 
        email:String,
        private ctps:number,
        private ctpsEmissor:String,
        private naturalidade:String,
        private estadoCivil:String){
super(cpf,nome,dtNascimento,email);
}
}