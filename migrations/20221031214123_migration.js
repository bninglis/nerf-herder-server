/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("playbooks", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("playbook").notNullable();
            table.string("summary").notNullable();
            table.string("tagline").notNullable();
            table.text("overview").notNullable();
            table.text("xp_gain").notNullable();
            table.text("xp_advice").notNullable();
            table.text("character_questions").notNullable();
            table.string("starting_actions").notNullable();
            table.text("build_suggestions").notNullable();
            table.string("starting_ability").notNullable();
            table.text("starting_ability_summary").notNullable();
            table.text("starting_ability_clarification").notNullable();
            table.text("items_description").notNullable();
            table.text("playing_advice").notNullable();
            table.text("xeno_advice").notNullable();
            table.index("id")
        })
        .createTable("friends", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true })).notNullable();
            table.uuid("playbooks_id").notNullable();
            table.string("type").notNullable();
            table.string("name").notNullable();
            table.text("description").notNullable();
            table.index("id")
            table
                .foreign("playbooks_id")
                .references("id")
                .inTable("playbooks")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("items", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.uuid("playbooks_id").notNullable();
            table.string("item").notNullable();
            table.text("description").notNullable();
            table.index("id")
            table
                .foreign("playbooks_id")
                .references("id")
                .inTable("playbooks")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("special_abilities", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.uuid("playbooks_id").notNullable();
            table.string("name").notNullable();
            table.text("description").notNullable();
            table.text("clarification").notNullable();
            table.index("id")
            table
                .foreign("playbooks_id")
                .references("id")
                .inTable("playbooks")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("users", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("username").notNullable();
            table.string("password").notNullable();
            table.string("email").notNullable();
            table.index("id")
        })
        .createTable("heritages", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("heritage").notNullable();
            table.text("description").notNullable();
            table.index("id")
        })
        .createTable("backgrounds", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("background").notNullable();
            table.text("description").notNullable();
            table.index("id")
        })
        .createTable("vices", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("vice").notNullable();
            table.text("description").notNullable();
            table.index("id")
        })
        .createTable("first_names", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("name").notNullable();
            table.index("id")
        })
        .createTable("last_names", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("name").notNullable();
            table.index("id")
        })
        .createTable("aliases", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("alias").notNullable();
            table.index("id")
        })
        .createTable("signature", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.string("item").notNullable();
            table.index("id")
        })
        .createTable("characters", function (table) {
            table.uuid("id", (options = { useBinaryUuid: false, primaryKey: true }));
            table.uuid("users_id").notNullable();
            table.uuid("playbooks_id").notNullable();
            table.uuid("special_abilities_id").notNullable();
            table.uuid("heritages_id").notNullable();
            table.text("heritage_story").notNullable();
            table.uuid("backgrounds_id").notNullable();
            table.text("background_story").notNullable();
            table.string("close_friend").notNullable();
            table.text("close_friend_story").notNullable();
            table.string("rival").notNullable();
            table.text("rival_story").notNullable();
            table.uuid("vices_id").notNullable();
            table.text("vice_story").notNullable();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("alias").notNullable();
            table.text("look").notNullable();
            table.index("id")
            table
                .foreign("playbooks_id")
                .references("id")
                .inTable("playbooks")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .foreign("users_id")
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .foreign("special_abilities_id")
                .references("id")
                .inTable("special_abilities")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .foreign("heritages_id")
                .references("id")
                .inTable("heritages")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .foreign("backgrounds_id")
                .references("id")
                .inTable("backgrounds")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .foreign("vices_id")
                .references("id")
                .inTable("vices")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
