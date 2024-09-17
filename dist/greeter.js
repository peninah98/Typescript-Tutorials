"use strict";
function greeter(name) {
    return `Hello ${name} !`;
}
let lname = "Rembo";
console.log(greeter(lname));
document.body.textContent = greeter(lname);
