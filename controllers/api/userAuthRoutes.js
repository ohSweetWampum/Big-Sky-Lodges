const router = require("express").Router();
const { User } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// signup a new user
router.post("/signup", async (req, res) => {
  try {
    const signupUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = signupUser.id;
      req.session.username = signupUser.username;
      req.session.loggedIn = true;

      res.status(200).json(signupUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login a user
router.post("/login", async (req, res) => {
  try {
   // console.log("Request body:", req.body);

    const loginUser = await User.findOne({
      where: { email: req.body.email },
    });

    console.log("Login user:", loginUser);

    if (!loginUser) {
      res.status(400).json({
        message: "Incorrect username or/and password. Please enter again.",
      });
      return;
    }
    console.log(loginUser)
    const validPassword = await loginUser.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect username or/and password. Please enter again.",
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
router.post("/logout", authRequired, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
