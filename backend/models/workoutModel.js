const mongoose = require('mongoose')

//defines the structure of model in database
//first argument is how object load and second is timestamp property(when the doc was created)
const workoutSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    }, 
    load:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    }
},{timestamps:true})
//Create and export mongoose model, automatically creates a collection
module.exports = mongoose.model('Workout',workoutSchema)