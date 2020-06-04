const router = require('express').Router();

const Usuario = require('../../models/usuario');

router.post('/registro', async (req, res) => {
    // TODO: encriptar la password
    // TODO: validar los campos de entrada al registro
    const result = await Usuario.create(req.body);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Registro correcto' });
    } else {
        res.json({ error: 'Error en el registro' });
    }
});

// TODO: gestión del LOGIN

module.exports = router;