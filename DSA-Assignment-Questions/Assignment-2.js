/*
    Q1. Indian Currency Notes Breakdown

    You need to write a program that will take an amount as input and will output the minimum number of notes required to make that amount.

    Denominations: 1, 2, 5, 10, 20, 50, 100, 200, 500, 2000
*/

function indianCurrencyNotesBreakdown(amount) {
  let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  let notesCount = {};

  for (let note of denominations) {
    if (amount >= note) {
      notesCount[note] = Math.floor(amount / note);
      amount = amount % note;
    }
  }

  return notesCount;
}

console.log(indianCurrencyNotesBreakdown(4327));

/*
    Q2. WAP to accept rating of the movie as double and Movie name as string. 
    Check and print the category of the movie based on the rating.
*/

function movieCategory(rating, movieName) {
  if (rating > 0 && rating <= 2) {
    return `${movieName} is Flop`;
  } else if (rating > 2 && rating <= 3.4) {
    return `${movieName} is Below Average`;
  } else if (rating > 3.4 && rating <= 4.5) {
    return `${movieName} is Average`;
  } else if (rating > 4.5 && rating <= 5) {
    return `${movieName} is Hit`;
  } else {
    return "Invalid Rating";
  }
}

console.log(movieCategory(4.5, "The Shawshank Redemption"));

/*
    Q3. WAP to calculate the salary of an employee.
*/

function calculateSalary(gender, years, qualifications) {
  let salary = 0;

  if (gender.toLowerCase() === "male") {
    if (years >= 10) {
      if (qualifications.toLowerCase() === "pg") {
        salary = 15000;
      } else if (qualifications.toLowerCase() === "ug") {
        salary = 10000;
      }
    } else {
      if (qualifications.toLowerCase() === "pg") {
        salary = 10000;
      } else if (qualifications.toLowerCase() === "ug") {
        salary = 7000;
      }
    }
  } else if (gender.toLowerCase() === "female") {
    if (years >= 10) {
      if (qualifications.toLowerCase() === "pg") {
        salary = 12000;
      } else if (qualifications.toLowerCase() === "ug") {
        salary = 9000;
      }
    } else {
      if (qualifications.toLowerCase() === "pg") {
        salary = 10000;
      } else if (qualifications.toLowerCase() === "ug") {
        salary = 6000;
      }
    }
  }

  return salary;
}

console.log(calculateSalary("male", 10, "pg"));
