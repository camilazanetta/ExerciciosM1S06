const express = require('express');
const app = express();
app.use(express.json());

//importanto rota post
const postRoute = require("./routes_user")
app.use(postRoute)

//importanto rota delete

const deleteRoute = require("./routes_delete")
app.use(deleteRoute)


app.listen (5555, () => {
    console.log("Servidor online!")
})
