const porta = 3000

const express = require('express')
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')



// setando server.js e html dentro do ejs

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// Queremos enviar css,imagens ...
app.use(express.static('views'))
app.set('views', __dirname + '/views')
app.use(logger('dev'))


app.get('/', (req,resp)=>{
    //resp.send("<h1>Treinamento para a Solutis <h1>")
    resp.render('home.ejs')
})

/*
app.post('/', (req,resp) => {
    let clone = req.body.clone
    resp.render('results.ejs', {data: clone})

})
*/
app.post('/', (req, res)=>{
    
})




app.listen(porta, () =>{
    console.log(`Execuntando na porta ${porta}`)
})