require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')


const addstudentsRoutes = require('./routes/addstudents')   

//express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/addstudents', addstudentsRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to the Database & listening on port', process.env.PORT)  
        })
    })
    .catch((error) => {
        console.log(error)
    })

