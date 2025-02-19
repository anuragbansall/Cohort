/*
    1. Age Category Message – Ask the user for their age. If they are
    under 18, print “You are a minor.” If they are between 18 and 60,
    print “You are an adult.” If they are above 60, print “You are a
    senior citizen.”
*/

// const age = prompt("Enter your age: ");

// if (age < 18) {
//   console.log("You are a minor.");
// } else if (age >= 18 && age <= 60) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a senior citizen.");
// }

/*
    2. Even or Odd Sum – Take two numbers from the user using
    prompt(). If the sum of both numbers is even, print “Even Sum”;
    otherwise, print “Odd Sum.”
*/
// const num1 = Number(prompt("Enter first number: "));
// const num2 = Number(prompt("Enter second number: "));
// const sum = num1 + num2;

// if (sum % 2 == 0) {
//   console.log("Even Sum");
// } else {
//   console.log("Odd Sum");
// }

/*
    3. Character Case Checker – Ask the user for a single character.
    Check if it's uppercase, lowercase, or neither (not a letter).
*/
// let char;
// do {
//   char = prompt("Enter a character: ");
//   if (char.length > 1) {
//     console.log("Please enter a single character.");
//     continue;
//   } else {
//     if (char >= "A" && char <= "Z") {
//       console.log("Uppercase");
//     } else if (char >= "a" && char <= "z") {
//       console.log("Lowercase");
//     } else {
//       console.log("Not a letter");
//     }
//   }
// } while (char.length > 1);

/*
    4. Largest of Three Numbers – Take three numbers as input and
    print the largest number among them without using
    Math.max().
*/
// const num1 = Number(prompt("Enter first number: "));
// const num2 = Number(prompt("Enter second number: "));
// const num3 = Number(prompt("Enter third number: "));

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }
// if (num3 > largest) {
//   largest = num3;
// }

// console.log(`Largest number is: ${largest}`);

/*
    5. Leap Year Checker – Ask the user for a year and determine if
    it's a leap year or not.
*/
// const year = Number(prompt("Enter a year: "));

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

/*
    6. Simple Calculator – Ask the user for two numbers and an
    operator (+, -, *, /). Perform the operation and display the result.
*/
// const num1 = Number(prompt("Enter first number: "));
// const operator = prompt("Enter operator (+, -, *, /): ");
// const num2 = Number(prompt("Enter second number: "));

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     console.log("Invalid operator");
// }

// console.log(`Result: ${result}`);

/*
    7. Positive, Negative, or Zero – Take a number input and check if it
    is positive, negative, or zero.
*/
// const num = Number(prompt("Enter a number: "));

// if (num < 0) {
//   console.log("Negative");
// } else if (num > 0) {
//   console.log("Positive");
// } else {
//   console.log("Zero");
// }

/*
    8. User Greeting – Ask for the user's name and time (24-hour
    format). Greet them accordingly:

    5 AM–12 PM: "Good Morning, [Name]!"

    12 PM–5 PM: "Good Afternoon, [Name]!"

    5 PM–9 PM: "Good Evening, [Name]!"

    9 PM–5 AM: "Good Night, [Name]!"
*/
// const name = prompt("Enter your name: ");
// const time = Number(prompt("Enter the time (24-hour format): "));

// let greeting;

// if (time >= 5 && time < 12) {
//   greeting = "Good Morning";
// } else if (time >= 12 && time < 17) {
//   greeting = "Good Afternoon";
// } else if (time >= 17 && time < 21) {
//   greeting = "Good Evening";
// } else {
//   greeting = "Good Night";
// }

// console.log(`${greeting}, ${name}!`);

/*
    9. Traffic Light System – Ask the user for a traffic light color (red,
    yellow, green). Print appropriate messages:

    Red: "Stop!"

    Yellow: "Get Ready!"

    Green: "Go!"
*/
// const color = prompt(
//   "Enter a traffic light color (red, yellow, green): "
// ).toLowerCase();

// let message;

// switch (color) {
//   case "red":
//     message = "Stop!";
//     break;
//   case "yellow":
//     message = "Get Ready!";
//     break;
//   case "green":
//     message = "Go!";
//     break;
//   default:
//     message = "Invalid color";
// }

