const express = require("express");
const router = express.Router();
const { findDoctor, findDoctorById, createDoctor } = require("../controllers/doctor.controller.js");

router.get("/:id", findDoctorById);
router.post("/", createDoctor);

module.exports = router;
