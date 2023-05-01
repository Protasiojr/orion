export class Pagamento {
    constructor(valor, desconto, status, pagamentoModo) {
        this._idPagamento = 0;
        this._valor = valor;
        this._desconto = desconto;
        this._status = status;
        this._pagamentoModo = pagamentoModo;
    }
    set idPagamento(idPagamento) {
        this._idPagamento = idPagamento;
    }
    get idPagamento() {
        return this._idPagamento;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get valor() {
        return this._valor;
    }
    set desconto(desconto) {
        this._desconto = desconto;
    }
    get desconto() {
        return this._desconto;
    }
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
    set pagamentoModo(pagamentoModo) {
        this._pagamentoModo = pagamentoModo;
    }
    get pagamentoModo() {
        return this._pagamentoModo;
    }
}
