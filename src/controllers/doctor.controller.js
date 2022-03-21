const { fetchDoctorDetails } = require("../helpers/data.js");
const validator = require("validator");
const Doctor = require("../models/Doctor.js");
const { isEmptyString, isPositiveAndNumber } = require("../helpers/is.js");
const { JSONResponse } = require("../helpers/response.js");

function queryDoctor(req, res) {
    const { q = "" } = req.query;
    if (isEmptyString(q)) {
        return new JSONResponse(400, "Search query is empty").send(req, res);
    } else if (isPositiveAndNumber(q)) {
        // if q is a number then search by id
        Doctor.find({ id: q }, "-_id -__v", (err, result) => {
            if (err) {
                return new JSONResponse(400, err.message).send(req, res);
            } else if (result.length === 0) {
                return new JSONResponse(404, `No results`).send(req, res);
            }
            return new JSONResponse(200, result).send(req, res);
        })
    } else {
        return new JSONResponse(404, "Not found").send(req, res);
    }
}

function findDoctorById(req, res) {
    const { id } = req.params;
    if (isPositiveAndNumber(parseInt(id))) {
        Doctor.find({ id: id }, "-_id -__v", (err, doctor) => {
            if (err) {
                return new JSONResponse(400, err.message).send(req, res);
            } else if (doctor.length === 0) {
                return new JSONResponse(404, `No doctor with id: ${id} found`).send(req, res);
            } else {
                return new JSONResponse(200, doctor).send(req, res);
            }
        });
    } else {
        return new JSONResponse(400, "Invalid id parameter").send(req, res);
    }
}

function createDoctor(req, res) {
    const { name } = req.body;
    if (validator.isAlpha(name, "en-US", { ignore: "- /" })) {
        const doctor = fetchDoctorDetails(name);
        Doctor.create(doctor, err => {
            if (err) {
                return new JSONResponse(400, err.message).send(req, res);
            } else {
                return new JSONResponse(200, doctor).send(req, res);
            }
        });
    } else {
        return new JSONResponse(400, "Bad Request").send(req, res);
    }
}

module.exports = {
    queryDoctor: queryDoctor,
    findDoctorById: findDoctorById,
    createDoctor: createDoctor,
};
