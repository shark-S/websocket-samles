
var websocket = require('ws').Server;
var http = require('http')
var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname+'/sample'));

var server = http.createServer(app);
server.listen(port);
var wss = new websocket({server:server});
console.log('server is running on port: '+port);
wss.on('connection',function(ws){
	//console.log(ws);
	//var connection = r.accept(null,r.origin);
	ws.on('message',function(message){
		console.log(message);
		setTimeout(function(){
			ws.send('this is a websocket example');
		},1000);

	});
	ws.on('close',function(connection){
		console.log('connection closed');
	});
});