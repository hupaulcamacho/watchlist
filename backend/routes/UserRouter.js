const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users')

// Retrieve all users
router.get('/', async (req, res, next) => {
  try {
    let users = await userQueries.getAllUsers()
    res.json({
      payload: users,
      message: 'Retrieved all users.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving all users.",
      err: true
    })
  }
});

// Retrieve user by id
router.get('/:id', async (req, res, next) => {
  let id = req.params.id
  console.log(req.params)
  try {
    let user = await userQueries.getUserById(id);
    res.json({
      payload: user,
      message: 'Retrieved user.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed retrieving selected user.",
      err: true
    })
  }
});

router.post('/create', async (req, res, next) => {
  try {
    await userQueries.createNewUser(req.body.username, req.body.avatar_url);
    res.json({
      message: 'User created.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed creating user.",
      err: true
    })
  }
});

router.get('/watchlist/:id', async (req, res, next) => {
  try {
    let watchList = await userQueries.getUserWatchList(req.params.id);
    res.json({
      payload: watchList,
      message: 'Retrieved user watchlist.',
      err: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      msg: "Failed getting watchlist.",
      err: true
    })
  }
})

module.exports = router;
