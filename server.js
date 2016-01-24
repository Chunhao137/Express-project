var express = require('express');
var app = express(); 
var PORT = 3000
var middleware = require('./middleware');
//get represents the http method 
// app.get('/', function(req, res){
// 	//req info sent from user
// 	//res info you want to send back to user
// 	res.send('Hello express')

// })


app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('About')
})

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
	console.log('you are listening on ' + PORT)
});