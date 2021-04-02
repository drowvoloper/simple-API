const mongoose = require('mongoose');

const AditivoSchema = mongoose.Schema({
    codigo: {
        type: String,
        require: true
    }, 
    nombre: {
        type: String,
        require: true
    },
    vegano: {
        type: String,
        enum:['sí', 'no', 'puede'],
        require: true
    }
});

module.exports = mongoose.model('Aditivo', AditivoSchema);
