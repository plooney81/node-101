// also requires http
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express(); // call the express function to create a new app.

const server = http.createServer(app);

app.get('/', (req, res)=>{  // We don't need to extract the url or manually write an if to match it...Express does that for us
    res.send('Hello World');   // Also, express automatically sets the statusCode and 'content-type' header.
})

app.get('/favicon.ico', (req, res)=>{
    res.send('');
})

app.get('*', (req, res)=>{
    res.send('This is not the home page')
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});