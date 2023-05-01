export class Entrega{

    private _idEntrega: number;
    private _idEndereco: number;
    private _idPedido: number;
    // private _dataEntrega: Date;
    private _statusEntrega: String;
    private _idEntregaModo: number;

    constructor(idEndereco:number, idPedido:number,idEntregaModo:number){
        this._idEntrega = 0;
        this._idEndereco = idEndereco;
        this._idPedido = idPedido;
    //    this._dataEntrega = null;
        this._statusEntrega = "EM PREPARO";
        this._idEntregaModo = idEntregaModo;
    }

    set idEntrega(idEntrega:number){
        this.idEntrega = idEntrega;
    }
    get idEntrega():number{
        return this.idEntrega;
    }
    set idEndereco(idEndereco:number){
        this._idEndereco = idEndereco;
    }
    get idEndereco():number{
        return this._idEndereco;
    }
    set idPedido(idPedido:number){
        this.idPedido = idPedido
    }
    get idPedido():number{
        return this._idPedido;
    }
    // set dataEntrega(dataEntrega){
    //     this._dataEntrega = dataEntrega;
    // }
    // get dataEntrega():Date{
    //     return this._dataEntrega;
    // }
    set statusEntrega(statusEntrega:String){
        this._statusEntrega = statusEntrega;
    }
    get statusEntrega():String{
        return this._statusEntrega;
    }
    set idEntregaModo(idEntregaModo:number){
        this._idEntregaModo = idEntregaModo;
    }
    get idEnregaModo():number{
        return this._idEntregaModo;
    }
}