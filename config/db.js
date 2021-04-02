const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Conectada a la base de datos correctamente");
    } catch (e) {
        console.log(e);
        process.exit(1); // detiene la app
    }
};

module.exports = conectarDB;
