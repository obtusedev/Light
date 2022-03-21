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
/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/clinic", clinicRoutes);

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
