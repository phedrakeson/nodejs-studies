const path = require('path');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

const caminhoArquivo =  path.resolve(__dirname, 'foo.json');
const pessoas = [
  { nome: 'João' },
  { nome: 'Carlos' },
  { nome: 'Julio' },
  { nome: 'Paulo' },
  { nome: 'Joana' },
]; 
const json = JSON.stringify(pessoas, '', 2);

// escrever(caminhoArquivo, json);
async function lerArquivo(caminho) {
  const arquivo = await ler(caminho);
  renderizaDados(arquivo);
  // return arquivo;
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo)

// const dadosArquivo = lerArquivo(caminhoArquivo)
//   .then(dados => console.log(dados))
//   .catch(e => console.error(e));
