const express = require("express");
const router = express.Router();
const { createDoctor } = require("../controllers/doctor.controller.js");


router.post("/", createDoctor);

module.exports = router;
