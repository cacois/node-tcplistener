var net = require('net');
var client_ctr = 0;

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var server = net.createServer(function (socket) {

	socket.on('data', function(data){
		console.log("Client command: " + data);

		if (String(data).trim() == "disconnect") console.log("Disconnect command received");
	});


    client_ctr++;
    console.log("Client " + client_ctr + " connected");
    socket.write("Connected to server.\r\n");
    socket.pipe(socket);
});

server.listen(8080, "127.0.0.1");
