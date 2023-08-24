function reverse(strn: string) : string{
    return strn.split(" ").reverse().join(" ")
} 

console.log(reverse("Hello World!"))