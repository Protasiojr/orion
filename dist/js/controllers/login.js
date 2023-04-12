import { DBLogin } from "../db/dbLogin.js";
const login = new DBLogin();
const form = document.querySelector('.form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    event.preventDefault();
    login.adiciona();
});
