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
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
    get dtNascimento() {
        return this._dtNascimento;
    }
    get email() {
        return this._email;
    }
}
exports.Pessoa = Pessoa;
