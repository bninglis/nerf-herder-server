const express = require("express");
const { Knex } = require("knex");
const router = express("router");
const knex = require("knex")(require("../knexfile"));

const characterKeys = [
    `id`,
    `users_id`,
    `playbooks_id`,
    `special_abilities_id`,
    `heritages_id`,
    `heritage_story`,
    `backgrounds_id`,
    `background_story`,
    `close_friend`,
    `close_friend_story`,
    `rival`,
    `rival_story`,
    `vices_id`,
    `vice_story`,
    `first_name`,
    `last_name`,
    `alias`,
    `look`,
    `playbook_actions`,
    `attune`,
    `command`,
    `consort`,
    `doctor`,
    `hack`,
    `helm`,
    `rig`,
    `scramble`,
    `scrap`,
    `skulk`,
    `study`,
    `sway`,
    "playbook",
];
const userKeys = [`id`, `username`, `password`, `email`];

const testCategories = (arrayKeys, sentObject) => {
    let tempTested = Object.keys(sentObject).sort();
    arrayKeys.sort().forEach((key) => {
        if (tempTested[0] === key) {
            tempTested.shift();
        }
    });
    if (tempTested.length !== 0) {
        return false;
    }
    return true;
};

router.post("/", (req, res) => {
    const sentUser = req.body;
    if (testCategories(userKeys, sentUser)) {
        knex("users")
            .select()
            .from("users")
            .where("username", "=", sentUser.username)
            .then((data) => {
                if (data.length !== 0) {
                    res.status(409).send("Username already taken");
                } else {
                    knex("users")
                        .insert(sentUser)
                        .then((data) => {
                            res.status(200).send();
                        });
                }
            });
    }
});

router.get("/login/:username", (req, res) => {
    requestedUser = req.params.username;
    knex("users")
        .select("*")
        .where("username", "=", requestedUser)
        .then((data) => {
            if (data.length === 0) {
                res.status(404).send("No one here by that name...");
            } else {
                res.status(200).send(data);
            }
        });
});

router.post("/characters", (req, res) => {
    const sentObject = req.body;
    if (testCategories(characterKeys, sentObject)) {
        console.log("sentObject:", sentObject);
        knex("characters")
            .select()
            .from("characters")
            .where("characters.id", "=", sentObject.id)
            .then((data) => {
                console.log("data:", data);
                if (data.length === 0) {
                    knex("characters")
                        .insert(sentObject)
                        .then((data) => {
                            res.status(200).send();
                        });
                } else {
                    knex("characters")
                        .where("characters.id", "=", sentObject.id)
                        .update(sentObject)
                        .then((data) => {
                            res.status(200).send();
                        });
                }
            });
    }
});

router
    .route("/characters/:id")
    .get((req, res) => {
        characterID = req.params.id;
        knex("characters")
            .select()
            .where("characters.id", "=", characterID)
            .then((data) => {
                if (data.length > 0) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send("Character not found");
                }
            });
    })
    .delete((req, res) => {
        characterID = req.params.id;
        knex("characters")
            .select("characters.id")
            .where("characters.id", "=", characterID)
            .then((data) => {
                if (data.length > 0) {
                    knex("characters")
                        .where("characters.id", "=", characterID)
                        .del()
                        .then((data) => {
                            res.status(200).send();
                        });
                } else {
                    res.status(404).send("Character not found");
                }
            });
    });

router.get("/user/:id/characters", (req, res) => {
    userID = req.params.id;
    knex("users")
        .select()
        .where("users.id", "=", userID)
        .then((data) => {
            if (data.length > 0) {
                knex.select("first_name", "last_name", "playbook", "characters.id", "alias")
                    .from("characters")
                    .innerJoin("users", "users.id", "characters.users_id")
                    .where("users_id", "=", userID)
                    .then((data) => {
                        res.status(200).send(data);
                    });
            } else {
                res.status(404).send("User not found");
            }
        });
});

module.exports = router;
