const router = require("express").Router();
const { User } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

router.post("/api/users/login", userAuthController.login);
router.post("/api/users/signup", userAuthController.signup);
router.post("/api/users/logout", authRequired, userAuthController.logout);

module.exports = router;

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
