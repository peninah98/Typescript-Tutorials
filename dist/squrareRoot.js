"use strict";
function squareRootAndSum(number) {
    return number.map((num) => {
        if (num >= 0) {
            return (Math.pow(num, 1) + Math.pow(num, 1 / 2) + Math.pow(num, 3));
        }
        else {
            return `Negative number`;
        }
    });
}
console.log(squareRootAndSum([12, 23, 1, 2, 3, -4, 4, 5, 6, 7, 7, 8, 0]));
