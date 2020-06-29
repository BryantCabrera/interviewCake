// Reverse Words
// https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation

// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// JavaScript
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.


const reverseWords = (arr) => {
	const reverse = (leftIndex, rightIndex) => {
		while (leftIndex < rightIndex) {
			let tempChar = arr[leftIndex];
			arr[leftIndex] = arr[rightIndex];
			arr[rightIndex] = tempChar;

			leftIndex++;
			rightIndex--;
		}
	};

	// Reverse the entire string to get the words in the correct general area.
	reverse(0, arr.length - 1);

	// Initialize the indices of the first few spaces.
	let previousSpaceIndex = 0;
	let nextSpaceIndex = arr.indexOf(' ');
	let left = previousSpaceIndex;
	let right = nextSpaceIndex - 1;

	// Reverse each word.
	while (previousSpaceIndex !== -1) {
		reverse(left, right);

		// Set the previousSpaceIndex to the nextSpaceIndex.
		previousSpaceIndex = nextSpaceIndex;
		// Determine the index of the next space.
		nextSpaceIndex = arr.indexOf(' ', previousSpaceIndex !== - 1 ? previousSpaceIndex + 1 : previousSpaceIndex);
		// Set which index for the start of the word that we want to unscramble.
		left = previousSpaceIndex + 1;
		// Set which index for the end of the word that we want to unscramble.
		right = nextSpaceIndex === -1 ? arr.length - 1 : nextSpaceIndex - 1;
	}
	
	return arr.join('');
};

// const reverseWords = (arr) => {
// 	let previousSpaceIndex = 0;
// 	let nextSpaceIndex = arr.indexOf(' ');
// 	let leftIndex = 0;
// 	let rightIndex = arr.length - 1;

// 	const reverse = (leftIdx, rightIdx) => {
		
// 	};

// 	while (previousSpaceIndex !== -1) {
// 		while (leftIndex < rightIndex) {
// 			let tempChar = arr[leftIndex];
// 			arr[leftIndex] = arr[rightIndex];
// 			arr[rightIndex] = tempChar;

// 			leftIndex++;
// 			rightIndex--;
// 		}

// 		if (previousSpaceIndex === 0) {
// 			nextSpaceIndex = arr.indexOf(' ');
// 		}

// 		console.log(`arr: ${arr.join('')}`);
// 		console.log(`previousSpaceIndex: ${previousSpaceIndex}, nextSpaceIndex: ${nextSpaceIndex}, leftIndex: ${leftIndex}, rightIndex: ${rightIndex}`);
// 		// let tempSpaceIndex = previousSpaceIndex;
// 		// console.log(`tempSpaceIndex BEFORE: ${tempSpaceIndex}`);
// 		previousSpaceIndex = nextSpaceIndex;
// 		// console.log(`tempSpaceIndex AFTER: ${tempSpaceIndex}`);
// 		nextSpaceIndex = arr.indexOf(' ', previousSpaceIndex !== - 1 ? previousSpaceIndex + 1 : previousSpaceIndex);
// 		// console.log(previousSpaceIndex, nextSpaceIndex, previousSpaceIndex !== - 1 ? previousSpaceIndex + 1 : previousSpaceIndex, '@@@@@');
// 		leftIndex = previousSpaceIndex + 1;
// 		rightIndex = nextSpaceIndex === -1 ? nextSpaceIndex : nextSpaceIndex - 1;
// 		console.log(`previousSpaceIndex: ${previousSpaceIndex}, nextSpaceIndex: ${nextSpaceIndex}, leftIndex: ${leftIndex}, rightIndex: ${rightIndex}`);
// 	}
	
// 	return arr.join('');
// };

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
								's', 't', 'e', 'a', 'l' ];
								
console.log(reverseWords(message));