// 1 DNS Lookup
    // program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.
const dns = require('dns');
const readline = require('readline');
const { add } = require('../log');

let domainName;

// Readline portion to get a user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What domain name would you like to search? \n', (answer)=>{
    domainName = answer;
    // DNS lookup portion
    dns.lookup(domainName, (err, address, family)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Domain Name: '+domainName+'\nAddress: '+ address + '\nFamily: ' + family);
        }
    });
    rl.close();
})

