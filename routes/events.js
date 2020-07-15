const express = require('express');
const router = express.Router();

// @route     GET api/events
// @desc      Get all users events
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all events');
});

module.exports = router;