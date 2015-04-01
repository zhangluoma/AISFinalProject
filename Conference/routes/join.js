var express = require('express');
var router = express.Router();
var info = require('info');
/* GET home page. */
router.post('/', function(req, res, next) {
	var number = req.body.roomNumber;
  	res.render('page_after_login/videoRoom', {roomNumber: number});
});
module.exports = router;
