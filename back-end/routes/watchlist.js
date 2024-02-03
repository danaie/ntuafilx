const express = require('express');

const watchlistController = require('../controllers/watchlist');


const router =express.Router();

router.get('/',watchlistController.getall);
router.post('/add/:titleID',watchlistController.postMovie);
router.delete('/remove/:titleID',watchlistController.deleteMovie);

module.exports = router;