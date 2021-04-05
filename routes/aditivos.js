const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const aditivoController = require('../controllers/aditivos');

// añadir aditivo
router.post('/',
    [
        check('codigo', 'El código del aditivo es necesario').not().isEmpty(),
        check('nombre', 'El nombre del aditivo es necesario').not().isEmpty(),
        check('vegano', 'Es necesario indicar si el aditivo es vegano o no').not().isEmpty()
    ],

    aditivoController.crearAditivo
);

// obtener aditivo
router.get('/', aditivoController.recogerAditivo);

module.exports = router;
