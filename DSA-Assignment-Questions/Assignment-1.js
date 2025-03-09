// Question-1
// let i = 11;
// i = i++ + ++i;
// console.log(i); // Output: 11 + 13 = 24

// Question-2
// let a = 11,
//   b = 22,
//   c;

// c = a + b + a++ + b++ + ++a + ++b;
// console.log(c); // Output: 11 + 22 + 11 + 22 + 13 + 24 = 103

// Question-3
// let i = 0;
// i = i++ - --i + ++i - i--;
// console.log(i); // Output: 0 - 0 + 1 - 1 = 0

// Question-4
// let b = true;
// b++;
// console.log(b); // Output: 2

// Question-5
// let i = 1,
//   j = 2,
//   k = 3;
// let m = i-- - j-- - k--;
// console.log("i=" + i); // 0
// console.log("j=" + j); // 1
// console.log("k=" + k); // 2
// console.log("m=" + m); // 1 - 2 - 3 = -4

// Question-6
// let a = 1,
//   b = 2;
// console.log(--b - ++a + ++b - --a); // Output: 1 - 2 + 2 - 1 = 0

// Question-7
// let i = 19,
//   j = 29,
//   k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i); // 19
// console.log("j=" + j); // 29
// console.log("k=" + k); // 19 - 18 + 28 - 29 + 18 - 29 + 19 - 28 = -20

// Question-8
// let i = 11;
// let j = --(i++); // Error: Invalid left-hand side expression in prefix operation

// Question-9
// let m = 0,
//   n = 0;
// let p = --m * --n * n-- * m--;
// console.log(p); // Output: -1 * -1 * -1 * -1 = 1

// Question-10
// let a = 1;
// a = a++ + ++a * --a - a--;
// console.log(a); // Output: 1 + 3 * 2 - 2 = 5

// Question-11
// let a = 11++; // Error: Invalid left-hand side expression in postfix operation

// Question-12
// let i = 0,
//   j = 0;
// console.log(--i * i++ * ++j * j++); // Output: -1 * -1 * 1 * 1 = 1
