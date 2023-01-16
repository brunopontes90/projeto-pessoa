const express = require('express');
const app = express();
const mysql = require('mysql2');
const env = require('dotenv').config();

const cors = require('cors');

const db = mysql.createConnection({
    host: `${process.env.MYSQL_DOCKER_HOST}`,
    user: `${process.env.MYSQL_DOCKER_USER}`,
    password: `${process.env.MYSQL_DOCKER_PASS}`,
    database: `${process.env.MYSQL_DOCKER_DATABASE}`,
    port: `${process.env.MYSQL_DOCKER_PORT}`
});

app.use(cors());
app.use(express.json());

db.connect(function (err) {
    if (err) {
        console.log(`Erro aqui: ${err}`);
    } else {
        console.log('Conectado ao banco de dados');
    }
})

app.get('/', (req, res) => {

    let SQl = "SELECT * FROM pessoa";
    db.query(SQl, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/register', (req, res) => {

    const { nome } = req.body;
    const { idade } = req.body;
    const { cpf } = req.body;
    const { endereco } = req.body;
    const { numero_casa } = req.body;
    const { complemento } = req.body;
    const { sexo } = req.body;
    const { isAdmin } = req.body;

    let SQl = "INSERT INTO pessoa (nome, idade, cpf, endereco, numero_casa, complemento, sexo, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ";

    db.query(SQl, [nome, idade, cpf, endereco, numero_casa, complemento, sexo, isAdmin], (err, result) => {
        console.log(err);
    });
});

app.put('/edit', (req, res) => {

    const { id } = req.body;
    const { nome } = req.body;
    const { idade } = req.body;
    const { cpf } = req.body;
    const { endereco } = req.body;
    const { numero_casa } = req.body;
    const { complemento } = req.body;
    const { sexo } = req.body;
    const { isAdmin } = req.body;

    let SQl = "UPDATE pessoa SET nome = ?, idade = ?, cpf = ?, endereco = ?, numero_casa = ?, complemento = ?, sexo = ?, isAdmin = ? WHERE id = ?";

    db.query(SQl,
        [
            nome,
            idade,
            cpf,
            endereco,
            numero_casa,
            complemento,
            sexo,
            isAdmin,
            id
        ], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    let SQl = "DELETE FROM pessoa WHERE id = ?";

    db.query(SQl, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.listen(3001, () => {
    console.log('Rodando server');
})