"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_cpf, _nome, _dtNascimento, _email) {
        this._cpf = _cpf;
        this._nome = _nome;
        this._dtNascimento = _dtNascimento;
        this._email = _email;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set dtNascimento(dtNascimento) {
        this._dtNascimento = dtNascimento;
    }
    get dtNascimento() {
        return this._dtNascimento;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
}
exports.Pessoa = Pessoa;
