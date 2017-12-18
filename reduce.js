define([], function(){
    return function reduce(list, a, memo){
    list.forEach(function(item) {
        memo = a(item, memo);
    });
    return memo;
};
});
