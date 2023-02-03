const fs = require('fs');
const { STATUS_CODES } = require('http');
const server = require('http').createServer();

server.on('request', (req, res)=>{

    // SOLUTION 1
//     fs.readFile('test-file.txt', (err, data)=>{
//         if(err) console.log("error");
//         res.end(data);
//     })
// });

// Solution 2 using streams
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk =>{
    //     res.write(chunk);
    // })
    // readable.on('end', ()=>{
    //     res.end();
    // })
    // readable.on('error', err=>{
    //     console.log('error');
    //     res.statusCode = 500;
    //     res.end('file not found');
    // });

    // Solution 3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res); // readable source.pipe(writable destination)
    

});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('listening........');
});