const express = require("express");
const knexfile = require("../knexfile");
const router = express("router");
const knex = require("knex")(require("../knexfile"));

router.get("/", (_req, res) => {
    knex.select("playbook", "id", "tagline", "summary")
        .from("playbooks")
        .then((data) => {
            res.send(data);
        });
});

router.get("/:id", (req, res) => {
    const requestID = req.params.id;
    knex.select("id")
        .from("playbooks")
        .then((data) => {
            const isValidID = Object.values(JSON.parse(JSON.stringify(data))).findIndex((id) => {
                return id.id === requestID;
            });
            if (isValidID < 0) {
                res.status(404).send("I dunno, but we don't have that one on our end...");
            }
        });
    const playbookKeys = ["items", "special_abilities", "friends"];
    const referenceKeys = [
        "heritages",
        "backgrounds",
        "vices",
        "signature",
        "aliases",
        "first_names",
        "last_names",
    ];
    let refData = {};
    knex.select()
        .from("playbooks")
        .where("playbooks.id", "=", requestID)
        .then((data) => {
            refData.playbook = JSON.parse(JSON.stringify(data));
        });
    const buildOptionsObject = (table) => {
        return knex(table).where("playbooks_id", "=", requestID);
    };
    const buildRefsObject = (table) => {
        return knex(table);
    };
    Promise.all(playbookKeys.map(buildOptionsObject)).then((data) => {
        // let tempRef = JSON.parse(JSON.stringify(data))
        playbookKeys.forEach((key, index) => {
            refData[key] = JSON.parse(JSON.stringify(data))[index];
        });
    });
    Promise.all(referenceKeys.map(buildRefsObject)).then((data) => {
        // let tempRef = JSON.parse(JSON.stringify(data))
        referenceKeys.forEach((key, index) => {
            refData[key] = JSON.parse(JSON.stringify(data))[index];
        });
        res.send(refData);
    });
});

module.exports = router;
