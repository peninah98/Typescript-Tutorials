enum CoffeeSize {
    Small, Medium, Large
}

class Coffee {
    constructor(public size:CoffeeSize){}
    getDescription(): string{
        return `This coffee is ${this.size}` ;
    }
}

const myCoffee : Coffee = new Coffee(CoffeeSize.Large)
console.log(myCoffee.getDescription())