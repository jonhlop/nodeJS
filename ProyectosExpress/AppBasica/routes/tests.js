const router = require('express').Router();

router.get('/ejemplo/a', (req, res, next) => {
    console.log('Pasa por el middleware específico de /ejemplo/a');
    next();
}, (req, res) => {
    res.send('Dentro de la ruta /tests/ejemplo/a');
});

router.get('/ejemplo/b', randomMiddleware, (req, res) => {
    console.log(req.numAleatorio);
    console.log(req.fechaActual);
    res.send('Dentro de la ruta /tests/ejemplo/b');
});

function randomMiddleware(req, res, next) {
    const randomNum = Math.random();
    if (randomNum > 0.6) {
        res.send('No se puede acceder por el número aleatorio ' + randomNum);
    } else {
        req.numAleatorio = randomNum;
        next();
    }
}

module.exports = router;