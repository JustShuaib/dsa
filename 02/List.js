class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
  }
}
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
function find(element) {
  if (typeof element !== "string")
    throw new TypeError("element must be a string");
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) return i;
  }
  return -1;
}
function toString() {
  return this.dataStore.join(", ");
}
function front() {
  this.pos = 0;
}
function end() {
  this.pos = this.listSize - 1;
}
function prev() {
  if (this.pos > 0) this.pos--;
}
function next() {
  if (this.pos < this.listSize - 1) this.pos++;
}
function moveTo(position) {
  if (position > this.listSize - 1) this.pos = listSize - 1;
  this.pos = position;
}
function currPos() {
  return this.pos;
}
function getElement() {
  return this.dataStore[this.pos];
}
function append(element) {
  this.dataStore[this.listSize++] = element;
}
function remove(element) {
  if (typeof element !== "string")
    throw new TypeError("element must be a string");
  const foundAt = this.find(element);
  if (foundAt === -1) return false;
  this.dataStore.splice(foundAt, 1);
  this.listSize--;
  return true;
}
function length() {
  return this.listSize;
}

function insert(element, after) {
  const insertPos = this.find(after);
  if (insertPos === -1) return false;
  this.dataStore.splice(insertPos + 1, 0, element);
  this.listSize++;
  return true;
}

function contains(element) {
  if (typeof element !== "string")
    throw new TypeError("element must be a string");
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) return true;
  }
  return false;
}
/* 1. Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.*/

function insertLarge(element, list) {
  if (!(list instanceof List)) throw new TypeError("list must be a Type List");
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (element > list.getElement()) {
      list.append(element);
      return true;
    }
    return false;
  }
}

/* 2. Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list. */

function smallInsert(element, list) {
  if (!(list instanceof List)) throw new TypeError("list must be a Type List");
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (element < list.getElement()) {
      list.append(element);
      return true;
    }
    return false;
  }
}
/* 3. Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.*/

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}
const genderList = [
  "male",
  "female",
  "hermaphrodite",
  "mammal",
  "queer",
  "binary",
  "other",
];
const randomNumber = () => Math.floor(Math.random() * 7);

const people = new List();

for (let i = 0; i < 20; i++) {
  people.append(new Person(`user ${i + 1}`, genderList[randomNumber()]));
}

function sameGender(gender, list) {
  if (!(list instanceof List)) throw new TypeError("list must be a Type List");
  if (typeof gender !== "string")
    throw new SyntaxError("gender must be a string");
  const genderList = [];
  for (let i = 0; i < list.length(); i++) {
    if (list.dataStore[i].gender === gender) {
      genderList.push(list.dataStore[i]);
    }
  }
  return genderList;
}
const test = sameGender("female", people);
console.log(test);
/* 4. Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.*/
/* 5. Create a check-in function for the video-rental kiosk program so that a returned
movies is deleted from the rented movies list and is added back to the available
movies list */
