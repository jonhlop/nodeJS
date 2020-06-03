const router = require('express').Router();

const Cliente = require('../models/clientes')

router.get('/', (req, res) => {
    Cliente.getAll()
        .then(rows => {
            res.render('clientes/index', {
                clientes: rows
            })
        })
        .catch((err) => {
            res.send(err)
        });
   
});

router.get('/new', (req, res) => {
    res.render('clientes/formNew');
});

router.get('/:idCliente', (req, res) => {
    res.send('Estoy en /clientes/' + req.params.idCliente);
});

router.get('/edit/:idCliente', (req, res) => {
    res.send('Estoy en /clientes/edit/' + req.params.idCliente);
});

router.get('/delete/:idCliente', (req, res) => {
    res.send('Estoy en /clientes/delete/' + req.params.idCliente);
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('Estoy en /clientes/create');
});

router.post('/update', (req, res) => {
    console.log(req.body);
    res.send('Estoy en /clientes/update');
});

module.exports = router;