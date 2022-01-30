require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit(true);
  })
  .catch((e) => console.error(`Inicialização falhou: ${e}`));
  

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(middleware);
app.use(routes);

app.on(true, () => {
  app.listen(3000, () => {
    console.log('Acesse http://localhost:3000');
    console.log('Servidor rodando...');
  });
})