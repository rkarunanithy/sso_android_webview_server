console.log('Welcome to JSON');



var express = require('express');
var app = express();


var cookieParser = require('cookie-parser')


app.get('/login', function ( req, res){
    res.cookie('login_token', +new Date(), { maxAge: 3600000, path: '/' }); 
	//var host = "localhost";
	var host = "10.0.2.2";
	res.redirect('http://'+host+':3003/redirect'); 
});

app.listen(3001, function(	) {
	console.log('I\'m Listening .... ');
});



