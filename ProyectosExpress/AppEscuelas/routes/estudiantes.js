const router = require('express').Router();

const Estudiante = require('../models/estudiante');

router.get('/', async (req, res) => {
    const estudiantes = await Estudiante.find();
    res.render('estudiantes/index', { estudiantes });
});

router.get('/new', (req, res) => {
    res.render('estudiantes/formNew');
});

router.post('/create', async (req, res) => {
    await Estudiante.create(req.body);
    res.redirect('/estudiantes');
});

module.exports = router;