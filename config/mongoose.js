const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Api');

const db = mongoose.connection;
db.on('error', console.error.bind(console , " error connection to mongosDB"));

db.once('open', function (){
    console.log('Connected to database a:: mongoseDB')
})
module.exports = db;