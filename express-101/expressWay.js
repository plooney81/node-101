// also requires http
const http = require('http');
const friendsList = require('./friends');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express(); // call the express function to create a new app. What starts our express application

const server = http.createServer(app);

// adding a route to the '/' path
app.get('/', (req, res)=>{  // We don't need to extract the url or manually write an if to match it...Express does that for us
    res.send('<h1>Hello World</h1>');   // Also, express automatically sets the statusCode and 'content-type' header --> It defaults as plain/html
})

// adding another route to friends page
app.get('/friends', (req, res)=>{
    let friendsString = '';
    for(let index = 0; index < friendsList.length; index++){
        friendsString += `
        <li><a href="/friends/${friendsList[index].handle}">${friendsList[index].name}</a></li>
        `
    }

    res.send(`<ul>${friendsString}</ul>`);
})

app.get('/friends/:handle', (req, res)=>{
    const {handle} = req.params;
    const friend = friendsList.find(element => {
        if (element.handle === handle){
            return true;
        }
        return false;
    })
    if (!friend){
        res
            .status(404)
            .send(`<h1>No friend found with handle: ${handle}</h1>`)
    }
    res.send(`
        <h1>${friend.name}</h1>
        <h2>${friend.handle}</h2>
        <p>${friend.skill}</p>
    `)
})

// adding another route 
app.get('/favicon.ico', (req, res)=>{
    res.send('');
})

// adding another route 
app.get('/another-page', (req, res)=>{
    res.send('<h1>Another-page</h1>');
})

// adding another route 
app.get('*', (req, res)=>{
    res.send(`<h1>${req.url.slice(1).toUpperCase()}</h1>`)
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});