import { Sequelize } from 'sequelize';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.BD, 'root','', {
    host: process.env.HOST,
    dialect: 'mysql'
});

try { 
    
    sequelize.authenticate();
    console.log(chalk.bgGreenBright.blackBright('Conectado com sucesso!'));

} catch (error) {
    console.log(chalk.bgRedBright.black(`Não foi possível conectar: ${error}`));
}

export default sequelize;