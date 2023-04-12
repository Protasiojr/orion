export class Pessoa {
    constructor(cpf, nome, dtNascimento, email) {
        this._cpf = cpf;
        this._nome = nome;
        this._dtNascimento = dtNascimento;
        this._email = email;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set dtNascimento(dtNascimento) {
        this._dtNascimento = dtNascimento;
    }
    get dtNascimento() {
        return this._dtNascimento;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
}
