// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let myArray: number[] = [1, 2, 3, 4, 5];

let index = 5;

if (index >= 0 && index < myArray.length) {
    let value = myArray[index] ;
    console.log(value);
} else {
    console.log("Index out of range!");
}

try {
  let value = myArray[index] = 6;
  console.log("\nNow, Index is not out of range!");
  console.log(value);
} catch (error) {
  console.log("Index out of range!");
}
