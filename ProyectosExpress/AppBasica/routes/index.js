var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const animales = ['perro', 'gato', 'pajaro', 'rinoceronte'];
  const nombre = 'Jonathan Lopez';
  const empleados = [{
      nombre: 'Jonathan',
      apellidos: 'Lopez',
      departamento: 'desarrollo',
      activo: true
    },
    {
      nombre: 'Juan',
      apellidos: 'Perez',
      departamento: 'desarrollo',
      activo: true
    },
    {
      nombre: 'Laura',
      apellidos: 'Avila',
      departamento: 'UX',
      activo: true
    },
    {
      nombre: 'Gemma',
      apellidos: 'rodriguez',
      departamento: 'RRHH',
      activo: true
    },
    {
      nombre: 'Masii',
      apellidos: 'Lopez',
      departamento: 'IT',
      activo: false
    },
  ]
  res.render('main', {
    arrAnimales: animales,
    nombre: nombre,
    numProductos: 13,
    empleados: empleados
  });
});

router.get('/info',(req, res)=>{
  res.render('info');
  
})
module.exports = router;