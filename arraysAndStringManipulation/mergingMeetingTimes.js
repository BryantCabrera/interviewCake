// Merging Meeting Times
// https://www.interviewcake.com/question/javascript/merging-ranges?course=fc1&section=array-and-string-manipulation

// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// For example:

//   { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// JavaScript
// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// JavaScript
// your function would return:

//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

// JavaScript
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

const mergeRanges = (arr) => {
	// Sort the array by start times
	arr.sort(function(a, b) {
		return a.startTime - b.startTime;
	});

	const solution = [];

	for (let i = 0; i < arr.length; i++) {
		// If the current meeting time is the first one or if it starts later than the previous meeting's endTime, keep iterating
		if (i === 0 || (i !== 0 && arr[i].startTime > solution[solution.length - 1].endTime)) {
			solution.push(arr[i]);
		} else if (arr[i].startTime <= solution[solution.length - 1].endTime) {
			// If the current meeting range is within the current meeting range, merge the two ranges
			solution[solution.length - 1].endTime = arr[i].endTime  > solution[solution.length - 1].endTime ? arr[i].endTime : solution[solution.length - 1].endTime;
		}
	}

	return solution;
};

const sampleData = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

console.log(mergeRanges(sampleData));

const sampleData2 = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];

console.log(mergeRanges(sampleData2));