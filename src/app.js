import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/routes.js';

const app = express(); 

//Receber resposta pelo Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Definir pasta de arquivos
app.use(express.static(path.join(__dirname, 'public')));

//App usar rotas
app.use(router);

export default app;   