function radLog(req, res, next){
    console.log('SWEET REQUEST BRO: ', 'new '+ req.method, 'With URL: ' + req.originalUrl, 'And Query Params: ', req.query);
    next(); // once you've done this, then move on to the next middleware
}

module.exports = radLog;