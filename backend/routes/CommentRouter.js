const express = require('express');
const router = express.Router();
const commentQueries = require('../db/queries/comments');

// Retrieve all comments by show id

router.get('/show/:show_id', async (req, res, next) => {
    try {
        let comments = await commentQueries.getCommentsByShowId(req.params.show_id);
        res.json({
            payload: comments,
            message: 'Retrieved all comments',
            err: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: "Failed retrieving all comments.",
            err: true
          })
    }
});

router.post('/new/:user_id/:show_id', async (req, res, next) => {
    try {
        await commentQueries.addNewComment(req.body.comment_body, req.params.user_id, req.params.show_id);
        res.json({
            message: 'Comment made.',
            err: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: "Failed making comment.",
            err: true
          })
    }
});

module.exports = router;