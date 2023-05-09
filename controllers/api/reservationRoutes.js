const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get all reservations for a specific user
router.get("/users/:user_id/reservations", authRequired);

// Create a new reservation for a user
router.post("/users/:user_id/reservations", authRequired);

// Get a specific reservation that a user has
router.get("/reservations/:id", authRequired);

// Update a reservation
router.put("/reservations/:id", authRequired);

// Delete a reservation
router.delete("/reservations/:id", authRequired);

module.exports = router;
