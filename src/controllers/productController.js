const Product = require("../models/Product.js");
const chalk = require("chalk");

const homeRender = (req, res) => {
    res.render('pages/home')
}

const create = async (req, res) => {
    
    try {
        
        const product = {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        }
    
        await Product.create(product);

        req.flash('message', 'Produto criado com sucesso!');
        
        req.session.save(() => {
            res.redirect('/');
        });        

    } catch (error) {
        console.log(chalk.bgRedBright.black(`Aconteceu um erro: ${error}`));
    }

}

const listRender = async (req, res) => {
    const products = await Product.findAll();
    res.render('pages/listar', { products })
}

const pageEdit = async (req, res) => {
    const id = req.params.id;
    
    try {        

        const product = await Product.findOne({
            where: {
                id: id
            },
            raw: true
        })
        
        res.render('pages/edit', { product })

    } catch (error) {
        console.log(chalk.bgRedBright.black(`Aconteceu um erro: ${error}`));
    }

}

const edit = async (req, res) => {
    const id = req.body.id;

    const product = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    }

    try {
        
        await Product.update(product, {
            where: {
                id: id
            }
        });

        req.flash('message', 'Produto editado com sucesso!');

        req.session.save(() => {
            res.redirect('/list');
        });

    } catch (error) {
        console.log(chalk.bgRedBright.black(`Aconteceu um erro: ${error}`));
    }

}

const remove = async (req, res) => {
    const id = req.body.id;

    try {

        await Product.destroy({
            where: {
                id: id
            }
        });

        req.flash('message', 'Produto removido com sucesso!');

        req.session.save(() => {
            res.redirect('/list');
        });           
        
    } catch (error) {
        console.log(chalk.bgRedBright.black(`Aconteceu um erro: ${error}`));
    }
}

module.exports = {
    homeRender,
    listRender,
    create,
    pageEdit,
    edit,
    remove 
}