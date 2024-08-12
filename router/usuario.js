const express = require('express')
const router = express.Router()

const personacontroller = require('../controller/personacontroller')

//Mostrar
router.get('/', personacontroller.visualizar);

//Insertar
router.post('/crear', personacontroller.crear);

//Post
router.post('/editar', personacontroller.editar);

//delete
router.get('/borrar/:id', personacontroller.eliminar)

module.exports = router;