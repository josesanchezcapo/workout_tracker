
const models = require("../models"); 

module.exports =function(app) {

    //see all workouts

    app.get("/api/workouts", function (req, res) {
        models.Workout.find({})
            .then(function (dbworkout) {
                res.json(dbworkout);
            }).catch(function (err) {
                res.status(400).json(err);
            });
    });

    // create new workout 
    app.post("/api/workouts", function(req, res) {
        models.Workout.create(req.body)
        .then(function (dbworkout) {
            res.json(dbworkout);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    })

//adds all workout time together
app.get("/api/workouts", function (req, res) {
        models.Workout.aggregate([
           {$addFields: { totalDuration: { $sum: "$exercises.duration" }
            }}
        ]).then(function (dbworkout) {
            res.json(dbworkout);
        }).catch(function (err) {
            res.status(400).json(err);
        });
})


//updates the total exercise
app.put("/api/workouts/:id", (req, res) => {
        models.Workout.findByIdAndUpdate( 
            req.params.id,
            {
            $push: { exercises: req.body } },
        )
        .then(workout => {
            res.json(workout); 
        })
        .catch((err) => {
            res.json(err);  
        })
})


//adds the exercise data & gets the total of the past 7 days
app.get("/api/workouts/range", (req, res) => {
    models.Workout.aggregate([ 
        {
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }
    ]).sort({ _id: -1 })
    .limit(7)
    .then(workout => {
        res.json(workout)
    }).catch(err => {
        res.json(err);
    })
})

}
