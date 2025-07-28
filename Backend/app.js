const express = require("express")

const app = express()

app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/User")
.then(() => console.log("connected to mongodb"))
.catch((err) => console.log(err))

app.use('/',express.static('Images'))

app.get('/',(req, res) => {
    res.send('localhost 8000')
})

const cors = require('cors')
app.use(cors())

const route = require('./route')
app.use('/', route)

app.listen(8000, () => {
    console.log("running on localhost 8000");
})