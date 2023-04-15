export class Usuario {
    constructor() {
        this._login = "";
        this._senha = "";
    }
    set login(login) {
        this._login = login;
    }
    get login() {
        return this._login;
    }
    set senha(senha) {
        this._senha = senha;
    }
    get senha() {
        return this._senha;
    }
}
