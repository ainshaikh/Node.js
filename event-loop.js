// EVENT LOOP PRACTICE

const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 is finished"));

fs.readFile("test-file.text", () => {
  console.log("I/O finished");
  console.log("------------------");
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("timer 3 finished"), 5000);
  process.nextTick(() => console.log("process.nextTick"));

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>{
//     console.log(Date.now() -start, "password encrypted")
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>{
//     console.log(Date.now() -start, "password encrypted")
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>{
//     console.log(Date.now() -start, "password encrypted")
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>{
//     console.log(Date.now() -start, "password encrypted")
//   });

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512',);
    console.log(Date.now()-start, 'password encrypted');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512',);
    console.log(Date.now()-start, 'password encrypted');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512',);
    console.log(Date.now()-start, 'password encrypted');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512',);
    console.log(Date.now()-start, 'password encrypted');
    
});

console.log("Hello from the top-level-code");
