export class Pedido {
    constructor(idFuncionario, idCliente, idPamento, dataPedido, statu) {
        this._idPedido = 0;
        this._idFuncionario = idFuncionario;
        this._idCliente = idCliente;
        this._idPagamento = idPamento;
        this._dataPedido = dataPedido;
        this._status = statu;
    }
    set idPedido(idPedido) {
        this._idPedido = idPedido;
    }
    get idPedido() {
        return this.idPedido;
    }
    set idFuncionario(idFuncionario) {
        this._idFuncionario = idFuncionario;
    }
    get idFuncionario() {
        return this._idFuncionario;
    }
    set idCliente(idCliente) {
        this._idCliente - idCliente;
    }
    get idCliente() {
        return this._idCliente;
    }
    set idPagamento(idPagamento) {
        this._idPagamento = idPagamento;
    }
    get idPagamento() {
        return this._idPagamento;
    }
    set dataPedido(dataPedito) {
        this._dataPedido = dataPedito;
    }
    get dataPedido() {
        return this._dataPedido;
    }
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
}
