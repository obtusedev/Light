const Doctor = require("../models/Doctor.js");

function getClinics(req, res) {
    Doctor.find({}).distinct("clinic", (err, clinics) => {
        if (err) {
            res.status(400).json({
                status: 400,
                msg: err.message,
            });
        } else if (clinics.length === 0) {
            res.status(404).json({
                status: 404,
                msg: `No clinics`,
            });
        } else {
            res.status(200).json({
                status: 200,
                clinics,
            });
        }
    });
}

function getDoctorsFromClinic(req, res) {
    const { clinic } = req.params;
    const re = new RegExp(clinic, "i"); // 'i' for case insensitive
    Doctor.find({ clinic: re }, "-_id -__v").exec((err, doctors) => {
        if (err) {
            res.status(400).json({
                status: 400,
                msg: err.message,
            });
        } else if (doctors.length === 0) {
            res.status(400).json({
                status: 400,
                msg: "No doctors found for this clinic",
            });
        } else {
            res.status(200).json({
                status: 200,
                doctors,
            });
        }
    });
}

module.exports = {
    getClinics: getClinics,
    getDoctorsFromClinic: getDoctorsFromClinic,
};
