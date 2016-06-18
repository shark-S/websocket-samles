# websocket-samples
Some basic examples using websockets and nodejs

First you can try basic.js. In basic.js when client goes to localhost:5000 or port which specified , it send a message to server and then server replies back a mesage to client.

Now second server.js in which there are more than one client is connected then when new client is joined , it send message(a random number which you can see in console) to server then server send this message to all clients which is connected.

For more information checkout [nodejs Websocket library](https://github.com/websockets/ws)

Third multiroom-server.js is based on socket.io. socket.io is a websocket API. This example shows how to create multiple rooms that can be used in chat. You can see all process  in console how it works. For more information see https://bitbucket.org/shark_S/webrtc-codelab  

Check Also [Screen Share App](https://github.com/shark-S/Share_your_screen) made with nodejs , websockets and WebRTC.
