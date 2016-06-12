
var websocket = require('ws').Server;
var http = require('http')
var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname+"/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server is listening on %d",port)

var wss = new websocket({server:server})
console.log("websocket server created")
//console.log(wss);
var id = 0;
var count = 0;
var clients = {};
wss.on('connection',function(ws){
	console.log('in websocket');	 	
	id = count++;

	//console.log(connection);
	clients[id] = ws;
	 console.log((new Date()) + ' Connection accepted [' + id + ']');

	 ws.on('message',function(message){
	 	var msgString = message;
	 	console.log(msgString);
	 	//msgString = 'cjeec';
	 	for(var i in clients){
	 		clients[i].send(msgString);
	 	}
	 });
	 ws.on('close', function(reasonCode, description) {
    delete clients[id];
    console.log((new Date()) + ' Peer disconnected.');
});
})
