// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
}

Person.prototype.poop = function() {
  while (this.stomach.length > 0){
    this.stomach.pop();
  }
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`
}

const yiRen = new Person("Mary", 50) 
yiRen.eat('Lasanga');
console.log(yiRen.stomach)
yiRen.poop()
console.log(yiRen.stomach)

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(distanceMiles) {
  if (this.tank !== 0){
    this.odometer += distanceMiles;
    this.tank -= distanceMiles/this.milesPerGallon;
  } if (this.tank === 0) {
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}
let corvette = new Car("corvette", 30)
corvette.fill(10)
corvette.drive(300)
console.log(corvette.tank)
console.log(corvette.drive(1))

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

const cormac = new Baby("Cormac", "9 months", "tin can");
console.log(cormac.play())


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global Object Binding - when in the global scope the 'this' will reach out for something in the window object
  2. Implicit Binding - when a dot is used to call a function the object before the dot is 'this'
  3. New binding - when a Constructor (which we capitalize to show that it is) is used, the new key is used to connect the 'this' in the object being constructed and the 'this' in the constructor function
  4. Explicit binding - this is basically being extremely direct and saying hey - regardless of everything else, do 'this'. So far I understand this to be done with .call and .apply 
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
