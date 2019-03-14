var add = function(a, b) {
    return a + b;
};

var substract = function(a, b) {
    return a - b;
};

var multiply = function(a, b) {
    return a * b;
};

var divide = function(a, b) {
    return a / b;
}

var getParams = function(a, b) {
    console.log(a + ":" + b);
    return "200";
}

var calc = function(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(4,2,add));
console.log(calc(4, 2, substract));
console.log(calc(4, 2, multiply));
console.log(calc(4, 2, divide));

console.log(calc(4, 2, getParams));

console.log(calc(4, 2, function(a, b) {
	return a * b + a / b;
}));