// 1. **Sum All Elements in an Array**  
//    - Task: Write a function that returns the sum of all numbers in an array.  
//    - Test: `sumArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `15`

// <-------------Solution-------------->

// function total (arr) {
//     let sum = 0;

//     for(i=0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(sum)
// }
// total([1,2,3,4,5])





// 2. **Find the Largest Number in an Array**  
//    - Task: Write a function that returns the largest number in an array.  
//    - Test: `findLargest([1, 5, 3, 9, 2])`  
//    - Expected Output: `9`

// <-------------Solution-------------->

// function findLargest (arr) {
    
//         let sort = arr.sort((a, b) => b-a)
//         console.log(sort[0])
   
// }
// findLargest([1,5,6,2,8,9])





// 3. **Find the Smallest Number in an Array**  
//    - Task: Write a function that returns the smallest number in an array.  
//    - Test: `findSmallest([1, 5, 3, 9, 2])`  
//    - Expected Output: `1

// <-------------Solution-------------->

// function findSmallest (arr) {
//     let sort = arr.sort((a, b) => a-b)

//     console.log(sort[0])
// }
// findSmallest([8,5,6,2,1,4,3])





// 4. **Sort an Array in Ascending Order**  
//    - Task: Write a function that sorts an array in ascending order.  
//    - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[1, 2, 5, 5, 6, 9]`

// <-------------Solution-------------->

// function findSmallest (arr) {
//     let sort = arr.sort((a, b) => a-b)

//     console.log(sort)
// }
// findSmallest([8,5,6,2,1,4,3])





// 5. **Sort an Array in Descending Order**  
//    - Task: Write a function that sorts an array in descending order.  
//    - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[9, 6, 5, 5, 2, 1]`

// <-------------Solution-------------->

// function findSmallest (arr) {
//     let sort = arr.sort((a, b) => b-a)

//     console.log(sort)
// }
// findSmallest([8,5,6,2,1,4,3])





// 6. **Reverse an Array**  
//    - Task: Write a function that reverses the elements of an array.  
//    - Test: `reverseArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `[5, 4, 3, 2, 1]`

// <-------------Solution-------------->

// function revArray (arr) {

//     let temp = []

//     for (i=arr.length-1; i>= 0; i--) {
//         temp = temp + arr[i]
//     }
//     console.log(temp)
// }
// revArray([1,2,3,4,5])





// 9. **Remove Duplicates from an Array**  
//    - Task: Write a function that removes duplicate elements from an array.  
//    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//    - Expected Output: `[1, 2, 3, 4, 5]`

// <-------------Solution-------------->

//     function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }

// console.log(removeDuplicates([1,2,3,4,4,5,6,5]))





// 10. **Merge Two Arrays**  
//     - Task: Write a function that merges two arrays into one.  
//     - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`

// <-------------Solution-------------->

// function mergeArrays(arr1, arr2) {

//     let array = arr1.concat(arr2)

//     console.log(array)
// }
// mergeArrays([1, 2, 3], [4, 5, 6])





// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`

// <-------------Solution-------------->


// function sorted (arr) {
//     for (i=0; i < arr.length -1; i++) {
//     }
//     if (arr[i] > arr[i+1]) {
//         console.log(false)
//     }
//     else {
//         console.log(true)
//     }
// }
// sorted(6,5,4,3,2,1)





// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`

// <-------------Solution-------------->

// function union (arr1, arr2) {
//     let array = arr1.concat(arr2)

//     console.log(Array.from(new Set(array)))
// }
// (union([1,2,3] , [2,3,4]) )





// 17. **Find the Second Largest Element in an Array**  
//     - Task: Write a function that returns the second largest element in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`

// <-------------Solution-------------->

// function secondLargest (arr) {
//     let sort = arr.sort((a, b) => b-a)

//     console.log(sort[1])
// }
// secondLargest([1,5,6,3,2,8,9])





// 20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`

// <-------------Solution-------------->

// function zero_at_end (arr) {

//     for(i=0; i <= arr.length; i++) {
//         if(arr[i] == 0) {
//             arr.push(arr.splice(i, 1)[0])
//         }
//     }
//     console.log(arr)
// }
// zero_at_end([1,0,0,2,0,4,5])





// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`

// <-------------Solution-------------->

// function repeated (arr) {
//     let max = 0;

//     let mostFrequent = null
//    for (i=0; i < arr.length; i++) {
//         let count = 0

//         for (j=0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count += 1
//             }
//         }
//         if (count > max) {
//             max = count;
//             mostFrequent = arr[i];
//         }
//    } 
//    console.log(mostFrequent)
// }
// repeated([1,2,3,3,3,4,4,4,4,4,5])









































































