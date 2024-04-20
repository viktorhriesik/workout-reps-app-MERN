require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express();


app.use(express.json()) 
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)

//connect to database MongosDB
//mongodb+srv://thunderlord:kikiriki1234@cluster0.8va5peo.mongodb.net/Workout?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://thunderlord:kikiriki1234@cluster0.8va5peo.mongodb.net/Workout?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to database");
    
    //listen for request
    app.listen(process.env.PORT,()=>{
    console.log("listening");
})
}).catch((eroor)=>{
    console.log("Cant connect to database",eroor);
})

