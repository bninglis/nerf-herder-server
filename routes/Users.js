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
    `close_friend_portrait`,
    `rival`,
    `rival_story`,
    `rival_portrait`,
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
const userKeys = [`id`, `username`];

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
        const finalUserObject = { ...sentUser, password: "", email: "" };
        knex("users")
            .select()
            .from("users")
            .where("username", "=", sentUser.username)
            .then((data) => {
                if (data.length !== 0) {
                    res.status(409).send("Username already taken");
                } else {
                    knex("users")
                        .insert(finalUserObject)
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
        knex("characters")
            .select()
            .from("characters")
            .where("characters.id", "=", sentObject.id)
            .then((data) => {
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
        let servedData = null;
        knex("characters")
            .select()
            .where("characters.id", "=", characterID)
            .then((data) => {
                if (data.length > 0) {
                    const characterData = JSON.parse(JSON.stringify(data))[0];
                    const requestID = characterData.playbooks_id;
                    servedData = {
                        characterData: characterData,
                        refData: {},
                    };
                    const playbookKeys = [
                        "items",
                        "special_abilities",
                        "friends",
                        "build_suggestions",
                    ];
                    const referenceKeys = [
                        "heritages",
                        "backgrounds",
                        "vices",
                        "signature",
                        "aliases",
                        "first_names",
                        "last_names",
                        "actions",
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
                        servedData.refData = refData;
                        res.status(200).send(servedData);
                    });
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