// console.log(message);

/*
    10. Multiplication Table – Ask the user for a number and print its
    multiplication table up to 10.
*/
// const number = Number(prompt("Enter a number: "));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} * ${i} = ${number * i}`);
// }

/*
    11. Grade Calculator – Ask the user for their marks (0-100).
    Assign grades based on the range:

    90-100: A

    80-89: B

    70-79: C

    60-69: D

    Below 60: F
*/
// const marks = Number(prompt("Enter your marks (0-100): "));
// let grade;

// if (marks >= 90 && marks <= 100) {
//   grade = "A";
// } else if (marks >= 80 && marks <= 89) {
//   grade = "B";
// } else if (marks >= 70 && marks <= 79) {
//   grade = "C";
// } else if (marks >= 60 && marks <= 69) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// console.log(`Grade: ${grade}`);

/*
    12. Simple Login System – Set a predefined username and
    password. Ask the user to enter their credentials using
    prompt(). If correct, print “Login Successful”; otherwise, print
    “Incorrect username or password.”
*/
// const username = "admin";
// const password = "1234";

// const enteredUsername = prompt("Enter your username: ");
// const enteredPassword = prompt("Enter your password: ");

// if (enteredUsername === username && enteredPassword === password) {
//   console.log("Login Successful");
// } else {
//   console.log("Incorrect username or password");
// }

/*
    13. Swapping Without Third Variable – Take two numbers from the
    user and swap their values without using a third variable.
*/
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
// let third = num1 + num2;
// num1 = third - num1;
// num2 = third - num2;
// console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);

/*
    14. FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
    multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
    only 5, print “Buzz”; otherwise, print the number itself.
*/
// const number = Number(prompt("Enter a number: "));

// if (number % 3 == 0 && number % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 == 0) {
//   console.log("Fizz");
// } else if (number % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log(number);
// }

/*
    15. Number Reversal – Take a three-digit number from the user
    and print its reverse. (Example: 123 → 321).
*/
// const number = Number(prompt("Enter a three-digit number: "));
// let numCopy = number;
// let reverse = 0;

// while (numCopy > 0) {
//   let lastDigit = numCopy % 10;
//   numCopy = Math.floor(numCopy / 10);
//   reverse = reverse * 10 + lastDigit;
// }

// console.log(`Reverse: ${reverse}`);

/*
    16. Sum of Digits – Take a number from the user and print the sum
    of its digits. (Example: 123 → 1+2+3 = 6).
*/
// const number = Number(prompt("Enter a number: "));
// let numCopy = number;
// let sum = 0;

// while (numCopy > 0) {
//   let lastDigit = numCopy % 10;
//   numCopy = Math.floor(numCopy / 10);
//   sum += lastDigit;
// }

// console.log(`Sum of digits: ${sum}`);

/*
    17. Palindrome Checker – Ask the user for a word. Check if it
    reads the same forward and backward. Print “Palindrome” or
    “Not a Palindrome.”
*/
// const word = prompt("Enter a word: ").toLowerCase();

// let start = 0;
// let end = word.length - 1;
// let isPalindrome = true;

// while (start < end) {
//   if (word[start] !== word[end]) {
//     isPalindrome = false;
//     break;
//   }
//   start++;
//   end--;
// }

// if (isPalindrome) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a Palindrome");
// }

/*
    18. Reverse Without String Methods – Ask the user for a number
    and reverse it without using .split(), .reverse(), or .join().
*/
// const number = Number(prompt("Enter a number: "));
// let numCopy = number;
// let reverse = 0;

// while (numCopy > 0) {
//   let lastDigit = numCopy % 10;
//   numCopy = Math.floor(numCopy / 10);
//   reverse = reverse * 10 + lastDigit;
// }

// console.log(`Reverse: ${reverse}`);

/*
    19. Find Second Largest – Take three numbers as input and find
    the second largest number (without using sort() or Math.max()).
*/
// const num1 = Number(prompt("Enter first number: "));
// const num2 = Number(prompt("Enter second number: "));
// const num3 = Number(prompt("Enter third number: "));

// let secondLargest;

