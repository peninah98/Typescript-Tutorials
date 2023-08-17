"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mzSize = Size.medium;
console.log(mzSize);
