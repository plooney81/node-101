function readNewLineChar(text){
    let numSpaces = 0;
    for (let index = 0; index < text.length; index++){
        if(text[index] === '\n'){
            numSpaces += 1;
        }
    }
    return numSpaces;
}

const fs = require('fs');
data = fs.readFileSync(process.argv[2], 'utf8');
console.log(readNewLineChar(data));