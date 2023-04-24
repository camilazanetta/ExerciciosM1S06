const express = require('express')
const router = express.Router()

router.delete('/deletarUsuario/:id', (request, response) => {
    const deletar = request.params.id

    if (!request.params.id) {
          return response.status(406).json({ message: "Está faltando dados para concluir a operação" });
        }
     
        response.status(200).json({ message: "Deletado com sucesso" });
      });
      

module.exports = router