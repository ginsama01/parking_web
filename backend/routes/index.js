var express = require('express');
const { verifyUser, verifyOwner, verifyAdmin } = require('../authenticate');
var router = express.Router();

/* GET home page. */
router.get('/', verifyUser, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.json({"username": "thu"})
})
module.exports = router;
