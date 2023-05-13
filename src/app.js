const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');
const router = require('./routes/routes.js');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const os = require('os');

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
  saveUninitialized: false,
  store: new FileStore({
    logFn: function(){},
    path: path.join(os.tmpdir(), 'sessions')
  }),

  cookie: {
    secure: false,
    maxAge: 360000,
    expires: new Date(Date.now() + 360000),
    httpOnly: true
  }
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