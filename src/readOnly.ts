const arr : number [] = [1,2,3,4,5,6,6,7,6,8]
function square(numbers:number[]) :number[]{
    return numbers.map((num: number):number => Math.pow(num,2)) ; // returns a new array with the same length as original one and each element is
}
// arr.push(124)
console.log(square(arr))

// Read Only is typescript keyword used on array that prevent an array from being changed

const names : readonly string [] = ["Kalisa","Kamaliza","Karagwa"]
console.log(names)
// names.push("Hello") this will throw an error we cannot add an item in an array which is ready only!!
