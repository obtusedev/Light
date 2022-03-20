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

module.exports = {
    getClinics: getClinics,
};
