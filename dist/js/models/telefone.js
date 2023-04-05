"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
class Telefone {
    constructor(_ddd, _numero, _tipo) {
        this._ddd = _ddd;
        this._numero = _numero;
        this._tipo = _tipo;
        this._idTelefone = 0;
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
exports.Telefone = Telefone;
