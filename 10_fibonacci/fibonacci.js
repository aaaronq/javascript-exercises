const fibonacci = function(n) {
    n = +n;
    if (n < 0) return "OOPS";
    if (n === 1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci (n-2);
    // for negatives to actually work (i thought u were meant to do this)
    // else {
    //     return fibonacci(Math.abs(n)) * (-1) ** n;
    // }
}

// Do not edit below this line
module.exports = fibonacci;
