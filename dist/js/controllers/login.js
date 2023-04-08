"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbLogin_1 = require("../db/dbLogin");
const dbLogin = new dbLogin_1.DBLogin();
const form = document.querySelector('.form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    dbLogin.adiciona();
});
