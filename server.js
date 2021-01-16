const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')



app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})








app.listen(PORT, function(){
    console.log(`Server listening on Port ${PORT}`)
})
