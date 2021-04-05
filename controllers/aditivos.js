const Aditivo = require('../models/aditivos');
const { validationResult } = require('express-validator');

exports.crearAditivo = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        const aditivo = new Aditivo(req.body);
        await aditivo.save();
        res.json({ aditivo });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.recogerAditivo = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        const aditivos = await Aditivo.find();
        res.json({ aditivos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
