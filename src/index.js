const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./routes/route')
app.use(express.json())
mongoose.connect('mongodb+srv://Iqra:Iqra3786@cluster0.tsgwccn.mongodb.net/group29Database',{
    useNewUrlParser: true
})
    .then(() => console.log("mongodb is connected"))
    .catch(err => console.log(err))

app.use('/', route)
app.listen((process.env.PORT || 3000), function () {
    console.log("running on port")
})


