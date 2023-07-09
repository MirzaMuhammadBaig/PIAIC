// Adding Comments: Choose two of the programs you’ve written, and add at least one
// comment to each. If you don’t have anything specific to write because your programs 
// are too simple at this point, just add your name and the current date at the top of
// each program file. Then write one sentence describing what the program does.

////////////////////// 8 Point //////////////////////

console.log(4 + 4); // Addition: 4 + 4 = 8
console.log(16 - 8); // Subtraction: 16 - 8 = 8
console.log(4 * 2); // Multiplication: 4 * 2 = 8
console.log(40 / 5); // Division: 40 / 5 = 8

////////////////////// 3 Point (Name Case) //////////////////////////

let personName:string = "Muhammad"; // Store the name in personName variable

console.log("In lower case", personName.toLowerCase()); // Prints "muhammad"
console.log("In upper case", personName.toUpperCase()); // Prints "MUHAMMAD"

let titleCaseName: string = personName.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');

console.log("In Title case", titleCaseName); // Prints "Muhammad"