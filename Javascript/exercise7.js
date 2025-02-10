// 1. Write a JavaScript function to calculate the sum of two numbers.  

function sumTwoNumbers(a, b) {
    return a + b;
}

console.log(sumTwoNumbers(6,7))

// 2. Write a JavaScript program to find the maximum number in an array. 

function findMax(arr) {
    let largest = arr[0];
    arr.forEach(num => {
       if (num > largest) largest = num
    });
    return largest;
}

console.log(findMax([1, 7, 88, 13, 5]))

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('salami'))

// 4. Write a JavaScript program to reverse a given string. 

function reverseString(string) {
    return string.split('').reverse().join('');
}

console.log(reverseString('racecar'))
console.log(reverseString("iaK m'I ,iH"))

// 6. Write a JavaScript program to calculate the factorial of a given number. 

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1)
    }
}

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(1));

// 7. Write a JavaScript function to check if a given number is prime. 

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(159));
console.log(isPrime(23));

// 8. Write a JavaScript program to find the largest element in a nested array. 

function largestInNest(arr) {
    let largest = -Infinity;
    arr.forEach(ele => {
        if (Array.isArray(ele)) {
            largest = Math.max(largest, largestInNest(ele))
        } else {
            largest = Math.max(largest, ele);
        }
    })
    return largest;
}

console.log(largestInNest([1, [5, 7, [11, [1]], 5], 1111]));
console.log(largestInNest([1, [2]]));
console.log(largestInNest([1, 2, 3, 5]));
console.log(largestInNest([[[[[[[[[[[[[[[[[[[[42]]]]]]]]]]]]]]]]]]]]));

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 0; i < n; i++) {
        fibSeq.push(fibSeq[i] + fibSeq[i+1])
    }

    return fibSeq;
}

console.log(fibonacci(15));

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function toTitleCase(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

console.log(toTitleCase('hello everyone, lets take a look at the newest coding projects.'))