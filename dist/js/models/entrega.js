export class Entrega {
    constructor(idEndereco, idPedido, idEntregaModo) {
        this._idEntrega = 0;
        this._idEndereco = idEndereco;
        this._idPedido = idPedido;
        this._statusEntrega = "EM PREPARO";
        this._idEntregaModo = idEntregaModo;
    }
    set idEntrega(idEntrega) {
        this.idEntrega = idEntrega;
    }
    get idEntrega() {
        return this.idEntrega;
    }
    set idEndereco(idEndereco) {
        this._idEndereco = idEndereco;
    }
    get idEndereco() {
        return this._idEndereco;
    }
    set idPedido(idPedido) {
        this.idPedido = idPedido;
    }
    get idPedido() {
        return this._idPedido;
    }
    set statusEntrega(statusEntrega) {
        this._statusEntrega = statusEntrega;
    }
    get statusEntrega() {
        return this._statusEntrega;
    }
    set idEntregaModo(idEntregaModo) {
        this._idEntregaModo = idEntregaModo;
    }
    get idEnregaModo() {
        return this._idEntregaModo;
    }
}
