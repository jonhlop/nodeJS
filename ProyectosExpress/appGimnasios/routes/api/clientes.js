const router = require('express').Router();

const Cliente = require('../../models/cliente');

/**
 * 
 * - Si yo hago una petición, la respuesta debe incorporar todos los datos necesarios
 * - Debemos usar los diferentes verbos HTTP
 *  - GET - recuperar información
 *  - POST - crear un nuevo registro en la BD
 *  - PUT/PATCH - editar registros en la DB
 *  - DELETE - borrar un registro en la BD
 * 
 */

// GET http://localhost:3000/api/clientes
// Recupera todos los clientes
router.get('/', (req, res) => {
    Cliente.getAll()
        .then((rows) => {
            res.json(rows);
        })
        .catch(err => {
            res.json({ error: err.message });
        });
});

// POST http://localhost:3000/api/clientes
// Crea un nuevo cliente en la BD
router.post('/', async (req, res) => {
    const result = await Cliente.create(req.body);
    if (result['affectedRows'] === 1) {
        const cliente = await Cliente.getById(result['insertId']);
        res.json({ success: 'Se ha insertado el cliente', cliente: cliente });
    } else {
        res.json({ error: 'No se ha insertado' });
    }
});

// DELETE http://localhost:3000/api/clientes/IDCLIENTE
// Borrar un cliente
router.delete('/:idCliente', async (req, res) => {
    // RECUPERO EL CLIENTE
    const cliente = await Cliente.getById(req.params.idCliente);
    // BORRO EL CLIENTE
    const result = await Cliente.deleteById(req.params.idCliente);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Se ha borrado el cliente', clienteDeleted: cliente });
    } else {
        res.json({ error: 'No se ha borrado' });
    }
});

// DELETE http://localhost:3000/api/clientes/cuota/20
router.delete('/cuota/:cuotaMin', async (req, res) => {
    const result = await Cliente.deleteByCuota(req.params.cuotaMin);
    res.json(result);
});

// PUT http://localhost:3000/api/clientes/IDCLIENTE
// Edita los datos de un cliente
router.put('/:idCliente', async (req, res) => {
    const result = await Cliente.updateById(req.params.idCliente, req.body);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Se ha actualizado el cliente' });
    } else {
        res.json({ error: 'No se ha actualizado' });
    }
});

module.exports = router;