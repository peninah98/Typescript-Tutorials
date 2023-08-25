function greeter (name : string){
    return `Hello ${name} !`
}

let lname : string = "Rembo"

console.log(greeter(lname))

document.body.textContent = greeter(lname)