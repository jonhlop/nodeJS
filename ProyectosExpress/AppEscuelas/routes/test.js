// Fichero de rutas para las pruebas de MONGODB
const router = require('express').Router();

const Estudiante = require('../models/estudiante');

router.get('/insert', (req, res) => {
    // Con una instancia del modelo
    let estu = new Estudiante();
    estu.nombre = 'Mario';
    estu.apellidos = 'Girón';
    estu.edad = 33;
    estu.activo = true;
    estu.dni = '899198919Y'
    estu.save().then((nuevoEstudiante) => {
        res.json(nuevoEstudiante);
    }).catch((error) => {
        res.json(error);
    })
});

router.get('/insert_v2', async (req, res) => {
    const nuevoEstudiante = await Estudiante.create({
        nombre: 'Laura',
        apellidos: 'García',
        edad: 24,
        activo: true,
        dni: '23121212L'
    });
    res.json(nuevoEstudiante);
});

router.get('/find', (req, res) => {
    Estudiante.find()
        .then(estudiantes => {
            res.json(estudiantes);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/find_v2', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({ nombre: 'Rosa' });
        res.json(estudiantes);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/find_v3', async (req, res) => {
    const estudiantes = await Estudiante.find({
        edad: { $gt: 18 },
        activo: true
    });
    res.json(estudiantes);
});

router.get('/borrar', async (req, res) => {
    const estudiante = await Estudiante.findByIdAndRemove('5ede181483a80e22cd324457');
    res.json(estudiante);
});

router.get('/update', async (req, res) => {
    const estudiante = await Estudiante.findByIdAndUpdate('5ede14671f7b97215609370b', {
        nombre: "Mario",
        apellidos: "Girón",
        edad: 12,
        activo: true,
        dni: "899198919Y"
    }, { new: true });
    res.json(estudiante);
});

module.exports = router;