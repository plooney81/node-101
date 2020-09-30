const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res)=>{
    const name = req.query.name || 'World';
    res.send(`<h1>Hello ${name}</h1>`);
})

app.get('/greet/:name', (req, res)=>{
    const {name} = req.params;

    res.send(`<h1>Hello, ${name}!</h1>`)
})

app.get('/year', (req, res)=>{
    const {age} = req.query;
    res.send(`<h1>You were born in ${2020 - parseInt(age, 10)}</h1>`)
})

app.get('/:animals', (req, res)=>{
    const {animals} = req.params
    let returnStatement='';
    if(animals === 'cats'){
        returnStatement = 'Meow!';
    }else if(animals === 'dogs'){
        returnStatement = 'Woof!';
    }else if(animals === 'cats_and_dogs'){
        returnStatement = 'Dogs and cats living together...mass hysteria!!';
    }else(
        returnStatement = 'Oops'
    )
    res.send(`<h1>${returnStatement}</h1>`);

})


server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});