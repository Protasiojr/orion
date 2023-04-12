import { Pessoa } from "./pessoa";
export class Cliente extends Pessoa {
    constructor(cpf, nome, dtNascimento, email) {
        super(cpf, nome, dtNascimento, email);
        this._idCliente = 0;
    }
    set idCliente(idCliente) {
        this._idCliente = idCliente;
    }
    get idCliente() {
        return this._idCliente;
    }
}
