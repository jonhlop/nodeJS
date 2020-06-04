const router = require("express").Router();
const moment = require("moment");

const Cliente = require("../models/clientes");

router.get("/", (req, res) => {
  Cliente.getAll()
    .then((rows) => {
      res.render("clientes/index", {
        clientes: rows,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/new", (req, res) => {
  res.render("clientes/formNew");
});

//Recupera informacion del cliente y renderiza una vista con el detalle
router.get("/:idCliente", async (req, res) => {
  try {
    const cliente = await Cliente.getById(req.params.idCliente);
    res.render("clientes/detalle", {
      cliente
    });
  } catch (err) {
    res.send(err);
  }


});

router.get("/edit/:idCliente", async (req, res) => {

  try {
    const cliente = await Cliente.getById(req.params.idCliente);
    cliente.fecha_nacimiento = moment(cliente.fecha_nacimiento).format('DD/MM/YYYY')
    res.render('clientes/formEdit', {
      cliente
    })
  } catch (err) {
    res.send(err)
  }

});

router.get("/delete/:idCliente", (req, res) => {
  Cliente.deleteById(req.params.idCliente)
    .then(result => {
      console.log(result);
      res.redirect('/clientes') //tiene que volver a lanzar una peticion get sobre clientes
    })
    .catch(err => {

    })
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  const result = await Cliente.create(req.body);
  res.send("Estoy en /clientes/create");
});

router.post("/update", (req, res) => {
  console.log(req.body);
  res.send("Estoy en /clientes/update");
});

module.exports = router;