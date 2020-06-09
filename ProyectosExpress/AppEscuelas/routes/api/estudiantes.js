const router = require('express').Router();

const Estudiante = require('../../models/estudiante');

router.get('/', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const estudiante = await Estudiante.create(req.body);
        res.json(estudiante);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.delete('/:idEstudiante', async (req, res) => {
    try {
        await Estudiante.findByIdAndRemove(req.params.idEstudiante);
        res.json({ success: 'Se ha borrado el estudiante' });
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.put('/:idEstudiante', async (req, res) => {
    try {
        const estudiante = await Estudiante.findByIdAndUpdate(req.params.idEstudiante, req.body, { new: true });
        res.json(estudiante);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;