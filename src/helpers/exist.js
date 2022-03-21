const Doctor = require("../models/Doctor.js");
const { JSONResponse } = require("../helpers/response.js");

function checkIfClinicExists(req, res, next) {
    const { clinic } = req.params;
    const re = new RegExp(clinic, "i");
    Doctor.exists({ clinic: re }, (err, result) => {
        if (err) {
            return new JSONResponse(400, err.message).send(req, res);
        } else if (result === null) {
            return new JSONResponse(404, `Clinic: ${clinic} not found`).send(req, res);
        } else {
            next();
        }
    });
}

module.exports = {
    checkIfClinicExists,
};
