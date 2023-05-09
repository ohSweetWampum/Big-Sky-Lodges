const router = require("express").Router();
const { Room, User, Branch, Reservation } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get JSON data for all branches
router.get("/branches");

// Get JSON data for a specific branch
router.get("/branch/:id");

module.exports = router;
