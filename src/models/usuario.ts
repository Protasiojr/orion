
export class Usuario {

    private _login:String;
    private _senha:String;

    constructor(){
        this._login = "";
        this._senha = "";
    }

    set login(login:String){
        this._login = login;
    }
    get login():String{
        return this._login;
    }
    set senha(senha:String){
        this._senha = senha;
    }
    get senha():String{
        return this._senha;
    }

}