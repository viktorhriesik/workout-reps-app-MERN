const express = require('express')

const router = express.Router()
const {
    createWorkout,
    getAllWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")

//GET all workouts
router.get('/',getAllWorkout)

//GET a single workout
router.get('/:id',getSingleWorkout)

//POST a single workout
router.post('/',createWorkout)

//Delete a le workout
router.delete('/:id',deleteWorkout)

//Delete a single workout
router.patch('/:id',updateWorkout)

module.exports = router;