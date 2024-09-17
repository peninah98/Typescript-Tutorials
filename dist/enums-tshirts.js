"use strict";
var Size;
(function (Size) {
    Size["Small"] = "Small";
    Size["Medium"] = "Medium";
    Size["Large"] = "Large";
})(Size || (Size = {}));
class Tshirts {
    constructor(size) {
        this.size = size;
    }
    tShirtSize() {
        return `I wear ${this.size} t-Shirt`;
    }
}
const mySize = new Tshirts(Size.Small);
console.log(mySize.tShirtSize());
