import { Pessoa } from "./pessoa.js";
export class Funcionario extends Pessoa {
    constructor(_cpf, _nome, _dtNascimento, _email, ctps, ctpsEmissor, naturalidade, estadoCivil) {
        super(_cpf, _nome, _dtNascimento, _email);
        this._matricula = 0;
        this._ctps = ctps;
        this._ctpsEmissor = ctpsEmissor;
        this._naturalidade = naturalidade;
        this._estadoCivil = estadoCivil;
        this._idEndereco = 0;
    }
    set matricula(matricula) {
        this._matricula = matricula;
    }
    get matricula() {
        return this._matricula;
    }
    set cpts(cpts) {
        this._ctps = cpts;
    }
    get cpts() {
        return this._ctps;
    }
    set cptsEmissor(cptsEmissor) {
        this._ctpsEmissor = cptsEmissor;
    }
    get cptsEmissor() {
        return this._ctpsEmissor;
    }
    set naturalidade(naturalidade) {
        this._naturalidade = naturalidade;
    }
    get naturalidade() {
        return this._naturalidade;
    }
    set estadoCivil(estadoCivil) {
        this._estadoCivil = estadoCivil;
    }
    get estadoCivil() {
        return this._estadoCivil;
    }
}
