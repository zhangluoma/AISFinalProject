var express = require('express');
var router = express.Router();
var um = require('userManagment');
/* GET users listing. */
router.post('/', function(req, res, next) {
	var userId = req.body.userId;
	var password = req.body.password;
	um.login(userId,password,function(){
		res.render('join', { title: 'Express', logedIn: "yes", userId:userId,footer: '' });
	},function(){
		res.send("fail!");
	});
  	//res.send(userId+password);
});

module.exports = router;
