function oddOrEven(array: number[]): string {
  const sum = array.reduce((a: number, b: number) => a + b, 0);
  return sum % 2 === 0 ? "Even" : "Odd";
}

console.log(oddOrEven([1, 2]));
