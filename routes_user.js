const express = require('express')
const router = express.Router()

router.post('/adicionarUsuario', (request, response) => {
    
    const dados = {
    nome: request.body.nome,
    idade: request.body.idade,
    cargo: request.body.cargo,
    senha: request.body.senha,
    }

    if (!dados.nome || !dados.idade || !dados.cargo || !dados.senha) {
        response.status(406).json({mensagem: "está faltando dado para a operação"})
    
    } else if (dados.idade < 21) {
        response.status(406).json({message: "Usuário não tem idade suficiente"});
    } else {

    response.status(200).json({ message: "Usuário criado com sucesso" })};
    console.log(`Novo usuário Adicionado`)
}
)

module.exports = router