const express = require('express');
const router = express.Router();
const genreQueries = require('../db/queries/genres');

// Retrieve all genres
router.get('/', async (req, res, next) => {
    try {
        let genres = await genreQueries.getAllGenres()
        res.json({
            payload: genres,
            message: 'Retrieved all genres.',
            err: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: "Failed retrieving all genres.",
            err: true
          })
    }
});

router.post('/create', async (req, res, next) => {
    try {
      await genreQueries.createNewGenre(req.body.genre_name);
      res.json({
        message: 'Genre created.',
        err: false
      })
    } catch (err) {
      res.status(500).json({
        payload: null,
        msg: "Failed creating genre.",
        err: true
      })
    }
  })

module.exports = router;