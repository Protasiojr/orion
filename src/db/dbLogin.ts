export class DBLogin{
    private inputLogin;
    private inputSenha;

    constructor(){
        this.inputLogin = document.querySelector("#login") as HTMLInputElement | null;
        this.inputSenha = document.querySelector("#senha") as HTMLInputElement | null;
    }

    adiciona (){
        console.log(this.inputLogin?.value);
        console.log(this.inputSenha?.value);
    }
}