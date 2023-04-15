export class DBLogin {
    constructor() {
        this.inputLogin = document.querySelector("#login");
        this.inputSenha = document.querySelector("#senha");
    }
    adiciona() {
        var _a, _b;
        console.log((_a = this.inputLogin) === null || _a === void 0 ? void 0 : _a.value);
        console.log((_b = this.inputSenha) === null || _b === void 0 ? void 0 : _b.value);
    }
}
