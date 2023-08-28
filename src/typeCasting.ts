let value :any = "Hello , Elsie"
let len: number =(value as string).length
let wid: number = (<string>value).length;

console.log(len)