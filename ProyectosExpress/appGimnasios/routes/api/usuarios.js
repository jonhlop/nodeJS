const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Usuario = require("../../models/usuario");

router.post("/registro", async (req, res) => {
  // TODO: encriptar la password
    req.body.password = bcrypt.hashSync(req.body.password, 15)
  // TODO: validar los campos de entrada al registro
  const result = await Usuario.create(req.body);
  if (result["affectedRows"] === 1) {
    res.json({ success: "Registro correcto" });
  } else {
    res.json({ error: "Error en el registro" });
  }
});

// TODO: gestión del LOGIN
router.get('/login',async(req, res)=>{
   const usuario = await Usuario.getByEmail(req.body.email);
   if(usuario){
       //si existe ese usuario con ese email
       const iguales=bcrypt.compareSync(req.body.password, usuario.password)
       if(iguales){
           res.json({success: 'Login correcto'})
       }
   }else{
       //no existe ese usuario con ese emial
       res.json({error: 'Error en email y/o password 1 '})
   }
})

module.exports = router;
