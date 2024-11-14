// Problem 1
// Create a variable called myGrades and assign it an array of numbers.
// Let was the first error.
let myGrades = [100, 100, 90, 73, 78, 94, 86];
// Problem 2
// Create a variable called myAverage and assign it a number.
// Let was the second error.
let myAverage = 0;
// Problem 3
// Use a for loop to calculate the average of the myGrades array.
// Let i = 1 was the third error.
// Problem 4
// i <= myGrades.length was the fourth error.
// i < myGrades.length was the correct answer.
// Solution
// Added the validate function
// to catch any errors.

// divide the average by the length of the array
myAverage = myAverage / myGrades.length;
// print the average to the console using console.log
console.log("My grade average is " + myAverage);

// Output
// My grade average is 87
//My grade average is NaN