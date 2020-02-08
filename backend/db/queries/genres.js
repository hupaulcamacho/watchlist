const db = require('../db')

const getAllGenres = async () => {
    const genres  = await db.any("SELECT * FROM genres;");
    return genres
};

const createNewGenre = async (genre_name) => {
    const insertQuery = `INSERT INTO genres (genre_name) VALUES ($1)`
    await db.none(insertQuery, [genre_name])
}

module.exports = {
    getAllGenres,
    createNewGenre
}