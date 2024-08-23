// 1. **Reverse a String**
//    - Task: Write a function that reverses a given string.
//    - Test:
//      ```javascript
//      console.log(reverseString("hello"));
//      ```
//    - Expected Output: `"olleh"`

// <-------------Solution-------------->

// let str = ("hello everyone my name is jatan");

// let len = str.length;

// let temp = '';

// for(i=len-1; i >= 0; i--) {
//     temp = temp + str[i];

// }
// console.log(temp);





// 2. **Check if a String is a Palindrome**
//    - Task: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
//    - Test:
//      ```javascript
//      console.log(isPalindrome("racecar"));
//      console.log(isPalindrome("hello"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false

// <-------------Solution-------------->

// let str = 'hello'

// let len = str.length;

// let temp = '';

// for(i=len-1; i >= 0; i--) {
//     temp = temp + str[i];

// }
// console.log(temp);

// if (str === temp) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }





// 3. **Count the Number of Vowels in a String**
//    - Task: Write a function that counts the number of vowels (`a, e, i, o, u`) in a given string.
//    - Test:
//      ```javascript
//      console.log(countVowels("hello world"));
//      ```
//    - Expected Output: `3`

// -------Solution -- (1) ------->

// let str = "hello world"

// let temp = 0;

// for (i=0; i<str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//         temp++;
//     }
// }
// console.log(temp)

// -------Solution -- (2) Made by JATAN ------->

// let str = "hello world"

// let temp = 0;

// let vowel = "a,e,i,o,u"

// for (i=0; i<str.length; i++) {
//     for (j=0; j < vowel.length; j++) {
//         if (str[i] === vowel[j]) {
//             temp++;
//         }
//     }
// }
// console.log(temp)





// 4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`

// <-------------Solution-------------->

// let str = 'swiss'

// let temp = 0;

// for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length; j++) {
//         if (str[i] != str[j]) {
//             temp = temp + 1;
//         }
//     }
// }
// console.log(i)





// 5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`

// <-------------Solution-------------->

// let str = 'This is a test string';

// let wordsArray = str.split(' ');

// console.log(wordsArray)

// console.log(wordsArray.length)

// -------Solution --(2) ------->

// let str = 'This is a test string';

// let arr = Array.from(str);

// let space = ' ';

// let temp = 0;

// for (i = 0; i<arr.length; i++) {
//     if (arr[i] == space) {
//         temp = temp + 1
//     }
// }
// console.log(temp + 1);





// 6. **Check if Two Strings are Anagrams**
//    - Task: Write a function that checks if two strings are anagrams (contain the same characters in different orders).
//    - Test:
//      ```javascript
//      console.log(areAnagrams("listen", "silent"));
//      console.log(areAnagrams("hello", "world"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

// <-------------Solution-------------->

// let str1 = "hello"
// let str2 = "world"

// // let arr1 = Array.from(str1)
// // let arr2 = Array.from(str2)

// let sortedstr1 = str1.split('').sort().join('');
// console.log(sortedstr1)


// let sortedstr2 = str2.split('').sort().join('');
// console.log(sortedstr2)
// temp = 0

// for (i=0; i < str1.length; i++) {
//     for (j=0; j< str2.length; j++) {
//         if (sortedstr1[i] === sortedstr2[j]) {
//             temp = temp +1
//     }
// }
// }
// if (temp > 0) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }





// 7. **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`

// <-------------Solution-------------->

// let str = ' Hello World '        

// let temp = ''

// let space = ' '

// for (i = 0; i < str.length; i++) {
//     if (str[i] === space) {
//         temp = temp + '-'
//     }
//     else {
//         temp = temp + str[i]
//     }
// }
// console.log(temp)





// 8. **Convert a String to Title Case**
//    - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
//    - Test:
//      ```javascript
//      console.log(toTitleCase("this is a test string"));
//      ```
//    - Expected Output: `"This Is A Test String"`

// <-------------Solution-------------->

// let str = 'this is a test string'

// let split = str.split(' ')

// for (i=0; i<split.length; i++) {
//     split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
// }
// let  final = split.join(' ');

// console.log(final)





// 10. **Remove Duplicates Characters from a String**
//     - Task: Write a function that removes duplicate characters from a string.
//     - Test:
//       ```javascript
//       console.log(removeDuplicates("programming"));
//       ```
//     - Expected Output: `"progamin"`

// <-------------Solution-------------->

// function removeDuplicates (str) {

//     let unique = new Set(str);

//     let final = [...unique].join('');

//     console.log(final)
// }
// removeDuplicates('programming')





// 12. **Capitalize the First Letter of Each Word in a String**
//     - Task: Write a function that capitalizes the first letter of each word in a string.
//     - Test:
//       ```javascript
//       console.log(capitalizeFirstLetters("javascript is fun"));
//       ```
//     - Expected Output: `"Javascript Is Fun"`

// <-------------Solution-------------->


// function capitalizeFirstLetters (str) {

// let split = str.split(' ')

// for (i=0; i<split.length; i++) {
//     split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
// }
// let  final = split.join(' ');

// console.log(final)
// }
// capitalizeFirstLetters('javascript is fun')





// 14. **Check if a String Contains a Substring**
//     - Task: Write a function that checks if a string contains a given substring.
//     - Test:
//       ```javascript
//       console.log(containsSubstring("hello world", "world"));
//       console.log(containsSubstring("hello world", "planet"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

// <-------------Solution-------------->

// function substring (str, substring) {
//     if (str.includes(substring)) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }
// substring("hello world", "my")





// 9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345"));
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

// <-------------Solution-------------->





// 11. **Find the Longest Word in a String**
//     - Task: Write a function that finds the longest word in a string.
//     - Test:
//       ```javascript
//       console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//       ```
//     - Expected Output: `"jumped"`

// <-------------Solution-------------->

// function findLongestWord (str) {
//     let longestWord = '';

//     let words = str.split(' ')

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     console.log( longestWord)
// }
// findLongestWord('The quick brown fox jumped overrtrtrtrtr the lazy dog')





// 15. **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`

// <-------------Solution-------------->

// function str_to_Array (str) {
//     let string = str.split(" ")

//     console.log(string)
// }
// str_to_Array("This is a test")





// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

// <-------------Solution-------------->

// function substring (str, substring) {

//     let string = str.split(' ')

//     if (string[1].includes(substring)) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }
// substring("hello world", "world")





// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`

// <-------------Solution-------------->

// function remove (str, target) {

//     let string = str.split(' ');

//     let array = Array.from(string);

//     let final = array.filter(item=> item != target);

//     console.log(final);
// }
// remove("This is a test . this is test only a .", "test")



























