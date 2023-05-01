import {Usuario} from '../models/usuario.js'

export class DBLogin extends Usuario{
    private inputLogin: HTMLInputElement;
    private inputSenha: HTMLInputElement;
    
    constructor(){
        super();
        this.inputLogin = document.querySelector('#login') as HTMLInputElement;
        this.inputSenha = document.querySelector('#senha') as HTMLInputElement;
       }
       
    adiciona():void{
        this.login = this.inputLogin.value;
        this.senha = this.inputSenha.value;
        console.log(this.login);
        console.log(this.senha);
        window.location.href = "../dist/index.html";            
    }
}