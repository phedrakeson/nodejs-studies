const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(routes);

app.listen(3000, () => {
  console.log('Acesse http://localhost:3000');
  console.log('Servidor rodando...');
});