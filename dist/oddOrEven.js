"use strict";
function oddOrEven(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum % 2 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven([1, 2]));
