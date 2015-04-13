
console.log('Welcome to JSON');



var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser());

app.get('/cookie', function ( req, res){
	 console.log("Cookies: ", req.cookies);
	 res.status(200).json({ token: req.cookies.login_token });
});

app.listen(3002, function(	) {
	console.log('I\'m Listening .... ');
});
