const express = require('express');
const router = express.Router();

// @route     GET api/assigned
// @desc      Get all users assigned tasks
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all assigned tasks');
});

// @route     POST api/assigned
// @desc      Add new assigned tasks
// @access    Private
router.post('/', (req, res) => {
  res.send('Add new assigned task');
});

// @route     PUT api/assigned/:id
// @desc      Get all users assigned tasks
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update assigned task');
});

// @route     DELETE api/assigned/:id
// @desc      Get all users assigned tasks
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete assigned task');
});

module.exports = router;
