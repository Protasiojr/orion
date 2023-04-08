"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBLogin = void 0;
class DBLogin {
    constructor() {
        this.inputLogin = document.querySelector('#login');
        this.inputSenha = document.querySelector('#senha');
    }
    adiciona() {
        console.log(this.inputLogin);
        console.log(this.inputSenha);
    }
}
exports.DBLogin = DBLogin;
