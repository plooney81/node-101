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

// const anotherQuestion = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout
// })

// anotherQuestion.question('What file would you like to read? \n', (fileName) =>{
//     fs.readFile(fileName, 'utf8', (err, data)=>{
//         if(err) console.log(err);
//         console.log('filename: ' + fileName);
//         console.log(data);
//     })
//     anotherQuestion.close();
// })

// 3 read and write to a file
    // Write a program to prompt the user for two file names, the first file will be the input and the 
    // second file will be the output. The program will read in the contents of the input file, convert 
    // its text to all caps, and then write the resulting contents to the output file.
let inputFile;
let outputFile;
let inputFileText;
const twoQuestionsNow = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

twoQuestionsNow.question('What file would you like to read? \n', (inputFileName)=>{
    inputFile = inputFileName;
    twoQuestionsNow.question('What file would you like to write to?\n', (outputFileName)=>{
        outputFile = outputFileName;
        twoQuestionsNow.close();
        fs.readFile(inputFile, 'utf8', (err, data)=>{
            if(err) console.log(err);
            inputFileText = data.toUpperCase();
        
            fs.writeFile(outputFile, inputFileText, 'utf8', (error)=>{
                if(error) console.log(error);
                console.log('The file has been saved!');
            })
        })
    })
})

