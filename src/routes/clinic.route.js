const express = require("express");
const router = express.Router();
const { getClinics, getDoctorsFromClinic } = require("../controllers/clinic.controller.js");

router.get("/", getClinics);
router.get("/:clinic/doctors", getDoctorsFromClinic);

module.exports = router;
