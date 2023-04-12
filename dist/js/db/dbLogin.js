export class DBLogin {
    constructor() {
        this.inputLogin = document.querySelector('#login');
        this.inputSenha = document.querySelector('#senha');
    }
    adiciona() {
        var _a;
        const texto = this.inputLogin;
        console.log(texto);
        console.log((_a = this.inputSenha) === null || _a === void 0 ? void 0 : _a.ariaValueText);
    }
}
