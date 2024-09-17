"use strict";
var CarStatus;
(function (CarStatus) {
    CarStatus["Parked"] = "Parked";
    CarStatus["Running"] = "Running";
    CarStatus["Stopped"] = "Stopped";
})(CarStatus || (CarStatus = {}));
const myCar = {
    make: "Ford",
    model: 'Mustang',
    status: CarStatus.Running,
};
console.log(`My ${myCar.make} ${myCar.model} is ${myCar.status}`);
