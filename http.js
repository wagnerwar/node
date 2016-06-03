var http = require('http');
var agente = new http.Agent({keepAlive: true,keepAliveMsecs: 2000});
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/teste.php',
  agent: agente  // create a new agent just for this one request
}, (res) => {
  // Do stuff with response
  console.log("FAZENDO UMA REQUISIÇÃO");
  for(var i in agente.sockets){
      console.log("SOCKET: " + i);
  }
  
})