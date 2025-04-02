const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertUser(username, text, date) {
    const values = [username, text, date];
    const query = `
        INSERT INTO messages (username, text, date) VALUES ($1, $2, $3) RETURNING * 
    `
    await pool.query(query, values);
}

module.exports = {
    insertUser,
    getAllMessages
}