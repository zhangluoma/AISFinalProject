var express = require('express');
var router = express.Router();
var um = require('userManagment');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userName){
  	um.login(req.session.userName,req.session.password,function(){
  		res.render('join', {title: 'Welcome', logedIn: "yes", footer: ''});
	},function(){
		res.render('index', { title: 'Welcome', logedIn: "no", footer: '' });
	});
  }else{
  	res.render('index', { title: 'Welcome', logedIn: "no", footer: '' });
  }
});
router.get('/profile', function(req, res, next) {
   um.login(req.session.userName,req.session.password,function(){
  		res.render('profile', {title: 'profile', logedIn: "yes", footer: ''});
	},function(){
		res.render('index', { title: 'Welcome', logedIn: "no", footer: '' });
	});
});
router.get('/dashboard', function(req, res, next) {
   um.login(req.session.userName,req.session.password,function(){
  		if(req.session.roomNumber!=undefined){
  			res.render('page_after_login/body', {roomNumber: req.session.roomNumber});
  		}else{
  			res.render('join', { title: 'Welcome', logedIn: "yes", userId:req.session.userName,footer: '' });
  		}
	},function(){
		res.render('index', { title: 'Welcome', logedIn: "no", footer: '' });
	});
});
router.post('/login', function(req, res, next) {
	var userId = req.body.userId;
	var password = req.body.password;
	var sess;
	um.login(userId,password,function(){
		sess = req.session;
		//sess.userName=userId;
		//req.session.password=password;
		sess.userName=userId;
		sess.password=password;
		res.render('join', { title: 'Welcome', logedIn: "yes", userId:userId,footer: '' });
	},function(){
		res.send("fail!");
	});
  	//res.send(userId+password);
});
router.get('/joinRoomRequest', function(req, res, next) {
	um.login(req.session.userName,req.session.password,function(){
		var number = req.param('roomNumber');
		req.session.roomNumber=number;
		console.log(number);
  		res.render('page_after_login/body', {roomNumber: number});
	},function(){
		res.render('index', { title: 'Welcome', logedIn: "no", footer: '' });
	});
});
module.exports = router;
