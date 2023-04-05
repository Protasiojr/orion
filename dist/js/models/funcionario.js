"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("./pessoa");
class Funcionario extends pessoa_1.Pessoa {
    constructor(cpf, nome, dtNascimento, email, ctps, ctpsEmissor, naturalidade, estadoCivil) {
        super(cpf, nome, dtNascimento, email);
        this.ctps = ctps;
        this.ctpsEmissor = ctpsEmissor;
        this.naturalidade = naturalidade;
        this.estadoCivil = estadoCivil;
    }
}
exports.Funcionario = Funcionario;
