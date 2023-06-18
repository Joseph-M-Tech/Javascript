/*
.map(), 
.filter()
*/
//  1._______________________ .map()____________________________________
/*
The .map() method applies a function to every element in an array. 
A new array is then returned. 
In other words, .map() takes an array, does something to every element in the array and returns a new array.
Let's say we have an array of numbers:
*/
const numbers = [1, 4, 9, 16]
// To multiply every element in the numbers array by 2, we do this:
numbers.map(x => x * 2)

// Which would return:

[2, 8, 18, 32]
// Subtract 2 from every element in the numbers array.

const numbers = [1, 4, 9, 16]
​
function subtractTwo(numbers) {
  return numbers.map(y => y-2);
}
// 2. ________________________.filter()________________________________________
/*
The .filter() method returns a new array containing all elements that pass a test from a function you provide. In other words, .filter() takes an array, tests every element and returns a new array containing only elements that pass a test you provide.
Let's say we have an array of strings:
*/
const words = ["thaw", "achievement", "gain", "outlet", "difference"]
// To return only elements in the words array less than 5 characters in length, we do this:
words.filter(word => word.length < 5)
// Which returns the following output:

["thaw", "gain"]
// Return only numbers in the years array greater than 1950.

const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]
​
function getYears(years) {
  return years.filter(year => year>1950);
}

