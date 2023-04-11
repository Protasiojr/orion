export class DBLogin{
    private inputLogin: string;
    private inputSenha: string;

    constructor(){
        this.inputLogin = document.querySelector('#login');
        this.inputSenha = document.querySelector('#senha');
    }

    adiciona (){
        console.log(this.inputLogin);
        console.log(this.inputSenha);
    }
}