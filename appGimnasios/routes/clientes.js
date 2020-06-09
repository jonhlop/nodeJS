const router = require('express').Router();
const moment = require('moment');

const Cliente = require('../models/cliente');

// Recupera todos los clientes y los muestra en una tabla
router.get('/', (req, res) => {
    Cliente.getAll()
        .then(rows => {
            res.render('clientes/index', { clientes: rows });
        })
        .catch(err => {
            res.send(err);
        });
});

// Otra forma para recuperar los clientes ASYNC AWAIT
router.get('/v2', async (req, res) => {
    try {
        const rows = await Cliente.getAllV2();
        res.render('clientes/index', { clientes: rows })
    } catch (err) {
        res.send(err);
    }
});

router.get('/new', (req, res) => {
    res.render('clientes/formNew');
});

// Recupera información del cliente y renderiza una vista con el detalle
router.get('/:idCliente', async (req, res) => {
    try {
        const cliente = await Cliente.getById(req.params.idCliente);
        cliente.fecha_inscripcion = moment(cliente.fecha_inscripcion).format('DD/MM/YYYY');
        res.render('clientes/detalle', { cliente });
    } catch (err) {
        res.send(err);
    }
});

router.get('/edit/:idCliente', async (req, res) => {
    try {
        const cliente = await Cliente.getById(req.params.idCliente);
        cliente.fecha_nacimiento = moment(cliente.fecha_nacimiento).format('YYYY-MM-DD');
        res.render('clientes/formEdit', { cliente });
    } catch (err) {
        res.send(err);
    }
});

// Borrar un cliente de la base de datos
router.get('/delete/:idCliente', (req, res) => {
    Cliente.deleteById(req.params.idCliente)
        .then(result => {
            res.redirect('/clientes');
        })
        .catch(err => {
            res.send(err);
        });
});

// Petición cuando hacemos SUBMIT del formulario de creación
router.post('/create', async (req, res) => {
    try {
        const result = await Cliente.create(req.body);
        res.redirect('/clientes');
    } catch (err) {
        res.send(err);
    }
});

router.post('/update', async (req, res) => {
    try {
        const result = await Cliente.updateById(req.body.idCliente, req.body);
        res.redirect('/clientes');
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;