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

const getUserByUsername = async (username) => {
	const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [username])
	return user;
}

const createNewUser = async (user) => {
    const insertQuery = `INSERT INTO users (username, avatar_url, password_digest) VALUES ($1, $2, $3)`
    await db.none(insertQuery, [user.username, user.avatar_url, user.password])
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    getUserByUsername
};