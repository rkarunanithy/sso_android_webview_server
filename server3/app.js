

console.log('Welcome to JSON');



var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser());

app.get('/redirect', function ( req, res){
	 console.log("Cookies: ", req.cookies);

	 //var host = "localhost";
	 var host = "10.0.2.2";
	 res.redirect("http://"+host+":3002/cookie?access_token="+req.cookies.login_token);
});

app.listen(3003, function(	) {
	console.log('I\'m Listening .... ');
});
