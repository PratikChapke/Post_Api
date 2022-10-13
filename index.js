const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3030;
const db = require('./config/mongoose')

// use express router
app.use('/', require('./routes'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})