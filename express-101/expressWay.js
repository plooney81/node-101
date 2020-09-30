// also requires http
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express(); // call the express function to create a new app. What starts our express application

const server = http.createServer(app);

app.get('/', (req, res)=>{  // We don't need to extract the url or manually write an if to match it...Express does that for us
    res.send('<h1>Hello World</h1>');   // Also, express automatically sets the statusCode and 'content-type' header --> It defaults as plain/html
})

app.get('/favicon.ico', (req, res)=>{
    res.send('');
})

app.get('/another-page', (req, res)=>{
    res.send('<h1>Another-page</h1>');
})

app.get('*', (req, res)=>{
    res.send(`<h1>${req.url.slice(1).toUpperCase()}</h1>`)
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});