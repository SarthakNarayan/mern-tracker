const router = require("express").Router();
let User = require("../models/user.model");

router.get("/", (req, res) => {
  // .find is a mongodb method to get all the users
  // a promise is returned
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

router.post("/add", (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

module.exports = router;
