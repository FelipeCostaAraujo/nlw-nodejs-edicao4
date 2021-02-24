<div align="center">
    <img src=".github/nlw4.jpg" alt="Next Level Week #4">
</div>

<div align="center">
    <img src="https://img.shields.io/badge/-Typescript-blue?style=for-the-badge" alt="Typescript">
    <img src="https://img.shields.io/badge/-Node.js-orange?style=for-the-badge" alt="Node.js">
    <img src="https://img.shields.io/badge/-Express-white?style=for-the-badge" alt="Express">
</div>

<h4 align="center">
</h4>

<div align="center">
    <h2>
    <a href="#-o-projeto">O projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#">Iniciando a jornada</a>
    </h2>
</div>

# O projeto

Durante esta **Next Level Week** foi desenvolvida uma API Restful para Net Promoter Score.

> O **Net Promoter Score** é uma metodologia de satisfação de clientes desenvolvida para avaliar o grau de **fidelidade dos clientes** de qualquer perfil de empresa.

# Iniciando a jornada

Se você estiver iniciando a jornada e não tem muita familiariadade com alguns conceitos, esse guia definitivamente irá lhe ajudar: [Guia Next Level Week #4](https://www.notion.so/Next-Level-Week-4-Node-js-67981103adbb4f229187c802bcd0d787)

# 📝 Sobre

As aulas foram ministradas pela **[Daniele Leão](https://github.com/danileao)** instrutora da [Rocketseat](https://rocketseat.com.br/)


Instalação de dependencias e iniciar o projeto.

```sh
$ cd nlw-nodejs-edicao4
$ npm install 
- Or
$ yarn

Run Project production DATABASE -
$ npm start 
- Or 
yarn start

Run Development DATABASE
$ yarn dev
- Or
$ npm run dev
```
# Run migrations
```sh
$ yarn typeorm migration:run
```

# Run migrations rollback
```sh
$ yarn knex:migration:revert
```

# Create migrations
```sh
$ yarn typeorm migration:create -n MigrationsName
```

##  Info:
- Autor - Felipe Araujo:
- Date February/2021:

----
License
----
MIT