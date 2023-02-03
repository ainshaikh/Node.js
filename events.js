const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales();

myEmitter.on('newSale', ()=>{ 
    console.log('There was a sale');  // these are observer that observes the emit ('on' is observer)
})
myEmitter.on('newSale', ()=>{
    console.log('customer name: Ain');
})
myEmitter.on('newSale', stocks=>{
    console.log(`There are now ${stocks} items left in stocks`);
})

myEmitter.emit('newSale', 7); // this emits the events

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const server = http.createServer();
server.on('request', (req,res)=> {
    console.log('Request recieved');
    console.log(req.url);
});

server.on('request', (req,res)=> {
    res.end('another request recived');
});

server.on('close', ()=>{
    console.log('server closed');
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log("server waiting");
})
