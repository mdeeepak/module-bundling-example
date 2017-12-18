functionUtils = {};
functionUtils.add= function(a,b){
    return a+b;
}
functionUtils.reduce = function(list, iteratee, memo){
    list.forEach(function(item) {
        memo = iteratee(item, memo);
    });
    return memo;
}
functionUtils.sum = function (list){
    return functionUtils.reduce(list,functionUtils.add,0);
}
