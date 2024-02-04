const express = require('express');

const watchlistController = require('../controllers/watchlist');


const router =express.Router();

router.get('/',watchlistController.getall);
router.post('/:titleID',watchlistController.postMovie);
router.delete('/:titleID',watchlistController.deleteMovie);

module.exports = router;