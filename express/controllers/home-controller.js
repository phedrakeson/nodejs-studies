exports.paginaInicial = (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
}

exports.trataFormulario = (req, res) => {
  res.send('Sou sua nova rota!')
}