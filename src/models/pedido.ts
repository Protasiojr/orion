
export class Pedido{

    private _idPedido: number;
    private _idFuncionario: number;
    private _idCliente: number;
    private _idPagamento: number;
    private _dataPedido: Date;
    private _status: String;

    constructor(idFuncionario:number, idCliente:number,idPamento:number,dataPedido:Date,statu:String){
        this._idPedido = 0;
        this._idFuncionario = idFuncionario;
        this._idCliente = idCliente;
        this._idPagamento = idPamento;
        this._dataPedido = dataPedido;
        this._status = statu;
    }

    set idPedido(idPedido:number){
        this._idPedido = idPedido;
    }
    get idPedido():number{
        return this.idPedido;
    }
    set idFuncionario(idFuncionario:number){
        this._idFuncionario = idFuncionario;
    }
    get idFuncionario():number{
        return this._idFuncionario;
    }
    set idCliente(idCliente:number){
        this._idCliente - idCliente;
    }
    get idCliente():number{
        return this._idCliente;
    }
    set idPagamento(idPagamento:number){
        this._idPagamento = idPagamento;
    }
    get idPagamento():number{
        return this._idPagamento;
    }
    set dataPedido(dataPedito:Date){
        this._dataPedido = dataPedito;
    }
    get dataPedido():Date{
        return this._dataPedido;
    }
    set status(status:String){
        this._status = status;
    }
    get status():String{
        return this._status;
    }
    
}