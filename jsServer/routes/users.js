var express = require('express');
var router = express.Router();
let User = require('./../db/accounts.js');

router.get('/', function(req, res, next) {
  User.find({}, (error, docs) => {
    res.send(docs)
  })
});
router.post('/account', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password
  let id = req.body.id
  let user = new User({name: name, email: email, password: password, id: id, date: Date.now()})
  user.save().then(() => res.send(user))
})

module.exports = router;
