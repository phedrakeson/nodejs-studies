exports.paginaInicial = (req, res) => {
  res.render('index');
}

exports.trataFormulario = (req, res) => {
  res.send('Sou sua nova rota!')
}