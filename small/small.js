// 2
// console.log("Hello World, I am in Node.");

//3 
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Hello World");
// });

// server.listen(port, hostname, ()=>{
//     console.log(`Server is running at http://${hostname}:${port}/`);
// });

//6
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: 'HEY THERE PARTNER'
}))