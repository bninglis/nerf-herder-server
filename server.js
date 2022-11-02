const knex = require("knex")(require("./knexfile"));
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ReferenceData = require("./routes/ReferenceData");
const Users = require("./routes/Users");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/ref", ReferenceData);
app.use("/users", Users);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));