const http = require('http'); 
const PORT = 5000; 

const server = http.createServer(function(request,response){ 
    if(request.url =="/"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<html><body><h1>welcome to home page of http server</h1></body></html>");
        response.end();
    }
    else if(request.url =='/about'){ 
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<html><body><h1>welcome to about page of http server</h1></body></html>");
        response.end();
    }
    else { 
        response.end("invalid request");
    }
}); 

server.listen(PORT, ()=>{console.log("server is listning on port "+PORT)});
