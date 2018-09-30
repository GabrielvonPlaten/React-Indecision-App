class Person {
  constructor(name = 'Annonymous', age = 0) {
    this.name     = name;
    this.age = age;
  }
  getGreetings() {
    return `Hi. I am ${this.name}.`
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`
  }
};

// Student Subclass
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // the super() function will call on the parent constructor function into the new subclass.
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription(); // Use super() to call on the parent's constructor's getDescription() method
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description; 
  }
}

const me = new Student('Gabriel', 22, 'Music Production');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());


// Challenge
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreetings() {
    let greeting = super.getGreetings();
    
    if(this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const tourist = new Traveler('John', 25, 'Florida');
console.log(tourist.getGreetings());