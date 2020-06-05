const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const Usuario = require('../../models/usuario');

router.post('/registro', async (req, res) => {
    // TODO: validar los campos de entrada al registro

    req.body.password = bcrypt.hashSync(req.body.password, 15);

    const result = await Usuario.create(req.body);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Registro correcto' });
    } else {
        res.json({ error: 'Error en el registro' });
    }
});

router.post('/login', async (req, res) => {
    const usuario = await Usuario.getByEmail(req.body.email);
    if (usuario) {
        //Sí existe el usuario con ese email
        const iguales = bcrypt.compareSync(req.body.password, usuario.password);
        if (iguales) {
            res.json({ success: 'LOGIN CORRESTO!!', token: createToken(usuario.id) });
        } else {
            res.json({ error: 'Error en email y/o password 2' });
        }
    } else {
        // No existe el usuario con ese email
        res.json({ error: 'Error en email y/o password 1' });
    }
});

function createToken(pUserId) {
    const payload = {
        userId: pUserId,
        createdAt: moment().unix(),
        expiredAt: moment().add(15, 'minutes').unix()
    }
    return jwt.sign(payload, process.env.SECRET_KEY);
}


module.exports = router;