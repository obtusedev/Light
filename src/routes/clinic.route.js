const express = require("express");
const router = express.Router();
const { getClinics } = require("../controllers/clinic.controller.js");

router.get("/", getClinics);

module.exports = router;
