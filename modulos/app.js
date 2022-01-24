const mod1 = require('./module_1');
const falaNome = require('./module_1').falaNome;
const { nome, sobrenome } = require('./module_1');
const axios = require('axios');
const { Pessoa } = require('./module_1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(res => console.log(res.data))
.catch(e => console.error(e));

const p1 = new Pessoa('Luiz');
console.log(p1);
console.log(mod1);