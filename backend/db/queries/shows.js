const db = require('../db')

const getAllShows = async () => {
    const shows = await db.any("SELECT * FROM shows;");
    return shows;
};

const getShowById = async (id) => {
    const show = await db.any(`SELECT * FROM shows WHERE id=${id};`);
    return show;
};

const getShowsByGenreId = async (show_id, genre_id) => {
    const shows = await db.any(`SELECT * FROM shows WHERE id=${show_id} AND genre_id=${genre_id};`);
    return shows;
};

const createNewShow = async (title, img_url, user_id, genre_id) => {
    const insertQuery = `INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($1, $2, $3, $4)`
    await db.none(insertQuery, [title, img_url, user_id, genre_id])
};

module.exports = {
    getAllShows,
    getShowById,
    createNewShow,

}