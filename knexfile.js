// Update with your config settings.
require("dotenv").config();
console.log(process.env.DB_HOST);

module.exports = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        charset: "utf8",
    },
};
