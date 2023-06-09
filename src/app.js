const express = require('express');
const path = require('path');
const router = require('./routes/routes.js');
const session = require('express-session');
const flash = require('express-flash');

const app = express(); 

//Receber resposta pelo Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Definir pasta de arquivos
app.use(express.static(path.join(__dirname, 'public')));

//middleware de sessão
app.use(session({
  name: "session",
  secret: "nosso_secret",
  resave: false,
  saveUninitialized: false
}));

//flash messages
app.use(flash());

app.use((req, res, next) => {
  res.locals.session = req.session;

  next();
});

//App usar rotas
app.use(router);

module.exports = app;   