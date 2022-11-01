const knex = require("knex")(require("./knexfile"));
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
