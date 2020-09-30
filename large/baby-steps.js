// console.log(process.argv[2]);
let holdSum = 0; 
for (let index = 2; index < process.argv.length; index++){
    holdSum += parseInt(process.argv[index], 10);
}

console.log(holdSum);