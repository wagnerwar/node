const http = require('http');
const net = require('net');
const url = require('url');
var srv = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('okay');
});

// Tratamento de eventos relacionados com nosso servidor

srv.on('connection',function (socket) {
    
    console.log("Evento connection sendo chamado");
    console.log("Log de teste");
 });
 
 srv.on('request',function (request,response) {
    
    console.log("Evento REQUEST");
 });
 
 srv.listen(3000,function(){
     console.log("Aberta uma porta ");
     
 });
 
 // Fazendo uma conexão
 var agente = new http.Agent({keepAlive: true,keepAliveMsecs: 2000});
 var options = {
  agent: agente,
  hostname: 'localhost',
  port: 3000, 
 };
 var conecao = http.request(options);
 
 
 
 
