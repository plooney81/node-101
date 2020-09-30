const http = require('http');

const server = http.createServer((req, res)=>{
    const {url} = req; // same as --> const url = req.url; "Object destructuring"
    console.log('The URL path is: ' + url);

    // to handle diff. pages we can use url as part of an if/else statment:
    if(url === '/'){
        res.statusCode = 200; // We will always reply with 200 for this server
        res.setHeader('Content-Type', 'text/plain'); // We will send back plain text
        res.end("Hello World");// finalizes the respone and sends it back to the client
    }else if (url === '/favicon.ico'){
        res.statusCode = 200;
        res.end('')
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is not the home page')
    }

});

const hostname = '127.0.0.1'; // local IP address
const port = 3000; // 3000 port is usually open.

// cant except requests until our server is open and listening for requests, below is how we do that.
server.listen(port, hostname, ()=>{
    // this function will run once the function starts listening.
    console.log(`Server is running at http://${hostname}:${port}/`);
});