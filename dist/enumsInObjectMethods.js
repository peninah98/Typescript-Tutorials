"use strict";
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["Small"] = 0] = "Small";
    CoffeeSize[CoffeeSize["Medium"] = 1] = "Medium";
    CoffeeSize[CoffeeSize["Large"] = 2] = "Large";
})(CoffeeSize || (CoffeeSize = {}));
class Coffee {
    constructor(size) {
        this.size = size;
    }
    getDescription() {
        return `This coffee is ${this.size}`;
    }
}
const myCoffee = new Coffee(CoffeeSize.Large);
console.log(myCoffee.getDescription());
