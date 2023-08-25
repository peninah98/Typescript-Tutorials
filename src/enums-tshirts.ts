enum Size{
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}

class Tshirts{
  constructor(public size: Size){}

  tShirtSize():string{
    return `I wear ${this.size} t-Shirt`
  }
}

const mySize: Tshirts = new Tshirts(Size.Small) 
console.log(mySize.tShirtSize())