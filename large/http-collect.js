const http = require('http');
const url = process.argv[2];

http.get(url, (res) =>{
    res.setEncoding('utf-8');
    
    let rawData = '';
    res.on('data', (chunk) => {rawData += chunk});
    res.on('end', ()=>{
        console.log(`${rawData.length}`);
        console.log(rawData);
    })

}) 