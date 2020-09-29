const fs = require('fs');
const nl = require('./my-first-io');
const fileName = process.argv[2];
fs.readFile(fileName, 'utf8', (err, data)=>{
    if(err) console.log(err);
    console.log(nl.newLines(data));
})