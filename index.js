//let num = 10

//console.log('Sas ' +num,)

//const fs = require('fs')

//fs.writeFileSync("info.txt", "Test text!!")

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {name: "Alex", id: 4})
})

app.get('/about', (req, res) => {
    res.render('about')
})

let port = 3001
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})
