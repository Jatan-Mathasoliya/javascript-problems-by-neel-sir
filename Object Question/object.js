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
// for (let[data, values] of Object.entries(obj)) {
//      text += data + ":" + values
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





// 6. **Merge Two Objects**
// - Task: Write a function that merges two objects into one.
// - Test:
// ```javascript
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2));
// ```
// - Expected Output: `{ a: 1, b: 3, c: 4 }`

// <-------------Solution-------------->

// function Merge (obj1, obj2) {

//     let final = {}

//     for(let x in obj1) {
//         if(obj1.hasOwnProperty(x)){
//             final[x] = obj1[x];
//         }
//     }

//     for(let y in obj2) {
//         if(obj2.hasOwnProperty(y)){
//             final[y] = obj2[y];
//         }
//     }

//     console.log(final)
// }
// Merge({a:1, b:2} , {b:2, c:3})





// 7. **Clone an Object**
// - Task: Write a function that creates a deep clone of an object.
// - Test:
// ```javascript
// const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
// const clone = cloneObject(original);
// clone.details.city = 'LA';
// console.log(original.details.city);
// console.log(clone.details.city);
// ```
// - Expected Output:
// ```
// 'NYC'
// 'LA'
// ```

// <-----------------solution-------------->


// const original = {
//     Name : "Alice",
//     details : {
//         age : 30,
//         city : "NYC"
//     }
// }


// const copy = {}

// for(let x in original) {
//     if(original.hasOwnProperty(x)){
//         copy[x] = original[x]
//     }
// }

// console.log(original.details.city)
// copy.details.city = "LA"

// console.log(copy.details.city)






// 8. **Loop Through Object Properties**
// - Task: Write a function that loops through all the properties of an object and prints them.
// - Test:
// ```javascript
// const user = { name: 'John', age: 30, city: 'New York' };
// printProperties(user);
// ```
// - Expected Output:
// ```
// name: John
// age: 30
// city: New York
// ```

// <-------------Solution-------------->

// const obj = {
//     name: 'John',
//     age : 30,
//     city : 'New York'
// }

// for(let [user, value] of Object.entries(obj)){
//     console.log(`${user}: ${value}`)
// }






// 9. **Count the Number of Properties in an Object**
// - Task: Write a function that counts the number of properties in an object.
// - Test:
// ```javascript
// const obj = { name: 'Alice', age: 30, city: 'NYC' };
// console.log(countProperties(obj));
// ```
// - Expected Output: `3`

// <-----------solution----------->

// const obj = {
//     name: 'Alice',
//     age : 30,
//     city : 'NYC'
// }

// let temp = 0

// for(let x in obj) {
//     temp++
// }

// console.log(temp)





// 10. **Convert Object to Array of Keys**
// - Task: Write a function that converts an object to an array of its keys.
// - Test:
// ```javascript
// const obj = { name: 'Alice', age: 30, city: 'NYC' };
// console.log(objectKeysToArray(obj));
// ```
// - Expected Output: `['name', 'age', 'city']`

// <------------solution--------------->

// const obj = {
//     name : "John",
//     age : 30,
//     city : "NYC"
// }

// let final = Object.values(obj)

// console.log(final)

// 14. **Find the Object with the Maximum Value of a Property**
// - Task: Write a function that finds the object with the maximum value of a given property in an
// array of objects.
// - Test:
// ```javascript
// const users = [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 20 },
// { name: 'Charlie', age: 35 }
// ];
// console.log(findMax(users, 'age'));
// ```
// - Expected Output: `{ name: 'Charlie', age: 35 }`

// <------------solution--------------->

// function user(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const User1 = new user ("Alice", 30)
// const User2 = new user ("Bob", 20)
// const User3 = new user ("Charlie", 35)

// const users = [User1.age, User2.age, User3.age];

// let max = users[0]
// for(i=0; i<users.length; i++){
//     if(users[i] > max){
//         max = users[i]
//     }
// }
// console.log(max)






// 15. **Sum the Values of a Specific Property in an Array of Objects**
// - Task: Write a function that sums the values of a specific property in an array of objects.
// - Test:
// ```javascript
// const items = [
// { name: 'item1', price: 10 },
// { name: 'item2', price: 15 },
// { name: 'item3', price: 20 }
// ];
// console.log(sumProperty(items, 'price'));
// ```
// - Expected Output: `45`

// function item (name, price){
//     this.name = name
//     this.price = price
// }

// const item1 = new item ('item1', 10)
// const item2 = new item ('item2', 15)
// const item3 = new item ('item3', 20)

// let sum = 0
// let items = [item1.price, item2.price, item3.price]
// for(i=0; i<items.length; i++){
//     sum = sum + items[i]
// }

// console.log(sum)






// 13. **Group Objects by a Property**
// - Task: Write a function that groups an array of objects by a specific property.
// - Test:
// ```javascript
// const users = [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 20 },
// { name: 'Charlie', age: 30 }
// ];
// console.log(groupBy(users, 'age'));
// ```
// - Expected Output:
// ```javascript
// {
// 20: [{ name: 'Bob', age: 20 }],
// 30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
// }
// ```






// 12. **Convert an Array of Objects to a Single Object**
// - Task: Write a function that converts an array of objects into a single object. Assume each
// object in the array has a unique `key` property.
// - Test:
// ```javascript
// const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
// console.log(arrayToObject(arr));
// ```
// - Expected Output: `{ a: 1, b: 2 }`

// function keys(key, value){
//     this.key = key
//     this.value = value
// }

// const key1 = new keys('a', 1)
// const key2 = new keys('b', 2)

// const arr = [key1, key2]
// let obj = {}

// for(i=0; i<arr.length; i++){
//    let print = arr[i].value + " : " + arr[i].key 
//     let element = print
//    if(obj[element]){
    
//    }
//    else{
//     console.log(print)
//    }
   
// }
// console.log(obj)



let obj = {
    name : "jatan",
    age : 25
}

if(obj.hasOwnProperty("sdfgdfh")){
    console.log("name is exist")
}
else {
    console.log("name is not exist")
}

    