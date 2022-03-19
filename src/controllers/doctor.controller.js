const { fetchDoctorDetails } = require("../helpers/data.js");
const validator = require("validator");
const Doctor = require("../models/Doctor.js");

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
    createDoctor: createDoctor,
};
