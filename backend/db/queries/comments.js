const db = require('../db');

const getCommentsByShowId = async (id) => {
    const shows = await db.any(`SELECT * FROM comments WHERE show_id=${id}`)
    return shows
}

const addNewComment = async (comment_body, user_id, show_id) => {
    const insertQuery = `INSERT INTO comments (comment_body, user_id, show_id) VALUES ($1, $2,$3)`
    await db.none(insertQuery, [comment_body, user_id, show_id])
}

module.exports = {
    getCommentsByShowId,
    addNewComment
}