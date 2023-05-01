import { Usuario } from '../models/usuario.js';
export class DBLogin extends Usuario {
    constructor() {
        super();
        this.inputLogin = document.querySelector('#login');
        this.inputSenha = document.querySelector('#senha');
    }
    adiciona() {
        this.login = this.inputLogin.value;
        this.senha = this.inputSenha.value;
        console.log(this.login);
        console.log(this.senha);
        window.location.href = "../dist/index.html";
    }
}
