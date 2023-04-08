import { DBLogin } from "../db/dbLogin";

const dbLogin = new DBLogin();
const form = document.querySelector('.form');
form?.addEventListener('submit', event => {
    dbLogin.adiciona();
})