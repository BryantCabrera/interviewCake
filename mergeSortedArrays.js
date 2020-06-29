// Merge Sorted Arrays
// https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation

// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

const mergeSortedArrays = (arr1, arr2) => {
	const mergedArrays = [];
	while (arr1.length || arr2.length) {
		if (arr1.length && !arr2.length) {
			mergedArrays.push(arr1.shift())
		} else if (arr2.length && !arr1.length) {
			mergedArrays.push(arr2.shift());
		} else {
			arr1[0] < arr2[0] ? mergedArrays.push(arr1.shift()) : mergedArrays.push(arr2.shift());
		}
	}

	return mergedArrays;
};

const sampleInput1 = [3, 4, 6, 10, 11, 15];
const sampleInput2 = [1, 5, 8, 12, 14, 19, 20];
const sampleInput3 = [1, 5, 8, 12, 14, 19, 20, 21, 23];
const sampleInput4 = [3, 4, 6, 10, 11, 15, 22];
const sampleInput5 = [1, 5, 8, 12, 14, 19, 20, 22];
const sampleInput6 = [1, 5, 8, 12, 14, 19, 20, 22];
console.log(mergeSortedArrays(sampleInput1, sampleInput2));
console.log(mergeSortedArrays(sampleInput3, sampleInput4));
console.log(mergeSortedArrays(sampleInput5, sampleInput6));