"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor(cpf, nome, dtNascimento, email) {
        super(cpf, nome, dtNascimento, email);
    }
}
exports.Cliente = Cliente;
