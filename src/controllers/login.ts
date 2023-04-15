import { DBLogin } from "../db/dbLogin.js"

const login = new DBLogin();
const form = document.querySelector('.form');
form?.addEventListener ('submit', event => {
    event.preventDefault();
    login.adiciona();
})