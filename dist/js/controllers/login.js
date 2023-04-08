"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbLogin_js_1 = require("../db/dbLogin.js");
const login = new dbLogin_js_1.DBLogin();
const form = document.querySelector('.form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    event.preventDefault();
    login.adiciona();
});
