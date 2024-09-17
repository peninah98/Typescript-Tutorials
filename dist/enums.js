"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["Right"] = 4] = "Right";
    Directions[Directions["Left"] = 9] = "Left";
    Directions[Directions["Up"] = 10] = "Up";
    Directions[Directions["Down"] = 11] = "Down";
})(Directions || (Directions = {}));
let playerDirection = Directions.Up;
console.log(playerDirection);
