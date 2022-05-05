const express = require('express')
const app = express()
const port = 8081

var rotasProduto = require('./rotasProduto')

//Middleware
app.use('/produtos', rotasProduto)
app.use('/clientes', rotas Cliente)

app.listen(port,() => console.log('aplicação em execução na url http://localhost:8081'))
