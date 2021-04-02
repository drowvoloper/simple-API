const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Aditivo = require('../models/aditivos');

// añadir aditivo
router.post('/',
    [
        check('codigo', 'El código del aditivo es necesario').not().isEmpty(),
        check('nombre', 'El nombre del aditivo es necesario').not().isEmpty(),
        check('vegano', 'Es necesario indicar si el aditivo es vegano o no').not().isEmpty()
    ],

    async(req, res) => {
        try {
            const aditivo = new Aditivo(req.body);
            await aditivo.save();
            res.json({aditivo});
        } catch (error) {
            console.log(error);
            res.status(500).send('Vaya, parece que hubo un error');
        }
    }
);

// obtener aditivo
router.get('/',
    async(req, res) => {
        try {
            const aditivos = await Aditivo.find();
            res.json({aditivos});
        } catch (error) {
            console.log(error);
            res.status(500).send('Vaya, parece que hubo un error');
        }
    }
);

module.exports = router;
