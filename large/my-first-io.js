const fs = require('fs');
data = fs.readFileSync(process.argv[2], 'utf8');
let numSpaces = 0;
for (let index = 0; index < data.length; index++){
    if(data[index] === '\n'){
        numSpaces += 1;
    }
}

console.log(numSpaces);