const router = require('express').router();

router.get('/',(req, res)=>{
    res.send('Estoy en clientes')
})

module.exports = router;