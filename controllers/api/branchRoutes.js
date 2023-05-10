const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get JSON data for all branches
router.get("/branches", async (req, res) => {
  try {
    const allBranches = await Branch.findAll();
    res.json(allBranches);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get JSON data for a specific branch
router.get("/branch/:id", async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id, {
      include: [
        {
          model: Room,
        }
      ],
    });

    if (!branch) {
      res.status(404).json({ message: "No branch found with this id" });
      return;
    }

    res.json(branch);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
