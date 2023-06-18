// Arrays are lists of items. They look like this:
const fruit = ["apple", "banana", "orange", "mango", "tomato"];
___________indexes__________
/*Each element in an array has an "index" that starts at 0. 
Using the first fruit example, 
"apple" is at index 0, "banana" is at index 1, "orange" is at 2, 
and so on until the end of the array.
To access a specific element within an array, we do this:
*/
fruit[2]

_____________mutability_______________

//Elements in arrays are mutable, which means they can be changed. 
//For example, let's say we've got an array of numbers:
const numbers = [14, 56, 78]
//To change the value of 14 (at index 0), we do this:
numbers[0] = 35


____________.length-property______
// In most cases, you won't know the exact length of an array. In other words,
// you won't know how many elements it contains. 
// That's where the .length property comes in.

const movies = ["The Matrix", "Se7en", "The Wizard of Oz", "Marry Poppins"]
movies.length;

_____________Objects_______________

// Objects are a better way of handling data than arrays do.
// The things on the left of the : are called keys 
// and the things on the right are values. We refer to this as key-value pairs.
//  Here is an example of an object:
const person1 = {
    firstName: "Joffery",
    lastName: "Baratheon",
    email: "joff@widowswail.com"
  }
  
  const person2 = {
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
  }
  
  const person3 = {
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@pourmeanother.com"
  }

// Now we have a variable for each person that can be used to
// get their values in a more maintainable and readable way.
/*
If you want to access the lastName of person3, you would return person3.lastName. 
This is called dot notation because it uses a . to specify the key you want to access.
*/
function getEmail(person) {
    return person.email;
  }
