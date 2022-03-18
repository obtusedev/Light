const express = require("express");
const app = express();
const PORT = 3000;

/* Routes */

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
