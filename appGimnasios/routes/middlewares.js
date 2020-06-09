const jwt = require('jsonwebtoken');
const moment = require('moment');

const Usuario = require('../models/usuario');

const mainRedirect = (req, res, next) => {
    if (req.url === '/') {
        res.redirect('/clientes');
    } else {
        next();
    }
};

// Comprueba si el token que recibimos en la cabecera User-Token cumple con los filtros
const checkToken = (req, res, next) => {
    /* console.log(req.headers); */
    // Comprobar si el token viene en la cabecera
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir el token dentro de la cabecera User-Token' });
    }

    // Comprobar si el token es correcto
    const userToken = req.headers['user-token'];
    let payload = {};
    try {
        payload = jwt.verify(userToken, process.env.SECRET_KEY);
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' });
    }

    // Compruebo si el token está caducado
    const fechaActual = moment().unix();
    if (fechaActual > payload.expiredAt) {
        return res.json({ error: 'El token incluido está caducado' });
    }

    // Incluyo los datos desencriptados del token dentro de la petición
    req.payload = payload;

    next();
}

const isAdmin = async (req, res, next) => {
    const usuario = await Usuario.getById(req.payload.userId);
    console.log(usuario);
    if (!usuario || usuario.role !== 'ADMIN') {
        return res.json({ error: 'El acceso a esta ruta solo es para ADMINs' });
    }
    next();
}

module.exports = {
    mainRedirect, checkToken, isAdmin
}