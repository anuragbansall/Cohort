/*
    1. ISBN Number

    Description: An ISBN (International Standard Book Number) is a unique 10-digit
    number assigned to books. The ISBN is valid if the sum of its digits, each
    multiplied by its position (1 to 10), is divisible by 11.

    Example:
    * Input: 020131452
    * Output: Invalid ISBN
    * Explanation: The sum of the digits multiplied by their positions is not
    divisible by 11.
    * Input: 0471958697
    * Output: Valid ISBN
    * Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11.

    Hint: Use a loop to multiply each digit by its respective position and check
    divisibility by 11.
*/

function isValidISBN(isbn) {
  let sum = 0;

  for (let i = 0; i < isbn.length; i++) {
    sum += isbn[i] * (i + 1);
  }

  if (sum % 11 === 0) {
    console.log("Valid ISBN");
  } else {
    console.log("Invalid ISBN");
  }
}

isValidISBN("020131452"); // Invalid ISBN
isValidISBN("0471958697"); // Valid ISBN

/*
    2. HCF/GCD

    Description: The Highest Common Factor (HCF) or Greatest Common Divisor
    (GCD) of two numbers is the largest number that divides both numbers
    without leaving a remainder.

    Example:
    * Input: a = 12, b = 18
    * Output: 6
    * Explanation: Factors of 12: {1,2,3,4,6,12}, Factors of 18: {1,2,3,6,9,18}.
    Common factors: {1,2,3,6}. The highest is 6.

    Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b).
*/

function findHCF(a, b) {
  let factorA = factors(a);
  let factorB = factors(b);

  let commonFactors = factorA.filter((value) => factorB.includes(value));
  let hcf = Math.max(...commonFactors);

  console.log(hcf);
  return hcf;
}

function factors(num) {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

findHCF(12, 18); // 6

/*
    3. Harshad Number

    Description: A number is a Harshad number if it is divisible by the sum of its
    digits.

    Example:
    * Input: 18
    * Output: Harshad Numbea
    * Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.

    Hint: Extract digits using modulo (%) and integer division (//)
*/

function isHarshadNumber(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    temp = Math.floor(temp / 10);
    sum += digit;
  }

  if (num % sum === 0) {
    console.log("Harshad Number");
  } else {
    console.log("Not a Harshad Number");
  }
}

isHarshadNumber(18); // Harshad Number
isHarshadNumber(19); // Not a Harshad Number

/*
    4. Perfect Square

    Description: A number is a perfect square if it is the square of an integer.

    Example:
    * Input: 25
    * Output: Perfect SquarN
    * Explanation: 5 × 5 = 25.

    Hint: Use sqrt(N), check if it’s an integer.
*/

function isPerfectSquare(num) {
  let sqrt = Math.sqrt(num);

  if (Number.isInteger(sqrt)) {
    console.log("Perfect Square");
  } else {
    console.log("Not a Perfect Square");
  }
}

isPerfectSquare(25); // Perfect Square
isPerfectSquare(26); // Not a Perfect Square

/*
    5. Abundant Number

    Description: A number is abundant if the sum of its proper divisors is greater
    than the number itself.

    Example:
    * Input: 12
    * Output: Abundant Numbea
    * Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).

    Hint: Use a loop to find proper divisors.
*/

function isAbundantNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum > num) {
    console.log("Abundant Number");
  } else {
    console.log("Not an Abundant Number");
  }
}

isAbundantNumber(12); // Abundant Number
isAbundantNumber(13); // Not an Abundant Number

/*
    6. Fibonacci Series using Loop

    Description: Print Fibonacci series up to N terms using a loop.

    Example:
    * Input: N = 6
    * Output: 0, 1, 1, 2, 3, 5

    Hint: Use a loop and store previous two numbers.
*/

function fibonacciSeries(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}

fibonacciSeries(6); // 0, 1, 1, 2, 3, 5

/*
    7. Find Numbers with Exactly X Divisors (Java)

    Description: Find numbers that have exactly X divisors.

    Example:
    * Input: X = 3
    * Output: 4, 9, 25, 49
    * Explanation: These numbers have exactly three divisors.

    Hint: Use prime factorization.
*/

function findNumbersWithXDivisors(x) {
  let numbers = [];

  for (let i = 2; i < 100; i++) {
    if (findDivisors(i) === x) {
      numbers.push(i);
    }
  }

  console.log(numbers);
}

function findDivisors(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
}

