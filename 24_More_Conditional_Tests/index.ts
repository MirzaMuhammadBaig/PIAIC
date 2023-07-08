// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let string1: string = 'hello';
let string2: string = 'world';
let number1: number = 5;
let number2: number = 10;
let array: string[] = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == 'hello');
console.log("________________________________________________________________");

console.log("Is string1 not equal to 'world'? I predict True.");
console.log(string1 != 'world');
console.log("________________________________________________________________");

console.log("Is string1 equal to string2? I predict False.");
console.log(string1 == string2);
console.log("________________________________________________________________");

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2);
console.log("________________________________________________________________");

// Tests using the lower case function
console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() == 'hello');
console.log("________________________________________________________________");

console.log("Is string2 in lowercase not equal to 'WORLD'? I predict True.");
console.log(string2.toLowerCase() != 'WORLD');
console.log("________________________________________________________________");

// Numerical tests
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 == number2);
console.log("________________________________________________________________");

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 != number2);
console.log("________________________________________________________________");

console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2);
console.log("________________________________________________________________");

console.log("Is number1 greater than number2? I predict False.");
console.log(number1 > number2);
console.log("________________________________________________________________");

console.log("Is number1 less than or equal to number2? I predict True.");
console.log(number1 <= number2);
console.log("________________________________________________________________");

console.log("Is number1 greater than or equal to number2? I predict False.");
console.log(number1 >= number2);
console.log("________________________________________________________________");

// Tests using "and" and "or" operators
console.log("Is number1 greater than 0 and number2 greater than 0? I predict True.");
console.log(number1 > 0 && number2 > 0);
console.log("________________________________________________________________");

console.log("Is number1 greater than 0 and number2 less than 0? I predict False.");
console.log(number1 > 0 && number2 < 0);
console.log("________________________________________________________________");

console.log("Is number1 less than 0 or number2 less than 0? I predict True.");
console.log(number1 < 0 || number2 < 0);
console.log("________________________________________________________________");

console.log("Is number1 less than 0 or number2 greater than 0? I predict False.");
console.log(number1 < 0 || number2 > 0);
console.log("________________________________________________________________");

// Test whether an item is in an array
console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana'));
console.log("________________________________________________________________");

console.log("Is 'grape' in the array? I predict False.");
console.log(array.includes('grape'));
console.log("________________________________________________________________");

// Test whether an item is not in an array
console.log("Is 'cherry' not in the array? I predict False.");
console.log(!array.includes('cherry'));
console.log("________________________________________________________________");

console.log("Is 'orange' not in the array? I predict True.");
console.log(!array.includes('orange'));
console.log("________________________________________________________________");
