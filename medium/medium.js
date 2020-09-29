// 1 DNS Lookup
    // program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.
const dns = require('dns');
const readline = require('readline');

// let domainName;

// // Readline portion to get a user input
// const domainQuestion = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// domainQuestion.question('What domain name would you like to search? \n', (answer)=>{
//     domainName = answer;
//     // DNS lookup portion
//     dns.lookup(domainName, (err, address, family)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Domain Name: '+domainName+'\nIP Address: '+ address + '\nFamily: ' + family);
//         }
//     });
//     domainQuestion.close();
// })

// 2 Read a file

const fs = require('fs');

const anotherQuestion = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

anotherQuestion.question('What file would you like to read? \n', (fileName) =>{
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(err) throw err;
        console.log(data);
    })
    anotherQuestion.close();
})

// 3 read and write to a file

