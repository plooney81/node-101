const log = {
    info : (info)=>{console.info(`Info: ${info}`);},
    warning : (warning)=>{console.warning(`Warning: ${warning}`);},
    error : (error)=>{console.error(`Error: ${error}`);}
};

module.exports = log;