// INSTALAÇÃO BIBLIOTCAS/MODULOS

const express = require("express");
const app = express();
const database = require("./db/db");
const routes = require("./routes/routes");
const jwt = require("jsonwebtoken");

// CODIFICAÇÃO JSON 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROTA PRINCIPAL
app.use("/", routes);


try {
    database.sync().then(() => {

    })
} catch (erro) {
    console.log("Falha ao sincronizar com o banco de dados.", erro);
}


app.listen(3306);