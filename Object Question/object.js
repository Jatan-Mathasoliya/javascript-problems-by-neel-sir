// 1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
//    - Test:
//      ```javascript
//      const person = createPerson("John", 25, "New York");
//      console.log(person);
//      ```
//    - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`

// <-------------Solution-------------->

// let details = {
//     name: 'John',
//     age: 25,
//     city: 'New York'

// }
// console.log(details)





// 2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`

// <-------------Solution-------------->

// let details = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'

// }
// console.log(details.name)





// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`

// <-------------Solution-------------->

// let car = {
//     brand: 'Toyota',
//     model: 'Corolla'
// }
// car.year = 2020
// console.log(car)





// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`

// <-------------Solution-------------->

// let user = {
//     username: 'john_doe',
//     password: '12345'
// }
// delete user.password

// console.log(user)





// 8. **Loop Through Object Properties**
// - Task: Write a function that loops through all the properties of an object and prints them.
// - Test:
//   ```javascript
//   const user = { name: 'John', age: 30, city: 'New York' };
//   printProperties(user);
//   ```
// - Expected Output:
//   ```
//   name: John
//   age: 30
//   city: New York

// <-------------Solution-------------->

// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// let text = '';
// for (let x in obj) {
//     text += obj[x] + ' '
// }
// console.log(text)





// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`

// <-------------Solution-------------->

// function hasProperty(obj, property) {
//     return obj.hasOwnProperty(property);
// }

// Test
// const obj = { name: 'Alice', age: 30 };
// console.log(hasProperty(obj, 'age'));












































