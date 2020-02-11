const express = require('express');
const router = express.Router();
const showQueries = require('../db/queries/shows');

// Retrieve all shows
router.get('/', async (req, res, next) => {
    try {
        let shows = await showQueries.getAllShows()
        res.json({
            payload: shows,
            message: 'Retrieved all shows',
            err: false
        })
    } catch (err) {
        res.status(500).json({
          payload: null,
          msg: "Failed retrieving all shows.",
          err: true
        })
    }
})

// Retrieve show by id
router.get('/:id', async (req, res, next) => {
    let id = req.params.id
    console.log(req.params)
    try {
      let show = await showQueries.getShowById(id);
      res.json({
        payload: show,
        message: 'Retrieved show.',
        err: false
      })
    } catch (err) {
      res.status(500).json({
        payload: null,
        msg: "Failed retrieving selected show.",
        err: true
      })
    }
});

// Retrieve shows by genre id
router.get('/genre/:id', async (req, res, next) => {
  let id = req.params.id
  console.log(req.params)
  try {
    let shows= await showQueries.getShowsByGenreId(id);
    res.json({
      payload: shows,
      message: 'Retrieved shows.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving shows.",
      err: true
    })
  }
});

// Retrieve shows by user id
// router.get('/user/:id', async (req, res, next) => {
//   let id = req.params.id
//   console.log(req.params)
//   try {
//     let shows = await showQueries.getShowsByUserId(id);
//     res.json({
//       payload: shows,
//       message: 'Retrieved shows.',
//       err: false
//     })
//   } catch (err) {
//     res.status(500).json({
//       payload: null,
//       msg: "Failed retrieving shows.",
//       err: true
//     })
//   }
// });

// Create new show
router.post('/create', async (req, res, next) => {
    try {
      await showQueries.createNewShow(req.body.title, req.body.img_url, req.body.genre_id);
      res.json({
        message: 'Show created.',
        err: false
      })
    } catch (err) {
      res.status(500).json({
        payload: null,
        msg: "Failed creating show.",
        err: true
      })
    }
});

// Add show to watchlist
router.post('/watchlist/:show_id/:user_id', async (req, res, next) => {
  try {
    await showQueries.addShowToWatchlist(req.params.show_id, req.params.user_id)
    res.json({
      message: 'Show added to watchlist.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed adding show to watchlist.",
      err: true
    })
  }
})

// Get list of watchers
router.get('/watchlist/watchers/:show_id', async (req, res, next) => {
  try {
    let watchers = await showQueries.getWatchers(req.params.show_id)
    res.json({
      payload: watchers,
      message: 'Retrieved watchers.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving watchers.",
      err: true
    })
  }
})

// get watchlist
router.get('/watchlist', async (req, res, next) => {
  try {
    let watchlist = await showQueries.getWatchList()
    res.json({
      payload: watchlist,
      message: 'Retrieved watchlist.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving watchlist.",
      err: true
    })
  }
})
module.exports = router;