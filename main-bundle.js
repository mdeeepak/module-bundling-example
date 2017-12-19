define('reduce', [], function () {
    return function reduce(list, a, memo) {
        list.forEach(function (item) {
            memo = a(item, memo);
        });
        return memo;
    };
});
define('add', [], function () {
    return function add(a, b) {
        return a + b;
    };
});
define('sum', [
    'reduce',
    'add'
], function (reduce, add) {
    return function sum(list) {
        return reduce(list, add, 0);
    };
});
require(['./sum'], function (sum) {
    var number = [
        1,
        2,
        3
    ];
    var result = sum(number);
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = result;
});
define('main', ['sum'], function () {
    return;
});