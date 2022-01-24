const nome = 'Gabriel';
const sobrenome = 'Duarte';

const falaNome = () =>  `${nome} ${sobrenome}`;

module.exports.nome = 'Paulo';

exports.nome = 'Gabe'
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(module.exports)

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

module.exports = {nome, sobrenome, Pessoa};