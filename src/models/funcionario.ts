import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa{

    private _matricula:number = 0;
    private _ctps:number;
    private _ctpsEmissor:String;
    private _naturalidade:String;
    private _estadoCivil:String;

    constructor(_cpf:number,_nome: String,_dtNascimento:Date,_email:String,
             ctps:number,ctpsEmissor:String,naturalidade:String,estadoCivil:String){
                super(_cpf,_nome,_dtNascimento,_email);
                this._ctps = ctps;
                this._ctpsEmissor = ctpsEmissor;
                this._naturalidade = naturalidade;
                this._estadoCivil = estadoCivil;              
    }

    set matricula(matricula:number){
        this._matricula = matricula;
    }
    get matricula():number{
        return this._matricula;
    }
    set cpts(cpts:number){
        this._ctps = cpts;
    }
    get cpts():number{
        return this._ctps;
    }
    set cptsEmissor(cptsEmissor:String){
        this._ctpsEmissor = cptsEmissor;
    }
    get cptsEmissor():String{
        return this._ctpsEmissor
    }
    set naturalidade(naturalidade:String){
        this._naturalidade = naturalidade;
    }
    get naturalidade():String{
        return this._naturalidade;
    }
    set estadoCivil(estadoCivil:String){
        this._estadoCivil = estadoCivil;
    }
    get estadoCivil():String{
        return this._estadoCivil;
    }

}