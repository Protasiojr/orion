
export class Endereco{

    private _idEndereco: number;
    private _cep: number;
    private _logradouro: String;
    private _complemento: String;
    private _bairro: String;
    private _cidade: String;
    private _estado: number;
    
    
    constructor(){
            this._idEndereco= 0;
            this._cep = 0;
            this._logradouro ="";
            this._complemento="";
            this._bairro="";
            this._cidade="";
            this._estado=0;
    }

    set idEndereco(idEndereco:number){
        this._idEndereco = idEndereco;
    }
    get idEndereco():number{
        return this._idEndereco;
    }
    set cep(cep:number){
        this._cep = cep;
    }
    get cep():number{
        return this._cep;
    }
    set logradouro(logradouro:String){
        this._logradouro = logradouro;
    }
    get logradouro():String{
        return this._logradouro;
    }
    set complemento(complemento:String){
        this._complemento = complemento;
    }
    get complemento():String{
        return this._complemento;
    }
    set bairro(bairro:String){
        this._bairro = bairro;
    }
    get bairro():String{
        return this._bairro;
    }
    set cidade(cidade:String){
        this._cidade = cidade;
    }
    get cidade():String{
        return this.cidade;
    }
    set estado(estado:number){
        this._estado = estado;
    }
    get estado():number{
        return this._estado
    }

}