import dotev from 'dotenv';
import chalk from 'chalk';
import app from "./app.js";
import conn from './db/conn.js'

dotev.config();

conn
  //.sync({ force: true })
  .sync()
  .then(() => {

  app.listen(process.env.PORT, () => {
    console.log(chalk.bgGreenBright.black(`Servidor rodando: http://localhost:${process.env.PORT}`));
  });

}).catch((err) => {
  console.log(chalk.bgRedBright.blackBright(`ERRO: ${err}`));
});