// also requires http
const http = require('http');
const friendsList = require('./friends');
const radLog = require('./radLog');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const friendsArray = require('./friends');
const { keys } = require('./friends');
const app = express(); // call the express function to create a new app. What starts our express application

const server = http.createServer(app);

// Static files
app.use(express.static('public'))


// Third party middleware
// We need to add two pieces for this third party middleware

// decode json body data
app.use(bodyParser.json());

// decode "URL Encoded" form data
app.use(bodyParser.urlencoded({extended : true}));


// middleware takes req rest and a function called next
app.use('/friends*', radLog);

// basically 
// app.use((req, res, next)=>{
//     // if the request query 'awesome' exists
//     if(req.query.awesome){
//         console.log('AWESOME REQUEST!')
//         next()
//     }else{
//         next('REQUEST NOT AWESOME'); // if we give anything to the function next, it assumes it is an error.
//     }
// })


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

// REST API SECTION

// return all friends
app.get('/api/friends', (req, res)=>{
    res.json(friendsList)
})

// return only one friends
app.get('/api/friends/:handle', (req, res)=>{
    const { handle } = req.params;

    const friend = friendsList.find(element => {
        if(element.handle === handle){
            return true;
        }
        return false;
    })

    if(!friend){
        res.status(404).json()
    } else{
        res.json(friend);
    }
})

// post request method on the same route as above
app.post('/api/friends', (req, res)=>{
    console.log(req.body);
    if(!req.body.name || !req.body.handle || !req.body.skill){
        res.status(422).json({error: 'missing fields'}) //status code for unprocessable entity...i.e. something went wrong b/c you didn't me the info that I need.
    }
    // sanitizing your inputs!!
    const newFriend = {
        name: req.body.name,
        handle: req.body.handle,
        skill: req.body.skill
    }
    friendsList.push(newFriend);
    res.status(201).json();//status code for created something
})

app.delete('/api/friends/:handle', (req, res)=>{
    const { handle } = req.params;

    const friendIndex = friendsArray.findIndex(element => {
        if (element.handle === handle){
            return true;
        }
        return false;
    })

    if(friendIndex === -1){
        res.status(404).json()
    }else{
        console.log('Deleting', friendsArray[friendIndex]);
        friendsArray.splice(friendIndex, 1);
        res.status(204).json();
    }
})

app.put('/api/friends/:handle', (req, res)=>{
    const { handle } = req.params;

    const friendIndex = friendsArray.findIndex(element => {
        if (element.handle === handle){
            return true;
        }
        return false;
    })

    if(!req.body.name || !req.body.handle || !req.body.skill){
        res.status(422).json({error: 'missing fields'}) //status code for unprocessable entity...i.e. something went wrong b/c you didn't me the info that I need.
    }
    // sanitizing your inputs!!
    const newFriend = {
        name: req.body.name,
        handle: req.body.handle,
        skill: req.body.skill
    }

    if(friendIndex === -1){
        res.status(404).json()
    }else{
        console.log('Deleting', friendsArray[friendIndex]);
        friendsArray.splice(friendIndex, 1, newFriend);
        res.status(202).json();
    }

})

app.patch('/api/friends/:handle', (req, res)=>{
    const { handle } = req.params;

    const friendIndex = friendsArray.findIndex(element => {
        if (element.handle === handle){
            return true;
        }
        return false;
    })

    if(!req.body.name && !req.body.handle && !req.body.skill){
        res.status(422).json({error: 'missing fields'}) //status code for unprocessable entity...i.e. something went wrong b/c you didn't me the info that I need.
    }

    if(friendIndex === -1){
        res.status(404).json()
    }else{
        
        Object.keys(friendsArray[friendIndex]).forEach((key)=>{
            req.body.name ? friendsArray[friendIndex][key] = req.body.name : friendsArray[friendIndex][key];
            // req.body.handle ? friendsArray[friendIndex][key] = req.body.handle : friendsArray[friendIndex][handle];
            // req.body.skill ? friendsArray[friendIndex][key] = req.body.skill : friendsArray[friendIndex][skill];
        })
        res.status(202).json();
    }

})

// adding another route 
app.get('*', (req, res)=>{
    res.send(`<h1>${req.url.slice(1).toUpperCase()}</h1>`)
})


server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});