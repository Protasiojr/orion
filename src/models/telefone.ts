export class Telefone{

    private _idTelefone:number = 0;

    constructor(private _ddd:number,
                private _numero:number,
                private _tipo:String){ }

    set idTelefone(idTelefone:number){
        this._idTelefone = idTelefone;
    }
    get idTelefone():number{
        return this._idTelefone;
    }
    set ddd(ddd:number){
        this._ddd = ddd;
    }
    set numero(numero:number){
        this._numero = numero;
    }
    set tipo(tipo:String){
        this._tipo = tipo;
    }
    get ddd():number{
        return this._ddd;
    }
    get numero():number{
        return this._numero;
    }
    get tipo():String{
        return this._tipo;
    }
}