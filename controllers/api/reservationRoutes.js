const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");
const Op = require("sequelize").Op;

// Get all reservations for a specific user
router.get("/users/:user_id/reservations", authRequired, async (req, res) => {
  try {
    const userReservations = await Reservation.findAll({
      where: {
        user_id: req.params.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Room,
        },
      ],
    });

    res.json(userReservations);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a new reservation for a user
router.post("/users/:user_id/reservations", authRequired, async (req, res) => {
  try {
    const { check_in_date, check_out_date, room_id } = req.body;
    // Check for conflicting reservations
    const conflictingReservations = await Reservation.count({
      where: {
        room_id: room_id,
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
      return;
    }
    console.log(req.body.check_in_date,req.body.check_out_date, req.body.num_guests, req.body.room_id, req.params.user_id);
    const newReservation = await Reservation.create({
      check_in_date: req.body.check_in_date,
      check_out_date: req.body.check_out_date,
      num_guests: req.body.num_guests,
      room_id: req.body.room_id,
      user_id: req.params.user_id,
    });

    res.status(201).json(newReservation);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get a specific reservation that a user has
router.get("/reservations/:id", authRequired, async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Room,
          include: {
            model: Branch,
          },
        },
      ],
    });

    if (!reservation) {
      res.status(404).json({ message: "No reservation found with this id" });
      return;
    }
    res.status(201).json(reservation);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a reservation
router.put("/reservations/:id", authRequired, async (req, res) => {
  try {
    const findReservation = await Reservation.findByPk(req.params.id);

    if (!findReservation) {
      res.status(404).json({ message: "No reservation found with this id" });
      return;
    }
    const { check_in_date, check_out_date, room_id } = req.body;
    // Check for conflicting reservations
    const conflictingReservations = await Reservation.count({
      where: {
        room_id: room_id,
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
      return;
    }
    const updateReservation = await Reservation.update(
      {
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date,
        num_guests: req.body.num_guests,
        room_id: req.body.room_id,
        user_id: req.params.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updateReservation);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete a reservation
router.delete("/reservations/:id", authRequired, async (req, res) => {
  try {
    const deletedReservation = await Reservation.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedReservation) {
      res.status(404).json({ message: "No reservation found with this id" });
      return;
    }

    res.json({ message: "Reservation deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



module.exports = router;
