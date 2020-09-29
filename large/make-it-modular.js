const fp = require('./mymodule');

const filePath = process.argv[2];
const fileExtension = process.argv[3];

fp(filePath, fileExtension, function(err, data){
    data.forEach(filename => console.log(filename));
});
