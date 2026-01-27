const express = require('express');
const router = express.Router();
const Items = require('./../db/items.js')

router.get('/', function(req, res, next) {
  Items.find({}, (err, docs) => {
      res.send(docs)
  })
});
router.get('/create_item', (req, res, next) => {
    let title = req.query.title
    let price = req.query.price
    let count = req.query.count

    let item = new Items({title: title, price: price, count: count})
    item.save().then(() => res.send(item))
})
router.get('/count_plus', (req, res, next) => {
  Items.findById(req.query.id, (err, docs) => {
      docs.count += 1
      docs.save().then(() => res.send(docs))
  })
})
router.get('/count_minus', (req, res, next) => {
  Items.findById(req.query.id, function (err, docs) {
    docs.count -= 1;
    docs.save().then(() => res.send(docs))
  })
})

module.exports = router;
