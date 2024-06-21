const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;

// Middleware para parsear el body de las requests
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Renderiza el formulario de login desde el archivo HTML
app.get('/', (req, res) => {
    res.send("Hola server activo");
  });

// Renderiza el formulario de login desde el archivo HTML
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Maneja la lógica del login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica la contraseña
  const validPassword = '1234'; // Contraseña ficticia para verificar

  if (password === validPassword) {
    res.redirect('/welcome');
  } else {
    res.send('Contraseña incorrecta. Inténtalo de nuevo.');
  }
});

// Renderiza la página de bienvenida desde el archivo HTML
app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});