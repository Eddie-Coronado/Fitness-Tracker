const Workout = require('../models/workout');
const router = require('express').Router();

// Get all exercise
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .populate("exercises")
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Get data within range
router.get("/api/workouts/range", (req, res) => {
    Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// create a workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $inc: {
                totalDuration: req.body.duration
            },
            $push: {
                exercises: req.body
            },

        },
        { new: true 
        })
        .then((dbWorkout) => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
        .catch((err) => {
            res.json(err);
        });
});

// post an exercise
router.post('/api/workouts', ( {body}, res) => {
    Workout.create(body).then ( (dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch( (err) => {
        res.status(500).json(err);
    });
});

module.exports = router;