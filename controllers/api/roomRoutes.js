const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get all rooms in a specific branch
router.get("/branches/:branch_id/rooms", async (req, res) => {
  try {
    const rooms = await Room.findAll({
      where: {
        branch_id: req.params.branch_id,
      },
    });

    res.json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get information for a specific room
router.get("/rooms/:id", async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id, {
      include: {
        model: Branch,
        attributes: ["name", "location"],
      },
    });

    if (!room) {
      res.status(404).json({ message: "No room found with this id" });
      return;
    }

    res.json(room);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Check the availability of a specific room
router.get("/rooms/:id/availability", async (req, res) => {
  try {
    const startDate = req.query.start_date;
    const endDate = req.query.end_date;

    if (!startDate || !endDate) {
      res
        .status(400)
        .json({
          message: "Please provide start_date and end_date query parameters",
        });
      return;
    }

    const conflictingReservations = await Reservation.count({
      where: {
        room_id: req.params.id,
        [Op.or]: [
          {
            check_in_date: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            check_out_date: {
              [Op.between]: [startDate, endDate],
            },
          },
        ],
      },
    });

    const isAvailable = conflictingReservations === 0;

    res.json({ isAvailable });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
