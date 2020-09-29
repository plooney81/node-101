const log = {
    info : (info)=>{console.info(`Info: ${info}`);},
    warning : (warning)=>{console.warn(`Warning: ${warning}`);},
    error : (error)=>{console.error(`Error: ${error}`);}
};

function square (number){
    return number * number;
}

function add (number1, number2){
    return number1 + number2;
}

// module.exports = log;
module.exports = {
    square : square,
    add : add,
    log : log,
}