// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself, or zero if the number is smaller than 6. 
// The other elements should be the elements of the original array. Try not to mutate the original array

function myFunction(arr, num) {
	const newArr = [];
    num < 6 ? newArr.push(0) : newArr.push(num);
    newArr.push(...arr);
	
    return newArr
}
 
console.log(myFunction([1,2,3], 6))
// expected: '[6,1,2,3]' 
console.log(myFunction(['a','b'], 2))
// expected: '[0,'a','b']' 
console.log(myFunction([null,false], 11))
// expected: '[11,null,false]' 
