const Doctor = require("../models/Doctor.js");
const { JSONResponse } = require("../helpers/response.js");

function getClinics(req, res) {
    Doctor.find({}).distinct("clinic", (err, clinics) => {
        if (err) {
            return new JSONResponse(400, err.message).send(req, res);
        } else if (clinics.length === 0) {
            return new JSONResponse(404, "No clinic found").send(req, res);
        } else {
            return new JSONResponse(200, clinics).send(req, res);
        }
    });
}

function getDoctorsFromClinic(req, res) {
    const { clinic } = req.params;
    const re = new RegExp(clinic, "i"); // 'i' for case insensitive
    Doctor.find({ clinic: re }, "-_id -__v").exec((err, doctors) => {
        if (err) {
            return new JSONResponse(400, err.message).send(req, res);
        } else if (doctors.length === 0) {
            return new JSONResponse(404, "No doctors found for this clinic").send(req, res);
        } else {
            return new JSONResponse(200, doctors).send(req, res);
        }
    });
}

module.exports = {
    getClinics: getClinics,
    getDoctorsFromClinic: getDoctorsFromClinic,
};
