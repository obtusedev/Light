const express = require("express");
const router = express.Router();
const { queryDoctor, findDoctorById, createDoctor } = require("../controllers/doctor.controller.js");

router.get("/search", queryDoctor);
router.get("/:id", findDoctorById);
router.post("/", createDoctor);

module.exports = router;
