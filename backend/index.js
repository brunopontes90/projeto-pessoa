const express = require('express');
const app = express();
const mysql = require('mysql');
const env = require('dotenv').config();

const db = mysql.createConnection({
    host: `${process.env.MYSQL_DOCKER_HOST}`,
    user: `${process.env.MYSQL_DOCKER_USER}`,
    pass: `${process.env.MYSQL_DOCKER_PASS}`,
    database: `${process.env.MYSQL_DOCKER_DATABASE}`,
    port: `${process.env.MYSQL_DOCKER_PORT}`
});

db.connect(function (err) {
    if (err) {
        console.log(`Erro aqui: ${err}`);
    } else {
        console.log('Conectado ao banco de dados');
    }
})

app.get('/', (req, res) => {
    res.send("Ola")
    //let SQl = "SELECT * FROM pessoa";
    //let SQl = "INSERT INTO pessoa ('nome', 'idade', 'cpf','endereco','numero_casa','complemento','sexo') VALUES ('Bruno Pontes', 32, 38866495808, 'Rua Thomaz de Araujo', 316, 'Casa 1', 'M') ";

    /*db.query(SQl, (err, result) => {
        console.log(err);
    });*/
});

app.listen(3001, () => {
    console.log('Rodando server');
})