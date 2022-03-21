const express = require("express");
const router = express.Router();
const {
    getClinics,
    getClinic,
    getDoctorsFromClinic,
} = require("../controllers/clinic.controller.js");
const { checkIfClinicExists } = require("../helpers/exist.js");

router.use("/:clinic", checkIfClinicExists);

router.get("/", getClinics);
router.get("/:clinic", getClinic);
router.get("/:clinic/doctors", getDoctorsFromClinic);

module.exports = router;
