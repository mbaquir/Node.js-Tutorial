 var net = require('net')
 var server = net.createServer(function (socket) {

      // socket handling logic
      var date = new Date();
      socket.end(date.getFullYear().toString() + "-" + (Number(date.getMonth()) + 1 ).toString() + "-" + "0" + date.getDate().toString() + " " + date.getHours().toString() + ":" + date.getMinutes().toString() + "\n" );     // starts at 0


//      socket.end("Mohammed");
 })
server.listen(Number(process.argv[2]))