// let num = 123

// string = num.toString()

// let sum = 0

// for (i=0; i < string.length; i++) {
//     sum = sum + Number(string[i])
// }
// console.log(sum)

let num = 111

let digit1 = num % 10

let digit = num - digit1

let digit2 = digit / 10

let digit3 = digit2 % 10

let digit4 = digit2 - digit3

let digit5 = digit4 / 10

console.log(digit5 + digit3 + digit1)