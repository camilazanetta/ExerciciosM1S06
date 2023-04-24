const express = require('express')
const router = express.Router()

router.delete('/deletarusuario', (request, response) => {
    const usuario = request.body.deletar_usuario
    response.status(200).json(`Usuário Deletado`)
})

module.exports = router