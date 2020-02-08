const db = require('../db')

const getAllUsers = async () => {
    const users = await db.any("SELECT * FROM users;");
    return users;
};

const getUserById = async (id) => {
    console.log(id)
    const users = await db.any(`SELECT * FROM users WHERE id=${id}`)
    return users
};

const createNewUser = async (username, avatar_url) => {
    const insertQuery = `INSERT INTO users (username, avatar_url) VALUES ($1, $2)`
    await db.none(insertQuery, [username, avatar_url])
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
};