// 2
// console.log("Hello World, I am in Node.");

//3 
const http = require('http');

//Dont do anything with the request
const server = http.createServer((request, response)=>{
    response.statusCode = 200; // We will always reply with 200 for this server
    response.setHeader('Content-Type', 'text/plain'); // We will send back plain text
    response.end("Hello World");// finalizes the respone and sends it back to the client
});

const hostname = '127.0.0.1'; // local IP address
const port = 3000; // 3000 port is usually open.

// cant except requests until our server is open and listening for requests, below is how we do that.
server.listen(port, hostname, ()=>{
    // this function will run once the function starts listening.
    console.log(`Server is running at http://${hostname}:${port}/`);
});

//6
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: 'HEY THERE PARTNER'
}))