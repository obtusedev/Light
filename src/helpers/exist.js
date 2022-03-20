const Doctor = require("../models/Doctor.js");

function checkIfClinicExists(req, res, next) {
    console.log("checking if clinic exists")
    const { clinic } = req.params;
    const re = new RegExp(clinic, "i");
    Doctor.exists({ clinic: re }, (err, result) => {
        console.log(result)
        if (err) {
            res.status(400).json({
                status: 400,
                msg: err.message,
            });
        } else if (result === null) {
            res.status(404).json({
                status: 404,
                msg: `Clinic: ${clinic} not found`,
            });
        } else {
            next();
        }
    });
}

module.exports = {
    checkIfClinicExists,
};
