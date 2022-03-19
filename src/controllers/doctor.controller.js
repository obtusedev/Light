const { fetchDoctorDetails } = require("../helpers/data.js");

function createDoctor(req, res) {
    const { name } = req.body;
    const doctor = fetchDoctorDetails(name);
    res.json({
        status: 200,
        doctor
    });
}

module.exports = {
    createDoctor: createDoctor,
};
