
export class Pagamento{

    private _idPagamento:number;
    private _valor:number;
    private _desconto:number;
    private _status:String;
  //  private _dataPagamento:Date;
    private _pagamentoModo:number;

    constructor(valor:number,desconto:number,status:String,pagamentoModo:number){
        this._idPagamento = 0;
        this._valor = valor;
        this._desconto = desconto;
        this._status = status;
    //    this._dataPagamento = null;
        this._pagamentoModo = pagamentoModo;
    }
    set idPagamento (idPagamento:number){
        this._idPagamento = idPagamento;
    }
    get idPagamento():number{
        return this._idPagamento
    }
    set valor(valor:number){
        this._valor = valor;
    }
    get valor():number{
        return this._valor;
    }
    set desconto(desconto:number){
        this._desconto = desconto;
    }
    get desconto():number{
        return this._desconto;
    }
    set status(status:String){
        this._status = status;
    }
    get status():String{
        return this._status;
    }
    // set dataPagamento(dataPagamento:Date){
    //     this._dataPagamento = dataPagamento;
    // }
    // get dataPagamento():Date{
    //     this._dataPagamento;
    // }
    set pagamentoModo(pagamentoModo:number){
        this._pagamentoModo = pagamentoModo;
    }
    get pagamentoModo():number{
        return this._pagamentoModo;
    }
}