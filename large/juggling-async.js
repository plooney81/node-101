const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]];

function printResults(dataArray){
    if(dataArray.length === 3){
        // console.log(dataArray.url, dataArray[index]. dataArray.length);
        for(let index = 0; index < urls.length; index++){
            for (let innerIndex = 0; innerIndex < dataArray.length; innerIndex++){
                if(dataArray[innerIndex].url === urls[index]){
                    console.log(dataArray[innerIndex].data);
                }
            }
        }
    }
}

let allRawData = [];
urls.forEach((url)=>{
    let urlObject = {};
    http.get(url, (res)=>{
        let rawData = '';
        res.on('data', (chunk) => {rawData += chunk});
        res.on('end', ()=>{
            urlObject['url'] = url;
            urlObject['data'] = rawData;
            allRawData.push(urlObject);
            printResults(allRawData);
        })
    })
})