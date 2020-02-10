const db = require('../db')


const getAllShows = async () => {
    const shows = await db.any("SELECT * FROM shows JOIN genres ON shows.genre_id=genres.id;");
    return shows;
};

const getShowById = async (id) => {
    const show = await db.any(`SELECT * FROM shows WHERE id=${id};`);
    return show;
};

const getWatchlistShowById = async (show_id, user_id) => {
    const show = await db.oneOrNone('SELECT * FROM user_watchlist WHERE show_id=$1 AND user_id=$2', [show_id, user_id])
    return show
};

const getShowsByGenreId = async (genre_id) => {
    const shows = await db.any(`SELECT * FROM shows WHERE genre_id=${genre_id};`);
    return shows;
};

const createNewShow = async (title, img_url, user_id, genre_id) => {
    const insertQuery = `INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($1, $2, $3, $4)`
    await db.none(insertQuery, [title, img_url, user_id, genre_id])
};

const addShowToWatchlist = async (show_id, user_id) => {
    const insertQuery = `INSERT INTO user_watchlist (show_id, user_id) VALUES ($1, $2)`
    const show = await getWatchlistShowById(show_id, user_id)
    if (!show) {
        await db.none(insertQuery, [show_id, user_id])
    } 
}

module.exports = {
    getAllShows,
    getShowById,
    createNewShow,
    getShowsByGenreId,
    addShowToWatchlist
}