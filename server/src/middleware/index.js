const middlewareObj = {};

middlewareObj.temprary = function(req, res, next){
    console.log("here we will add all type of middleware");
    return next();
}

module.exports = middlewareObj;