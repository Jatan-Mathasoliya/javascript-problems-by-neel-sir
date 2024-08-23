// 1. **Print "Hello, World!"**  
//    - Task: Write a function that prints "Hello, World!" to the console.

// ------------Solution------------->

// console.log("Hello, World!")





// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`

// ------------Solution------------->

// let a = 3;
// let b = 5;

// console.log(a+b)





// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`

// ------------Solution------------->

// let a = 2;
// let b = 8;
// let c = 5;

// if ((a>b) && (a>c)) {
//     console.log(a + ' is the Largest Number')
// }
// else if ((b>a) && (b>c)) {
//     console.log(b + ' is the Largest Number')
// }
// else {
//     console.log(c + ' is the Largest Number')
// }





// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`

// ------------Solution------------->

// function oddoreven (n) {
//     if (n % 2 == 0) {
//         console.log(n + ' is even number')
//     }
//     else {
//         console.log(n + ' is odd number')
//     }
// }
// oddoreven(3)





// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`

// ------------Solution------------->

// function facto(n) {


//     let temp = 1

//     if (n == 0) {
//         console.log(n + ' is invalid Value')
//     }

//     else {
//         for (i = n; i > 0; i--) {
//             temp = temp * i
//         }
//     }
//     console.log(temp)
// }
// facto(2)





// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`

// ------------Solution------------->

// function findMin (arr) {

//     let len = arr.length;

//     let sorted = arr.sort((a,b) => a-b)

//     console.log(sorted[0])
    
// }
// findMin([3, 1, 4, 1, 5])





// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`

// ------------Solution------------->


// function sortarray (arr) {
//     let len = arr.length;

//     for (i=0; i<len; i++) {
//        sorted=arr.sort((a,b) => a-b)
//     }
//     console.log(sorted)
// }
// sortarray([3,1,4,1,5])





// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true`

// ------------Solution------------->





// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`

// ------------Solution------------->

// function total (arr) {
//     let sum = 0;

//     for(i=0; i< arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum)
// }
// total([1,2,3,4,5])





// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`

// ------------Solution------------->

// function fibo (n) {

//     let a = 0;
//     let b = 1;
    

//     for(i=0; i < n; i++) {
//         console.log(a);
//         temp = a + b;
//         a = b;
//         b = temp;
//     }
// }
// console.log(fibo(5))





// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true

// ------------Solution------------->

// function prime (n) {
   
//     let count = 0;

//     for (i=0; i< n; i++) {
//         if (n % i ==0) {
//             count++;
//         }
//     }

//     if (count > 1) {
//         console.log(n + ' is not a prime number')
//     }
//     else {
//         console.log(n + ' is a prime number')
//     }
// }
// prime(11)






// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`

// ------------Solution------------->

// function  countVowels(str) {
//     let count = 0;

//     let vowels = ('aeiou');

//     for (i=0; i < str.length; i++) {
//         for (j=0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 count++;
//             }
//         }
//     }
//     console.log(count);
// }   
// countVowels('parixit')





// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`

// ------------Solution------------->

// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }
// console.log(removeDuplicates([1,2,3,4,4,5,6,5]))





// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`

// ------------Solution------------->

// let str1 = "hello"
// let str2 = "world"

// let sortedstr1 = str1.split('').sort().join('');
// console.log(sortedstr1)

// let sortedstr2 = str2.split('').sort().join('');
// console.log(sortedstr2)
// temp = 0

// for (i=0; i <=str1.length; i++) {
//     for (j=0; j<= str2.length; j++) {
//         if (sortedstr1[i] == sortedstr2[j]) {
//             temp = temp + 1
//         }
//     }
// }
// if (temp > 0) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }





// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`

// ------------Solution------------->

// function title (str) {

//     let split = str.split(' ')

// for (i=0; i<split.length; i++) {
//     split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
// }
// let  final = split.join(' ');

// console.log(final)

// }
// title('hello everyone my name is jatan and my father name is janakbhai')





// 21. **Generate a Random Number within a Range**  
//     - Task: Write a function that generates a random number between a given range.  
//     - Test: `randomNumber(1, 10)`  
//     - Expected Output: `A random number between 1 and 10`

// ------------Solution------------->

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10) + 1;
// }
// const randomNumber = getRandomNumber();

// console.log("Random number between 1 and 10:", randomNumber);





// 23. **Convert Celsius to Fahrenheit**  
//     - Task: Write a function that converts a temperature from Celsius to Fahrenheit.  
//     - Test: `celsiusToFahrenheit(0)`  
//     - Expected Output: `32`

// ------------Solution------------->

// function  celsiusToFahrenheit(celsius) {
//     let Fahrenheit = celsius * 9/5 + 32;

//     console.log(celsius + ' celsius' + ' = ' + Fahrenheit + ' Fahrenheit')
// }
// celsiusToFahrenheit(32)





// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`

// ------------Solution------------->

// function  removeElement(arr, target) {
//     let array = arr.filter(item => item != target);

//     console.log(array)
// }
// removeElement([1,2,3,4,5],3)





// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`

// <-------------Solution-------------->

// function secondLargest (arr) {
//     let sort = arr.sort((a, b) => b-a)

//     console.log(sort[1])
// }
// secondLargest([1,5,6,3,2,8,9])





// 27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`

// <-------------Solution-------------->

// function findMissingNumber (arr) {

//     for (i=1; i <= arr.length + 1; i++) {
//         if (!arr.includes(i)) {
//             console.log(i)
//         }
//     }  
// }
// findMissingNumber([1,2,4,5,6,8])





// 31. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

// <-------------Solution-------------->

function rotateArray(arr, k) {
    
    let array =  arr.slice(-k).concat(arr.slice(0, -k));

    console.log(array)
}
rotateArray([1,2,3,4,5],4)





























