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
console.log(wordStore.join(","));
console.log(wordStore.reverse().join(","));

/* 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly aver‐
age, a specific week’s average, and all the weeks’ averages. */
function weekTemps() {
  this.dataStore = [[], [], [], []];
  this.addTemperature = addTemperature;
  this.monthlyAverage = monthlyAverage;
  this.weeklyAverage = weeklyAverage;
  this.allWeeksAverage = allWeeksAverage;
}
function addTemperature(week, temp) {
  this.dataStore[week - 1].push(temp);
}
function monthlyAverage() {
  const temps = this.dataStore;
  let total = 0;
  for (let i = 0; i < temps.length; i++) {
    let columnTemp = 0;
    for (let j = 0; j < temps[i].length; j++) {
      columnTemp += temps[i][j];
    }
    total += columnTemp / temps[i].length;
  }
  return total / temps.length;
}

function weeklyAverage(week) {
  const presentWeek = this.dataStore[week - 1];
  let total = 0;
  for (let i = 0; i < presentWeek.length; i++) {
    total += presentWeek[i];
  }
  return total / presentWeek.length;
}

function allWeeksAverage() {
  const allWeek = this.dataStore;
  const allWeekAverageList = [];
  for (let i = 0; i < allWeek.length; i++) {
    let weekTotal = 0;
    for (let j = 0; j < allWeek[j].length; j++) {
      weekTotal += allWeek[i][j];
    }
    allWeekAverageList.push(weekTotal / allWeek[i].length);
  }
  return allWeekAverageList;
}

/* 4. Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word. */
function ObjectStore() {
  this.letters = [];
  this.addLetter = addLetter;
  this.showLetters = showLetters;
}
function addLetter(letter) {
  this.letters.push(letter);
}
function showLetters() {
  return this.letters.join("");
}
