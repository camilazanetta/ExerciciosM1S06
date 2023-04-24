const express = require('express')
const router = express.Router()

router.delete('/deletarUsuario', (request, response) => {

  const id = request.query.id

  if (!id || !id === "") {
    return response.status(406).json({ message: "Está faltando dados para concluir a operação" });
  }
  else {
    response.status(200).json({ message: "Deletado com sucesso" });
  }

});

module.exports = router