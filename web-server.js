// Building a simple web server

const http = require('http');
const server = http.createServer((req,res)=>{

    res.end("Hello from the server");
});
server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening to request on the port 8000");
})