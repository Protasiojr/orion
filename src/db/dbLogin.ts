export class DBLogin{
    private inputLogin;
    private inputSenha;

    constructor(){
        this.inputLogin = document.querySelector('#login');
        this.inputSenha = document.querySelector('#senha');
    }

    adiciona (){
        console.log(this.inputLogin);
        console.log(this.inputSenha);
    }
}