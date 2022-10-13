const express = require('express')

const router = express.Router();

const post = require('../../../controllers/api/v2/post_vto.js');

//  this was router 
//  we import controller file module.exports." file_name " 
//  we use router package  get method than only ( '/' ,  const veriable . inside the export controller file 
//  in defined module export   )

router.get('/', post.post_vto)

module.exports = router;