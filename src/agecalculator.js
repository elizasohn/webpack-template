export class User {
  constructor(age) {
    this.age = age;
  }
  get mercury() {
    return this.calcMercury();
  }
  calcMercury() {
    return this.age * .24;
  }
  get venus() {
    return this.calcVenus();
  }
  calcVenus() {
    return this.age * .62;
  }
  get mars() {
    return this.calcMars();
  }
  calcMars() {
    return this.age * 1.88;
  }

};





// Take a person’s age in years and create a class that does the following:
//
// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.



// MDN's documentation on classes has this section on prototype method:
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }
//
// const square = new Rectangle(10, 10);
//
// console.log(square.area); // 100
//
// and is similar to the epicodus lesson on classes:
//
// class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }
//
//   checkType() {
//     //Function body goes here.
//   }
//
// BUT wouldn't it be simpler and shorter and cleaner to do something like:
//
// class User {
//   constructor(age, mercury) {
//     this.age = age;
//     this.mercury = age * .24;
//   }
// };
//
// or is that why it's referred to as "Syntatic Sugar"? To be cleaner and more readable? Which is best practice?
