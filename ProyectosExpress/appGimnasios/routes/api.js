const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');
const apiUsuariosRouter = require('./api/usuarios');

const { checkToken } = require('./middlewares');

router.use('/clientes', checkToken, apiClientesRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;