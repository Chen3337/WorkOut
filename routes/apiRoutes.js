var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (AllExt) {
      res.json(AllExt);
    });
  });
  app.put("/api/workouts/:id", function (req, res) {
    const newExersise = req.body;

    const id = req.params.id;
    db.Workout.update(
      {
        _id: id
      },
      {
        $push: { exercises: newExersise }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  app.post("/api/workouts", function ({ body }, res) {
    db.Workout.create(body).then(function (AllExt) {
      res.json(AllExt);
    });
  });
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then(function (AllExt) {
      res.json(AllExt);
    });
  });

};
