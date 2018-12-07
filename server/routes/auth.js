const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const parser = require("../config/cloudinary")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 5;

router.post("/signup", (req, res) => {
  console.log(req.body)
  const { username, password, campus, course } = req.body;
  if (username === "" || password === "" || campus === "" || course === "") {
    res
      .status(400)
      .json({ message: "Indicate username, password, campus and course" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(500).json({ message: "The username already exists" });
      return;
    }

    console.log(password)

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(bcryptSalt));

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course
    });

    newUser
      .save()
      .then(user => {
        req.login(user);
        res.status(200).json(newUser);
      })
      .catch(() => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json({message: "Error on login"}); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/upload", parser.single("picture"), (req, res) => {
  User.findByIdAndUpdate(req.user.id, { image: req.file.url }).then(() => {
    res.json({
      success: true,
      pictureUrl: req.file.url
    });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

router.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;
