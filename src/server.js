const dotev = require('dotenv');
const chalk = require('chalk');
const app = require("./app.js");
const conn = require('./db/conn.js');
const Product = require('./models/Product.js');

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