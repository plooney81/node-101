

module.exports = function(filePath, extension, callback){
    const fs = require('fs');
    results = [];
    extension = '.' + extension;
    fs.readdir(filePath, 'utf8', (err, list)=>{
        if(err){
            return callback(err);
        }else{
            for (let index = 0; index < list.length; index++){
                const lastThreeChar = list[index].slice(list[index].length - (extension.length))
                if(lastThreeChar === extension && lastThreeChar.length === extension.length){
                    results.push(list[index])
                }
            }
            callback(null, results);
        }
    })
}