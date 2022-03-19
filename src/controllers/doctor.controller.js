const { fetchDoctorDetails } = require("../helpers/data.js");
const validator = require("validator");

function createDoctor(req, res) {
    const { name } = req.body;
    if (validator.isAlpha(name, "en-US", { ignore: "- /" })) {
        const doctor = fetchDoctorDetails(name);
        res.status(200).json({
            status: 200,
            doctor,
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
