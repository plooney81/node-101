const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res)=>{
    res.send('Received a GET HTTP method');
})

app.post('/', (req, res)=>{
    res.send('Received a POST HTTP method');
})

app.put('/', (req, res)=>{
    res.send('Received a PUT HTTP method');
})

app.delete('/', (req, res)=>{
    res.send('Received a DELETE HTTP method');
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})