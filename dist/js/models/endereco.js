export class Endereco {
    constructor() {
        this._idEndereco = 0;
        this._cep = 0;
        this._logradouro = "";
        this._complemento = "";
        this._bairro = "";
        this._cidade = "";
        this._estado = 0;
    }
    set idEndereco(idEndereco) {
        this._idEndereco = idEndereco;
    }
    get idEndereco() {
        return this._idEndereco;
    }
    set cep(cep) {
        this._cep = cep;
    }
    get cep() {
        return this._cep;
    }
    set logradouro(logradouro) {
        this._logradouro = logradouro;
    }
    get logradouro() {
        return this._logradouro;
    }
    set complemento(complemento) {
        this._complemento = complemento;
    }
    get complemento() {
        return this._complemento;
    }
    set bairro(bairro) {
        this._bairro = bairro;
    }
    get bairro() {
        return this._bairro;
    }
    set cidade(cidade) {
        this._cidade = cidade;
    }
    get cidade() {
        return this.cidade;
    }
    set estado(estado) {
        this._estado = estado;
    }
    get estado() {
        return this._estado;
    }
}
