const router = require("express").Router();
const { Branch, Room, Reservation, User } = require("../models");

const { authRequired } = require("../utils/authenticator");

// Render home page with all branches
router.get("/branches", async (req, res) => {
  // Implementation
});

// Render branch details page with rooms
router.get("/branch/:id", async (req, res) => {
  // Implementation
});

// Render room details page
router.get("/rooms/:id", async (req, res) => {
  // Implementation
});

// Render user dashboard with reservations
router.get("/users/:user_id/reservations", authRequired, async (req, res) => {
  // Implementation
});

// Render login page
router.get("/login", (req, res) => {
  // Implementation
});

// Render signup page
router.get("/signup", (req, res) => {
  // Implementation
});

module.exports = router;
