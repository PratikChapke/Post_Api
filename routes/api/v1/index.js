const express = require('express');

const router = express.Router();


router.use('/post', require('./post_two'))
router.use('/posts', require('./posts'));


module.exports = router;