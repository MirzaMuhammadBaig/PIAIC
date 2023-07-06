// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Muhammad";
console.log("In lower case", personName.toLowerCase());
console.log("In upper case", personName.toUpperCase());
var titleCaseName = personName.split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(' ');
console.log("In Title case", titleCaseName); // Prints "John Doe"
