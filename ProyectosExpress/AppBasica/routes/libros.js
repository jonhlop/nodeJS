const router = require('express').Router();

router.get('/:escritorId/libro/:libroId', (req, res) => {
    const { escritorId, libroId } = req.params;
    res.send(`Recupero el libro ${libroId} del escritor ${escritorId}`);
});

router.get('/:nombre.:extension', (req, res) => {
    const { nombre, extension } = req.params;
    res.send(`Recupero el libro ${nombre} con extensión ${extension}`);
});

module.exports = router;