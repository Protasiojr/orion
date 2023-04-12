export class Telefone {
    constructor(ddd, numero, tipo) {
        this._idTelefone = 0;
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }
    set idTelefone(idTelefone) {
        this._idTelefone = idTelefone;
    }
    get idTelefone() {
        return this._idTelefone;
    }
    set ddd(ddd) {
        this._ddd = ddd;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get ddd() {
        return this._ddd;
    }
    get numero() {
        return this._numero;
    }
    get tipo() {
        return this._tipo;
    }
}
