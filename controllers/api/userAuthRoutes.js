const router = require("express").Router();
const { User } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// signup a new user
router.post("/users/signup", async (req, res) => {
  console.log("Signup route called");
  try {
    console.log("Request body:", req.body);
    const signupUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = signupUser.id;
      req.session.username = signupUser.username;
      req.session.loggedIn = true;

      res.status(200).json(signupUser);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Sign-up failed.", error: err.message });
  }
});

// Login a user
router.post("/users/login", async (req, res) => {
  try {
    const loginUser = await User.findOne({
      where: { username: req.body.username },
    });

    console.log("Login user:", loginUser);

    if (!loginUser) {
      res.status(400).json({
        message: "Incorrect username or/and password. Please enter again.",
      });
      return;
    }
    const validPassword = loginUser.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect password. Please enter again.",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = loginUser.id;
      req.session.username = loginUser.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: loginUser, message: "Yahhh! You are logged in!" });
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).json(err);
  }
});

// Logout a user
router.post("/users/logout", authRequired, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
