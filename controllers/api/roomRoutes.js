const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");
const Op = require("sequelize").Op;

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
      where: {
        id: req.params.id
      },
      include:[
          {
            model: Branch,
          },
        ]
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
router.post("/rooms/:id/availability", async (req, res) => {
  try {
  const { check_in_date, check_out_date } = req.body;
    console.log(check_in_date, check_out_date, req.params.id)
    // Check for conflicting reservations
    const conflictingReservations = await Reservation.count({
      where: {
        room_id: req.params.id,
        [Op.or]: [
          {
            check_in_date: {
              [Op.between]: [check_in_date, check_out_date],
            },
          },
          {
            check_out_date: {
              [Op.between]: [check_in_date, check_out_date],
            },
          },
        ],
      },
    });

    if (conflictingReservations > 0) {
      res.status(400).json({
        message: "The room is already reserved during the requested period",
      });
    }
    else{
      res.status(200).json({
        message: "The room is available!",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
