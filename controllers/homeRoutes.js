const router = require("express").Router();
const { Branch, Room, Reservation, User } = require("../models");

const { authRequired } = require("../utils/authenticator");

// Render main page with all branches
router.get("/", async (req, res) => {
  try {
    // Fetch all branches data using your models
    const allBranches = await Branch.findAll();

    // Convert data to plain JSON
    const branches = allBranches.map((branch) => branch.get({ plain: true }));

    // Render the home page with the branches data
    res.render("mainPage", {
      branches,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Render branch details page with rooms
router.get("/branch/:id", async (req, res) => {
  try {
    const branchData = await Branch.findByPk(req.params.id, {
      include: [{ model: Room }],
    });

    if (!branchData) {
      res.status(404).json({ message: "No branch found with that id!" });
      return;
    }

    const branch = branchData.get({ plain: true });

    res.render("branchDetails", {
      branch,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render room details page
router.get("/rooms/:id", async (req, res) => {
  try {
    const roomData = await Room.findByPk(req.params.id);

    if (!roomData) {
      res.status(404).json({ message: "No room found with that id!" });
      return;
    }

    const room = roomData.get({ plain: true });

    res.render("roomDetails", {
      room,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render user dashboard with reservations
router.get("/dashboard", authRequired, async (req, res) => {
  try{
    console.log(req.session.user_id)
    const userData = await Reservation.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Room
        },
      ],
    });
    res.json(userData);
 /* try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Reservation }],
    });

    const user = userData.get({ plain: true });
    res.json(userData)
  /*  res.render("dashboard", {
      user,
      loggedIn: req.session.loggedIn,
    });*/
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    console.log("login in home")
    res.redirect("/");
    return;
  }
  res.render("userLogin");
});

// render signUp page
router.get("/signup", (req, res) => {
  res.render("userSignup");
});

module.exports = router;
