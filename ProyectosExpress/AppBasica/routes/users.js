const router = require('express').Router();

router.use((req, res, next) => {
  console.log('Pasa por una ruta con /users');
  next();
});

// http://localhost:3000/users/
router.get('/', function (req, res) {
  console.log(req.query.limit);
  console.log(req.query.sort);
  res.send('respond with a resource');
});

// GET http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Estoy en /users/new');
});

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send('Estoy en /users/' + userId);
});

router.post('/create', (req, res) => {
  // Datos asociados a la petición POST
  console.log(req.body);
  res.send('Petición POST sobre /users/create');
});

module.exports = router;