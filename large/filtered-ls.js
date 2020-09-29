// Create a program that prints a list of files in a given directory,  
// filtered by the extension of the files. You will be provided a directory  
// name as the first argument to your program (e.g. '/path/to/dir/') and a  
// file extension to filter by as the second argument.

const fs = require('fs');
const filePath = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(filePath, 'utf8', (err, list)=>{
    if(err){
        console.log(err);
    }else{
        for (let index = 0; index < list.length; index++){
            const lastThreeChar = list[index].slice(list[index].length - (extension.length))
            if(lastThreeChar === extension && lastThreeChar.length === extension.length){
                console.log(list[index])
            }
        }
    }
})