let express = require('express')
let router = express.Router()
let Likes = require('./../db/likes.js');

router.get('/', (err, res, next) => {
    Likes.find({}, (err, docs) => res.send(docs))
})
module.exports = router;