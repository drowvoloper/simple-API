const express = require('express');
require('dotenv').config({path: '.env'});
const conectarDB = require('./config/db.js');

const app = express();

conectarDB();

app.use(express.json({extended:true}));

const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => {
    console.log("Servidor funcionando en el puerto: " + port);
});

app.use('/aditivos-veganos/aditivos-veganos', require('./routes/aditivos'));
