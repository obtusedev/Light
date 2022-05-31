const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const app = express();
const PORT = 3000;

/* Database */
mongoose
    .connect("mongodb://localhost:27017/light")
    .then(() => {
        console.log("Connected to db");
    })
    .catch(err => {
        console.error(err);
    });

/* Routes */
const doctorRoutes = require("./routes/doctor.route.js");
const clinicRoutes = require("./routes/clinic.route.js");
const patientRoutes = require("./routes/patient.route.js");
/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/clinic", clinicRoutes);
//app.use("/api/v1/patient", patientRoutes);

app.get("/", (req, res) => {
    let routes = [
        "/                              GET",
        "/api/v1/doctor/search          GET",
        "/api/v1/doctor/:id             GET",
        "/api/v1/doctor                 POST",
        "/api/v1/clinic                 GET",
        "/api/v1/clinic/:clinic         GET",
        "/api/v1/clinic/:clinic/doctors GET"
    ]
    res.send(routes);
});

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
