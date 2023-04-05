"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("./pessoa");
class Funcionario extends pessoa_1.Pessoa {
    constructor(_cpf, _nome, _dtNascimento, _email, _ctps, _ctpsEmissor, _naturalidade, _estadoCivil) {
        super(_cpf, _nome, _dtNascimento, _email);
        this._ctps = _ctps;
        this._ctpsEmissor = _ctpsEmissor;
        this._naturalidade = _naturalidade;
        this._estadoCivil = _estadoCivil;
        this._matricula = 0;
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
exports.Funcionario = Funcionario;
