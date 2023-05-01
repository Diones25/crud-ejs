
![img](./src/public/img/node.png)
## CRUD de produto com Node/Express e EJS

Crud simples de produtos criado com express e para compilar o HTML foi utilizado o EJS.

## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  npm install 
  npm run start
```

## Documentação da API

#### Redenzira página home de cadastro

```
  GET /
```
*Sem parâmetros
##### Essa rota redenriza a página de cadastro de produtos



#### Redenzira página listar produtos

```
  GET /list
```
*Sem parâmetros
##### Essa rota redenriza a página de listar produtos

#### Rota de cadastro de produtos

```
  POST /add
```
*Sem parâmetros

#### Retorna um JSON

```
  Deve retornar um JSON com os dados do produto cadastrado, como no exemplo abaixo
{
    "name": "produto01",
    "price": 3.50,
    "quantity": 2
}
````

#### Redenzira página editar produtos

```
  GET /edit/:id
```
*`id` do produto
##### Essa rota redenriza a página de editar produtos com parâmetro id na url do produto


#### Rota de edição de produtos

```
  POST /edit
```
*Sem parâmetros \
** No modelo monolito não se usa o verbo http PUT para editar um produto e sim o verbo POST 

#### Retorna um JSON

```
  Deve retornar um JSON com os dados do produto editado, como no exemplo abaixo
{
    "name": "produto01",
    "price": 3.50,
    "quantity": 2
}
````

#### Rota de remoção de produtos

```
  POST /delete
```
*Sem parâmetros \
** No modelo monolito não se usa o verbo http DELETE para deletar um produto e sim o verbo POST 

#### Retorna um JSON

```
  Deve retornar um JSON com os dados do produto editado, como no exemplo abaixo
{
    "name": "produto01",
    "price": 3.50,
    "quantity": 2
}
````

## Stack utilizada

**Back-end:** Node, Express \
**Front-end:** EJS, Bootstrap

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React, Sequelize ORM, Mongoose ORM...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)

