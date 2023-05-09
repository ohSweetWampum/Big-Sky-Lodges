const express = require("express");
const router = express.Router();

const branchRoutes = require("./branchRoutes");
const reservationRoutes = require("./reservationRoutes");
const roomRoutes = require("./roomRoutes");
const userAuthRoutes = require("./userAuthRoutes");

router.use(branchRoutes);
router.use(reservationRoutes);
router.use(roomRoutes);
router.use(userAuthRoutes);

module.exports = router;
