const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get all rooms in a specific branch
router.get("/branches/:branch_id/rooms");

// Get information for a specific room
router.get("/rooms/:id");

// Check the availability of a specific room
router.get("/rooms/:id/availability");

module.exports = router;
