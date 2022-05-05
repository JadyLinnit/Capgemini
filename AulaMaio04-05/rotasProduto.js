const express = requiete('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).send('Pagina principal consulta')
})

router.get('/:idproduto', (req, res) => {
    
})

router.post('/',(req, res) => {
    res.status(201).send({ message: 'produto criado com sucesso'})
})

module.exports = router