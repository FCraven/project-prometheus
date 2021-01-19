//DEPENDENCIES
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

//MIDDLEWARE
app.use(morgan('dev'))
app.use(express.static('public'))
// UNCOMMENT IF USING REACT and remove line above
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   } else {
//     app.use(express.static('public'))
//   }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//ROUTES
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

//CONNECT DATABASE
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/',
    { useNewUrlParser: true, useUnifiedTopology: true }
)


//START SERVER
app.listen(PORT, function(){
    console.log(`Server listening on Port ${PORT}`)
})
