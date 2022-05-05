const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

var pg = require('pg')
var consString = "postgres://jwtpztpxbjeaiq:e3feb821aa63faff6a29391cf8db434784101f8457495816a08e77001062b45b@ec2-3-224-164-189.compute-1.amazonaws.com:5432/d7b59t5075fnib"

const pool = new pg.Pool({ connectionString: consString, ssl: { rejectUnauthorized: false } })

app.get('/', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        res.status(200).send('conectado com sucesso')
    })
})


app.get('/criartabelausuarios', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql = 'create table usuarios (email varchar(50), senha varchar(200), perfil varchar(15))'
        client.query(sql, (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

/**insert into usuarios(email,senha,perfil)values($1,$2,$3) */
/**[req.body.email,req.body.senha,req.body.perfil] */


app.post('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        client.query('select * from usuarios where email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
            //  para não clonar dados
            if (result.rowCount > 0) {
                return res.status(200).send('Registros já existentes')
            }

            var sql = 'insert into usuarios(email, senha, perfil) values ($1,$2,$3)'
            client.query(sql, [req.body.email, req.body.senha, req.body.perfil], (error, result) => {
                if (error) {
                    return res.status(403).send('Operação não permitida')
                }
                res.status(201).send({
                    mensagem: 'criado com sucesso',
                    status: 201
                })
            })
        })
    })
})

app.get('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            res.status(401).send("Conexão não autorizada ")
        }
        client.query('select * from usuarios', (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }
           return res.status(200).send(result.rows)
        })
    })
})

app.get('/usuarios/:email', (req, res) => {
    pool.connect((err, client)=> {
        if(err){
         return res.status(401).send('Conexão não autorizada')
        }
        client.query('select * from usuarios where email = $1',[req.params.email],(error, result) =>{
            if(error){
                return res.status(401).send('Operação não permitida')
            }
            res.status(200).send(result.rows[0]) /**[{},{}]*/

        })
   })
})


app.put('/usuarios/:email', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send("Conexão não autorizada")
        }
        client.query('select * from usuarios where email = $1', [req.params.email], (error, result) => {
            if (error) {
                return res.status(401).send("Operação não permitida")
            }
            //update usuarios set senha=$1, perfil=$2 where email=$3 
            if (result.rowCount > 0) {
                var sql = 'update usuarios set senha=$1, perfil=$2 where email=$3'
                let valores = [req.body.senha, req.body.perfil, req.params.email]
                client.query(sql, valores, (error2, result2) => {
                    if (error2) {
                        return res.status(401).send("Operação não permitida")
                    }

                    if (result2.rowCount > 0) {
                        return res.status(200).send('Registro alterado')
                    }
                })
            } else
                res.status(200).send('Usuário não encontrado')
        })
    })
})


app.delete('/usuarios/:email', (req, res) =>{
    pool.connect((err, client) => {
        if(err){
            res.status(401).send('Conexão não autorizada')
        }
        client.query('Delete from usuarios where email = $1',[req.params.email], (error, result) =>{
            if(error){
                return res.status(401).send('Operação não autorizada')
            }
            res.status(200).send({ message:'Registro excluído com sucesso'})
        })
    })
})

app.listen(8081, () => console.log('aplicação em execução na url http://localhost:8081'))