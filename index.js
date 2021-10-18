const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser')
const { dbConnection } = require('./database/config');

//rotas
const authRoutes = require("./routes/auth");

// servidor de express
const app = express();

// Banco e dados
dbConnection();

//pbody parser
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
// CORS
app.use(cors())

// Diretório Público
app.use( express.static('public') );

// Leitura do body
app.use( express.json() );

// Rotas
app.use("/api", authRoutes);




app.listen( process.env.PORT, () => {
    console.log(`Servidor na porta ${ process.env.PORT }`);
});
