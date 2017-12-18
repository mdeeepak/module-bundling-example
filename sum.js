var reduce = require('./reduce');
var add = require('./add');


var sum = function (list){
    return reduce(list,add,0);
}

module.exports = sum;