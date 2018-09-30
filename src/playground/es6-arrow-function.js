// arguments object - no longer bound with arrow functions
const add = function(a, b) {
    console.log(arguments);
    return a + b;
  }
  
  console.log(add(55, 1, 101));
  
  // ES6
  /* const add2 = (a, b) => {
    console.log(arguments); // Arguments only works with ES5 functions
    return a + b;
  }
  
  console.log(add2(55, 1)); */
  
  // The this keyword - no longer bound
  const user = {
    name: 'Gabriel',
    cities: ['Esteli', 'Stockholm'],
  
    printPlacesLived: function() {
      console.log(this.name)
      console.log(this.cities)
  
      let that = this;
      
      this.cities.forEach(function(city) {
        console.log(that.name + ' has lived in ' + city);
      })
    }
  }
  
  user.printPlacesLived();
  
  
  // ES6
  /* const user1 = {
    name: 'Gabriel',
    cities: ['Esteli', 'Stcokholm'],
  
    // Cannot read property 'name' of undefined
    // This is becuase the arrow function isn't bound to the object that resides in
    // Instead, it is looking at the global scope.
    // For the 'this' keyword, use the ES5 syntax.
    printPlacesLived2: () => {
      console.log(this.name);
      console.log(this.cities);
  
      this.cities.forEach((city) => { // This foreach will also not work.
        console.log('Gabriel has lived in ' + city);
      })
    }
  }
  
  user1.printPlacesLived2(); */
  
  // Solution for BOTH
  const user3 = {
    name: 'Gabriel',
    cities: ['Esteli', 'Stcokholm'],
  
    // Add the parenthesis right after the method's name and remove the arrow
    // Now the 'this' keyword will work within the object
    printPlacesLived3() {
  
      this.cities.forEach((city) => { // This foreach will also not work.
        console.log('Gabriel has lived in ' + city);
      })
    }
  }
  
  user3.printPlacesLived3();
  
  
  // Map
  const user4 = {
    name: 'Gabriel',
    cities: ['Esteli', 'Stcokholm', 'Ösmo'],
  
    // Add the parenthesis right after the method's name and remove the arrow
    // Now the 'this' keyword will work within the object
    printPlacesLived4() {
      return this.cities.map((city) => {
        return this.name + 'has lived in ' + city;
      })
    }
  }
  
  console.log(user4.printPlacesLived4());
  
  
  // Challenge Math
  const numbers = {
    numbers: [1, 2, 4, 6, 8, 16],
    multiply: 4,
  
    multiplayNumbers() {
      return this.numbers.map((int) => int * this.multiply)
    }
  }
  
  console.log(numbers.multiplayNumbers());
