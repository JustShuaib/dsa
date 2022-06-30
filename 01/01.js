/* 1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average. */
function Grades() {
  this.grades = [];
  this.addGrade = addGrade;
  this.averageGrade = averageGrade;
}

function addGrade(grade) {
  this.grades.push(grade);
}

function averageGrade() {
  const grades = this.grades;
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  const average = Math.round(total / grades.length);
  return average;
}

/* 2. Store a set of words in an array and display the contents both forward and backward. */
const wordStore = ["words", "a rather long word", "text", "another dummy text"];
console.log(wordStore);
console.log(wordStore.reverse());
/* 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly aver‐
age, a specific week’s average, and all the weeks’ averages. */

/* 4. Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word. */
