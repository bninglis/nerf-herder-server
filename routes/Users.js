const express = require("express");
const router = express("router");
const knex = require("knex")(require("../knexfile"));

module.exports = router;