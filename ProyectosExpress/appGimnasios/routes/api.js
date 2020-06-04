const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/clientes', apiClientesRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;