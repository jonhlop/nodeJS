const router = require('express').Router();

const apiEstudiantesRouter = require('./api/estudiantes');

router.use('/estudiantes', apiEstudiantesRouter);

module.exports = router;