const { Client } = require("pg");
require('dotenv').config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR ( 255 ),
        text VARCHAR ( 255 ),
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages(username, text, added)
    VALUES ('Edwardo', 'Hello, world!', NOW());
`;


async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DB_EXTERNAL_URL,
        ssl: { rejectUnauthorized: false },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();