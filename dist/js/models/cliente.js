import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";
export class Cliente extends Pessoa {
    constructor(cpf, nome, dtNascimento, email) {
        super(cpf, nome, dtNascimento, email);
        this._idCliente = 0;
        this._endereco = new Endereco();
    }
    set idCliente(idCliente) {
        this._idCliente = idCliente;
    }
    get idCliente() {
        return this._idCliente;
    }
}
