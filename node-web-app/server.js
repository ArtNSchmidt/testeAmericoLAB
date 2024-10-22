// app.js
const express = require('express');
const app = express();
const port = 3000;

// Rota 1 - Página inicial
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Bem-vindo à página inicial!</h1>
        <p>Esta é a página principal da aplicação.</p>
      </body>
    </html>
  `);
});

// Rota 2 - Página sobre
app.get('/sobre', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Sobre</title>
      </head>
      <body>
        <h1>Sobre Nós</h1>
        <p>Esta página contém informações sobre a aplicação.</p>
      </body>
    </html>
  `);
});

// Rota 3 - Página de contato
app.get('/contato', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Contato</title>
      </head>
      <body>
        <h1>Fale Conosco</h1>
        <p>Entre em contato através do nosso e-mail: contato@example.com</p>
      </body>
    </html>
  `);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
