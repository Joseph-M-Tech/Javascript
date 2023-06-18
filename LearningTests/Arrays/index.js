// get  the largest number in an array function 

function findLargestNum(nums) {
    let largestNumber = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            largestNumber = nums[i];
        }
    }
    return largestNumber;
}
const nums = [7, 2, 10, 6, 3];
const largestNumber = findLargestNum(nums);
// console.log(largestNumber);
document.getElementById("largestNumArray").innerHTML = largestNumber;




function findSmallNum(numbers) {
    let smallNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallNumber) {
            smallNumber = numbers[i];
        }
    }
    return smallNumber;
}

const numbers = [7, 1, 8, 9];
const smallNumber = findSmallNum(numbers);
console.log(largestNumber);

document.getElementById("SmallNumArray").innerHTML = smallNumber;
