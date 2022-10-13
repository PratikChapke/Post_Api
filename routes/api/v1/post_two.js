const express = require('express');
 const router = express.Router();

 const post = require('../../../controllers/api/v1/posts')

 router.get('/', post.post  )
 
 module.exports = router ;