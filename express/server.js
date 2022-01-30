const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Recebi o formulario')
});

app.get('/testes/:id?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`O seu ID é: ${req.params.id}`)
});

app.get('/contato', (req, res) => {
  res.send('lorem ipsum')
})

app.listen(3000, () => {
  console.log('Acesse http://localhost:3000');
  console.log('Servidor rodando...');
});