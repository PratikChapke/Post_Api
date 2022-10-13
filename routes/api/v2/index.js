const express = require('express');
const router = express.Router();

// inside router we define in file path and rout "path" like '/post_vto is send browser send http req that run 
// after mention require('./......); file or funtion are run ;

router.use('/post_vto' , require('./post_vto.js'));

module.exports = router;