findNumbersWithXDivisors(3); // [4, 9, 25, 49]

/*
    8. Prime Factors in JavaScript

    Description: Find all prime factors of a number.

    Example:
    * Input: 30
    * Output: 2, 3, 5

    Hint: Use division method.
*/

function primeFactors(num) {
  let factors = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }

  console.log(factors);
}

primeFactors(30); // [2, 3, 5]

/*
    9. Calculate Area using Switch Statement

    Description: Find the area of a circle, rectangle, or triangle using switch.

    Example:
    * Input: Choice = Circle, Radius = 5
    * Output: Area = 78.5

    Hint: Use switch with case statements.
*/

function calculateArea(choice) {
  switch (choice) {
    case "Circle":
      return function (radius) {
        return Math.PI * radius * radius;
      };
    case "Rectangle":
      return function (length, breadth) {
        return length * breadth;
      };
    case "Triangle":
      return function (base, height) {
        return 0.5 * base * height;
      };
    default:
      return null;
  }
}

let circleArea = calculateArea("Circle");
console.log("Area = " + circleArea(5));

/*
    10. Neon Number

    Description: A number where the sum of digits of its square equals the
    number itself.

    Example:
    * Input: 9
    * Output: Neon Numbe;
    * Explanation: 9² = 81, sum of digits = 9.

    Hint: Find square, sum digits, compare.
*/

function isNeonNumber(num) {
  let square = num * num;
  let sum = 0;

  while (square > 0) {
    sum += square % 10;
    square = Math.floor(square / 10);
  }

  if (sum === num) {
    console.log("Neon Number");
  } else {
    console.log("Not a Neon Number");
  }
}

isNeonNumber(9); // Neon Number
isNeonNumber(10); // Not a Neon Number

/*
    11. Sum of Even Indexed Fibonacci Numbers

    Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth
    Fibonacci number.

    Example:
    * Input: N = 4
    * Output: 12

    Hint: Use a loop and maintain a sum for even-indexed elements.
*/

function sumOfEvenIndexFibonacci(n) {
  let a = 0;
  let b = 1;
  let sum = 0;

  for (let i = 0; i < 2 * n; i++) {
    if (i % 2 === 0) {
      sum += a;
    }

    let temp = a;
    a = b;
    b = temp + b;
  }

  console.log(sum);
}

sumOfEvenIndexFibonacci(4); // 33

/*
    12. Find the Largest Digit in a Number

    Description: Find the largest digit in a given number.

    Example:
    * Input: 54829
    * Output: 9

    Hint: Extract digits using modulo (% 10) and compare
*/

function findLargestDigit(num) {
  let max = 0;

  while (num > 0) {
    let digit = num % 10;
    max = Math.max(max, digit);
    num = Math.floor(num / 10);
  }

  console.log(max);
}

findLargestDigit(54829); // 9

/*
    13. Find LCM of Two Numbers

    Description: Find the Least Common Multiple (LCM) of two numbers.

    Example:
    * Input: a = 12, b = 1S
    * Output: 60

    Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b).
*/

function findLCM(a, b) {
  let gcd = findHCF(a, b);
  let lcm = (a * b) / gcd;

  console.log(lcm);
}

findLCM(12, 18); // 36

/*
    14. Find the Sum of Even Digits in a Number

    Description: Find the sum of all even digits in a given number.

    Example5
    * Input: 2382
    * Output: 12

    Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum.
*/

function sumOfEvenDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) {
      sum += digit;
    }
    num = Math.floor(num / 10);
  }

  console.log(sum);
}

sumOfEvenDigits(2382); // 12

/*
    15. Number of Days in a Month

    Description: Find the number of days in a given month and year (to handle leap
    years).

    Example:
    * Input: Month = 2, Year = 2024
    * Output: 29

    Hint: Use conditions:
    * 31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec.
    * 30 Days: Apr, Jun, Sep, Nov.
    * February: 28 or 29 (check for leap year using year % 4 == 0 but not year %
    100 != 0 unless year % 400 == 0).
*/

function daysInMonth(month, year) {
  const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  const monthsWith30Days = [4, 6, 9, 11];

  if (monthsWith30Days.includes(month)) {
    console.log(30);
  } else if (monthsWith31Days.includes(month)) {
    console.log(31);
  } else {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(29);
    } else {
      console.log(28);
    }
  }
}

daysInMonth(2, 2024); // 29
daysInMonth(2, 2023); // 28
daysInMonth(4, 2023); // 30
