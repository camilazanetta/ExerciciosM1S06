const express = require('express')
const router = express.Router()

router.post('/adicionarUsuario', (request, response) => {
    response.status(200).json({message: "usuário adicionado com sucesso"})
    console.log(`Novo usuário Adicionado`)
})

module.exports = router