// if (num1 === num2 && num2 === num3) {
//   console.log("All numbers are equal. No second largest number.");
// } else if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
//   secondLargest = num1;
// } else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
//   secondLargest = num2;
// } else {
//   secondLargest = num3;
// }

// if (secondLargest) {
//   console.log(`Second largest number: ${secondLargest}`);
// }

/*
    20. Find First Non-Repeating Character – Ask the user for a word
    and find the first character that does not repeat. Example: hello
    → h (since e, l, and o repeat).
*/
// const word = prompt("Enter a word: ").toLowerCase();
// let nonRepeatingChar = null;

// for (let i = 0; i < word.length; i++) {
//   let char = word[i];
//   if (word.indexOf(char) === word.lastIndexOf(char)) {
//     nonRepeatingChar = char;
//     break;
//   }
// }

// if (nonRepeatingChar) {
//   console.log(`First non-repeating character: ${nonRepeatingChar}`);
// } else {
//   console.log("No non-repeating character found.");
// }

/*
    21. Even Digit Counter – Take a number from the user and count
    how many even digits it has.
*/
// const number = Number(prompt("Enter a number: "));
// let numCopy = number;
// let evenCount = 0;

// while (numCopy > 0) {
//   let lastDigit = numCopy % 10;
//   if (lastDigit % 2 === 0) {
//     evenCount++;
//   }
//   numCopy = Math.floor(numCopy / 10);
// }

// console.log(`Number of even digits: ${evenCount}`);

/*
    22. Nested Condition Challenge – Ask the user for their age and
    salary. Print a message based on conditions:

    If age is below 18, print “Not eligible”

    If age is 18 or more but salary is less than ₹20,000, print “Low
    Salary”

    If salary is ₹50,000 or more, print “High Salary”

    . Otherwise, print “Medium Salary”
*/
// const age = Number(prompt("Enter your age: "));
// const salary = Number(prompt("Enter your salary: "));

// if (age < 18) {
//   console.log("Not eligible");
// } else if (salary < 20000) {
//   console.log("Low Salary");
// } else if (salary >= 50000) {
//   console.log("High Salary");
// } else {
//   console.log("Medium Salary");
// }

/*
    23. Toggle Case – Ask the user for a word and toggle the case of
    every character. Example: HeLLo → hEllO.
*/
// const word = prompt("Enter a word: ");
// let toggledWord = "";

// for (let i = 0; i < word.length; i++) {
//   let char = word[i];
//   if (char >= "A" && char <= "Z") {
//     toggledWord += char.toLowerCase();
//   } else if (char >= "a" && char <= "z") {
//     toggledWord += char.toUpperCase();
//   } else {
//     toggledWord += char;
//   }
// }

// console.log(`Toggled word: ${toggledWord}`);

/*
    24. Find the Missing Number in a Sequence – Take a list of
    consecutive numbers (except one missing) and find the
    missing number. Example: 1, 2, 3, 5 → Missing number is 4.
*/
// const numbers = prompt("Enter a list of consecutive numbers: ");
// const numArr = numbers.split("").map((num) => Number(num));

// let missingNum = null;

// for (let i = 0; i < numArr.length - 1; i++) {
//   if (numArr[i + 1] - numArr[i] !== 1) {
//     missingNum = numArr[i] + 1;
//     break;
//   }
// }

// if (missingNum) {
//   console.log(`Missing number is: ${missingNum}`);
// }

/*
    25. Convert Number to Words – Take a single-digit number and
    print it in words (Example: 1 → One, 2 → Two).
*/
// const number = Number(prompt("Enter a single-digit number: "));
// let word;

// switch (number) {
//   case 0:
//     word = "Zero";
//     break;
//   case 1:
//     word = "One";
//     break;
//   case 2:
//     word = "Two";
//     break;
//   case 3:
//     word = "Three";
//     break;
//   case 4:
//     word = "Four";
//     break;
//   case 5:
//     word = "Five";
//     break;
//   case 6:
//     word = "Six";
//     break;
//   case 7:
//     word = "Seven";
//     break;
//   case 8:
//     word = "Eight";
//     break;
//   case 9:
//     word = "Nine";
//     break;
//   default:
//     word = "Invalid number";
// }

// console.log(word);
