// Reverse String In Place
// https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation

// Write a function that takes an array of characters and reverses the letters in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.


const reverseString = (arr) => {
	return arr.reverse();
};

const input = ['a', 'b', 'c', 'd'];

console.log(reverseString(input));

//  Provided Solution
// function reverse(arrayOfChars) {

//   let leftIndex = 0;
//   let rightIndex = arrayOfChars.length - 1;

//   while (leftIndex < rightIndex) {

//     // Swap characters
//     const temp = arrayOfChars[leftIndex];
//     arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
//     arrayOfChars[rightIndex] = temp;

//     // Move towards middle
//     leftIndex++;
//     rightIndex--;
//   }
// }