// Write a program that performs an HTTP GET request to a URL provided to you  
    // as the first command-line argument. Write the String contents of each  
    // "data" event from the response to a new line on the console (stdout).  
   
const http = require('http');
const url = process.argv[2];

http.get(url, (res) =>{
    res.setEncoding('utf-8');
    
    let rawData = '';
    res.on('data', (chunk) => {console.log(chunk)});
    // res.on('end', ()=>{
    //     let prevNewLineIndex = 0;
    //     for (let index = 0; index < rawData.length; index++){
    //         // console.log(rawData[index]);
    //         if(rawData[index] === '\n' && index != 0){
    //             console.log(rawData.slice(prevNewLineIndex, index));
    //             prevNewLineIndex = index + 1;
    //         }
    //     }
    // })

}) 