export class DBLogin{
    private inputLogin;
    private inputSenha;

    constructor(){
        this.inputLogin = document.querySelector('#login');
        this.inputSenha = document.querySelector('#senha');
    }

    adiciona (){
        const texto = this.inputLogin;
        console.log(texto);
        console.log(this.inputSenha?.ariaValueText);
    }
}