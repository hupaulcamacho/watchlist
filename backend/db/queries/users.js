const db = require('../db')

const getAllUsers = async () => {
    const users = await db.any("SELECT * FROM users;");
    return users;
};

const getUserById = async (id) => {
    console.log(id)
    const users = await db.any(`SELECT username, avatar_url, id FROM users WHERE id=${id}`)
    return users
};

const getUserByUsername = async (username) => {
	const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [username])
	return user;
}

const createNewUser = async (user) => {
    const insertQuery = `INSERT INTO users (username, avatar_url, password_digest) VALUES ($1, $2, $3)`
    await db.none(insertQuery, [user.username, user.avatar_url, user.password])
    return true
};

const getUserWatchList = async (id) => {
    const watchList = await db.any(`SELECT * FROM user_watchlist JOIN shows ON user_watchlist.show_id=shows.id WHERE user_id=${id}`)
    return watchList
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    getUserByUsername,
    getUserWatchList
};