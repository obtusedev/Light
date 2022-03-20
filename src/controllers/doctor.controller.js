const { fetchDoctorDetails } = require("../helpers/data.js");
const validator = require("validator");
const Doctor = require("../models/Doctor.js");
const { isEmptyString, isPositiveAndNumber } = require("../helpers/is.js");

function findDoctor(req, res) {
    const { q = "" } = req.query;
    if (isEmptyString(q)) {
        res.status(400).json({
            status: 400,
            msg: "Empty search query",
        });
    } else {
        const doctor = Doctor.find({});
    }
}

function findDoctorById(req, res) {
    const { id } = req.params;
    if (isPositiveAndNumber(parseInt(id))) {
        Doctor.find({ id: id }, "-_id -__v", (err, doctor) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    msg: err.message,
                });
            } else if (doctor.length === 0) {
                res.status(404).json({
                    status: 404,
                    msg: `No doctor with id: ${id} found`
                })
            } else {
                res.status(200).json({
                    status: 200,
                    doctor,
                });
            }
        });
    } else {
        res.status(400).json({
            status: 400,
            msg: "Invalid id parameter"
        });
    }
}

function createDoctor(req, res) {
    const { name } = req.body;
    if (validator.isAlpha(name, "en-US", { ignore: "- /" })) {
        const doctor = fetchDoctorDetails(name);
        Doctor.create(doctor, err => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    msg: err.message,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    doctor,
                });
            }
        });
    } else {
        res.status(400).json({
            status: 400,
            msg: "Bad Request",
        });
    }
}

module.exports = {
    findDoctor: findDoctor,
    findDoctorById: findDoctorById,
    createDoctor: createDoctor,
};
